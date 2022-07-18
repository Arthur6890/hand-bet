import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/images/handbalaLogo.png";
import styles from "./styles.module.scss";
import { BsInstagram, BsWhatsapp } from "../../node_modules/react-icons/bs";

export function FooterHand() {
  return (
    <footer className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href={"/"} passHref>
            <Image src={Logo} />
          </Link>
        </div>
        <div className={styles.contact}>
          <h2>Contato</h2>
          <p>Instituto de Ciências Exatas UFMG - sala 1036</p>
          <p>Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte</p>
          <p>CEP 31270-901</p>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaIcon}>
            <a href="https://www.instagram.com/handbala_atena/" target="_blank">
              <BsInstagram />
            </a>
          </div>
          <div className={styles.socialMediaIcon}>
            <a href="http://wa.me/5531996103374" target="_blank">
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
