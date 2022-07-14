import React, { useEffect } from "react";
import styles from "./styles.module.scss";
// import Aos from "aos";

export function GritoCard() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000, once: true });
  // });
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>"HandBala, o que vocês são?"</h3>
          <h2>esquisitos!</h2>
        </div>
        <div className={styles.card}>
          <h2>
            <strong>handebol</strong>!
          </h2>
          <h3>"O que vocês jogam?"</h3>
        </div>
        <div className={styles.card}>
          <h3>"Vai subir alguém?"</h3>
          <h2>
            vai subir <strong>ninguém</strong>!
          </h2>
        </div>
        <div className={styles.cardA3}>
          <h3>
            um dois <strong>três</strong> aaaa três
          </h3>
        </div>
      </div>
    </div>
  );
}
