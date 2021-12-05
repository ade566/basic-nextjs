import Layout from "../../components/Layout";

interface Blog {
  id: number;
}
interface BlogDetailProps {
  blog: any;
}

export default function UsersDetail(props: BlogDetailProps) {
  const { blog } = props;
  return (
    <Layout pageTitle="Blog Page">
      <h1 className="title">
        #
        {blog.id}
      </h1>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  const paths = dataBlog.map((blog: Blog) => ({
    params: {
      id: `${blog.id}`,
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
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  }
}