import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../public/images/handbalaLogo.png";
import ButtonComponent from "../button/index";
import styles from "./styles.module.scss";

export function HeaderHand() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className={styles.main}>
      <div className={styles.logo}>
        <Link href={"/"} passHref>
          <Image src={Logo} />
        </Link>
      </div>
      <div className={styles.content}>
        <ButtonComponent text="Escalações" href={"/"} />

        <ButtonComponent
          text="faça sua aposta"
          href={"https://www.instagram.com/handbala_atena/"}
        />
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
            <ButtonComponent text="Escalações" href={"/"} />

            <ButtonComponent
              text="faça sua aposta"
              href={"https://www.instagram.com/handbala_atena/"}
            />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </header>
  );
}
