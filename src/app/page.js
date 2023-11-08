import styles from './page.module.css'
import React from "react";
import SurveyComponent from "./SurveyComponent";


export default function Home() {
  if (typeof window !== undefined) {
    return (
      <main className={styles.main}>
          <div>
            <img id="fuser_now_logo" src="fuser_now_logo.png" alt="FuserNow Logo" width="100%"></img>
            <SurveyComponent></SurveyComponent>
          </div>
      </main>
    )
  }
}


