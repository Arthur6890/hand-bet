import React from "react";
import Button from "../button";
import styles from "./styles.module.scss";

export function HandBalaBanner() {
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <h2>Amistoso interno Handbala</h2>
        <h3>DCC vs Estatismática</h3>
      </div>
      <div className={styles.announcement}>
        <div className={styles.announcementTexts}>
          <h3>
            Simplesmente o maior amistoso do planeta, quiçá de toda a grande
            beagá.
          </h3>
          <h4>E você pode fazer dinheiro com isso!</h4>
        </div>
        <Button text="Faça sua aposta" href="/aposta" />
      </div>
    </div>
  );
}
