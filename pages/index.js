import Head from "next/head";
import styles from "./index.module.css";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main>
      <h1 className={styles.title}>TUITAH</h1>
    </main>
  </div>
);

export default Home;
