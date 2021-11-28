import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="Blog Page">
      <h1 className="title">Blog {id}</h1>
    </Layout>
  );
}
