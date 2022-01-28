import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider/Slider";
import styles from "../styles/Home.module.css";

export default function Home({ pizza }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza place in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList pizza={pizza} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizza: res.data,
    },
  };
};
