import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/icon-user.png" width={300} height={300} alt="user"></Image>
      <h1 className={styles["title-homepage"]}>Hello Ade</h1>
    </Layout>
  );
};

export default Home;
