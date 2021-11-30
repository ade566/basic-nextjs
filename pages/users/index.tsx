import Link from "next/link";
import Layout from "../../components/Layout";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Blog(props: UserProps) {
  const { dataUsers } = props;
  console.log(dataUsers);
  return (
    <Layout pageTitle="Blog Page">
      <h1 className="title">Users</h1>
      <ul>
        {dataUsers.map((user) => (
          <li key={user.id}>
            <span>
              {user.name}
              &nbsp;&nbsp;&nbsp;
            </span>
            <Link href="/users/{user.id}">
              <span>
                mailto:
                {user.email}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
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
