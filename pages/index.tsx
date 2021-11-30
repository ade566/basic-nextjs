import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/icon-user.png" width={300} height={300} alt="user" />
      <h1 className={styles["title-homepage"]}>Hello Ade</h1>
    </Layout>
  );
}
