import Layout from "../../components/Layout";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout pageTitle="Blog Page">
      <h1 className="title">Blog</h1>
      <ul>
        <li>
          <Link href="/blog/programming">Programming</Link>
        </li>
        <li>
          <Link href="/blog/ui-ux">I/UX</Link>
        </li>
      </ul>
    </Layout>
  );
}
