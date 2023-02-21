import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Result from '../components/result';
import Form from '../components/form';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sustainable Fashion</title>
        <meta name="description" content="A simple app to determine if your clothes are sustainable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>Sustainable Fashion</h1>
          <div className={styles.container}>
            <section className={styles.section}><Result data={{}} /></section>
            <section className={styles.section}><Form/></section>
          </div>
   
         
      </main>
    </>
  );
}
