import styles from './index.module.css'
import React from "react";
// import SurveyComponent from "./SurveyComponent";
import Head from 'next/head';
import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import("../public/SurveyComponent"), {ssr: false})
 
export default function Home() {
  if (typeof window !== undefined) {
    return (
      <div>
        <Head>
          <title>Cartra Feedback</title>
          <link rel="icon" href="/A_icon_dark_background_circle.svg" sizes="any"/>  
        </Head>
        <main className={styles.main}>
            {/* <div width="30%" height="auto" text_align="center"> */}
              <img id="cartra_logo" src="cartra_reverse_sticker.png" alt="Cartra Logo" width="30%" height="auto" text_align="center"></img>
              <SurveyComponent></SurveyComponent>
            {/* </div> */}
        </main> 
        <footer className={styles.footer}>
          <div className={styles.copyright}>
            &copy; 2024 Cartra. All rights reserved.
          </div>
        </footer>
      </div>
    )
  }
}


