import { useRouter } from 'next/router';
import Layout from "../../components/Layout";
import styles from '../../styles/Users.module.css';

interface UserProps {
  dataUsers: Array<any>;
}

export default function User(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      <h1 className="title">Users</h1>
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
          <span>
            {user.name}
            &nbsp;&nbsp;&nbsp;
          </span>
          <br />
          <span>
            mailto:
            {user.email}
          </span>
        </div>
      ))
      }
    </Layout >
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
