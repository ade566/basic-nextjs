import type { NextPage } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className={styles["title-homepage"]}>Hello Ade</h1>
      <Footer />
    </>
  );
};

export default Home;
