import { useRouter } from 'next/router';
import Layout from "../../components/Layout";
import styles from '../../styles/Blog.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Blog Page">
      <h1 className="title">Blog</h1>
      {dataBlog.map((blog) => (
        <div key={blog.id} onClick={() => router.push(`/blogs/${blog.id}`)} className={styles.card}>
          <span className={styles.id_blog}>
            #
            {blog.id}
          </span>
          <br />
          <span>
            {blog.title}
          </span>
        </div>
      ))
      }
    </Layout >
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
