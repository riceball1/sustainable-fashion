import Head from "next/head";
import { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Result from '../components/result';
import Form from '../components/form';

const inter = Inter({ subsets: ["latin"] });
export interface Material {
  name: String;
  percentage: Number;
}
export default function Home() {

  const [sustainabilityScore, setSustainabilityScore] = useState(0)
  // function used to calculate the materials percentage in the clothing item
  // the return value will be a percentage based on if it's more or less sustainable

  const calculcateSustainablity = (materials : Material[]) => {
    const materialWeight = {
      'rayon': 100,
    }

    let score = 0;
    const arr = materials;
    
    // iterate over the materials array

    // set the score
    setSustainabilityScore(score)

  }


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
            <section className={styles.section}><Result score={sustainabilityScore} data={{}} /></section>
            <section className={styles.section}><Form onCalculateSustainabilityScore={calculcateSustainablity}/></section>
          </div>
      </main>
    </>
  );
}
