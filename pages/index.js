import axios from "axios";
import Head from "next/head";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider/Slider";
import Product from "../models/Product";
import styles from "../styles/Home.module.css";
import dbConnect from "../util/mongo";

export default function Home({ pizza }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza place in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {pizza && <PizzaList pizza={pizza} />}
    </div>
  );
}

export const getServerSideProps = async () => {
  // const res = await axios.get("http://localhost:3000/api/products");
  await dbConnect();
  const res = await Product.find();
  return {
    props: {
      pizza: JSON.parse(JSON.stringify(res)),
    },
  };
};
