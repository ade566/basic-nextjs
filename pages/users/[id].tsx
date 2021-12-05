import Layout from "../../components/Layout";

interface User {
  id: number;
}
interface UsersDetailProps {
  user: any;
}

export default function UsersDetail(props: UsersDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="User Page">
      <h1 className="title">
        {user.name}
      </h1>
      <table>
        <tbody>
          <tr>
            <td>Email</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>&nbsp;:&nbsp;</td>
            <td>{user.website}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false
  }
}

interface GetStaticProps {
  params: {
    id: any;
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  }
}