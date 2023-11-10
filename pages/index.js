import styles from './index.module.css'
import React from "react";
// import SurveyComponent from "./SurveyComponent";
import Head from 'next/head';
import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import("./SurveyComponent"), {ssr: false})
 
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>  
      </Head>
      <main className={styles.main}>
          <div>
            <img id="fuser_now_logo" src="fuser_now_logo.png" alt="FuserNow Logo" width="50%" height="auto" text_align="center"></img>
            <SurveyComponent></SurveyComponent>
          </div>
      </main> 
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          &copy; 2023 FuserNow. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


