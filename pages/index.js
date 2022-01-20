import Head from "next/head";
import Image from "next/image";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza place in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList/>
    </div>
  );
}
