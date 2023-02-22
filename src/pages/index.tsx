import Head from "next/head";
import { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Result from '@/components/result';
import Form from '@/components/form';
import {calculcateSustainablity} from '@/helper/helper';
import { Material } from "@/interfaces/types";


export default function Home() {

  const [sustainabilityScore, setSustainabilityScore] = useState(0)

  const handleCalculateScore = (materials : Material[]) => {
    calculcateSustainablity(materials)
  }

  return (
    <>
      <Head>
        <title>Sustainable Fashion</title>
        <meta name="description" content="A simple app to determine if your clothes are sustainable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
          <h1>Sustainable Fashion</h1>
      </header>
      <main className={styles.main}>
          <div className={styles.container}>
            <section className={styles.section}><Result score={sustainabilityScore} data={{}} /></section>
            <section className={styles.section}><Form /></section>
          </div>
      </main>
    </>
  );
}
