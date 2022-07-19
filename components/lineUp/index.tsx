import Image from "next/image";
import React from "react";
import { DccLineUp } from "./dcc";
import { EstatiLineUp } from "./estatimatica";
import DccLogo from "../../public/images/DCC_LOGO.png";
import EstatiLogo from "../../public/images/simb_est.png";
import styles from "./styles.module.scss";
import Button from "../button";

export function LineUp() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.team}>
          <div className={styles.teamBrand}>
            <Image src={DccLogo} alt="Dcc Logo" />
          </div>
          <div className={styles.names}>
            {DccLineUp.map((item, index) => (
              <p key={index}>{item.nome} </p>
            ))}
          </div>
          <Button text="Apostar em DCC" href="/aposta" />
        </div>

        <div className={styles.team}>
          <div className={styles.teamBrand}>
            <Image src={EstatiLogo} alt="Estatismástica Logo" />
          </div>
          <div className={styles.names}>
            {EstatiLineUp.map((item, index) => (
              <p key={index}>{item.nome} </p>
            ))}
          </div>
          <Button text="Apostar em Estatismástica" href="/aposta" />
        </div>
      </div>
    </div>
  );
}
