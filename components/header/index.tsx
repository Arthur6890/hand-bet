import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/images/handbalaLogo.png";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image src={Logo} />
        </Link>
      </div>
      <div className={styles.content}>
        <Link href={"/escalacoes"} className={styles.redirect}>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Escalações
          </a>
        </Link>
        <Link href={"https://www.instagram.com/handbala_atena/"}>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            faça sua aposta
          </a>
        </Link>
      </div>
    </div>
  );
}
