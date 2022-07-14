import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../public/images/handbalaLogo.png";
import ButtonComponent from "../button";
import styles from "./styles.module.scss";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href={"/"} passHref>
          <Image src={Logo} />
        </Link>
      </div>
      <div className={styles.content}>
        <Link href={"/escalacoes"} passHref>
          <a>
            <ButtonComponent text="Escalações" />
          </a>
        </Link>
        <Link href={"https://www.instagram.com/handbala_atena/"} passHref>
          <a>
            <ButtonComponent text="faça sua aposta" />
          </a>
        </Link>
      </div>

      <div className={`${styles.content} ${styles.responsive}`}>
        <button onClick={handleShow} className={styles.hamburguer}>
          <GiHamburgerMenu />
        </button>

        <Offcanvas
          show={show}
          onHide={handleClose}
          className={styles.offcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className={styles.logo}>
                <Link href={"/"} passHref>
                  <Image src={Logo} />
                </Link>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offcanvasContent}>
            <Link href={"/escalacoes"} passHref>
              <ButtonComponent text="Escalações" />
            </Link>
            <Link href={"https://www.instagram.com/handbala_atena/"} passHref>
              <ButtonComponent text="faça sua aposta" />
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
