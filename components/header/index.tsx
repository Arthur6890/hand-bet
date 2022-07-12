import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
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
        <Link href={"/"}>
          <Image src={Logo} />
        </Link>
      </div>
      <div className={styles.content}>
        <Link href={"/escalacoes"}>
          <ButtonComponent text="Escalações" />
        </Link>
        <Link href={"https://www.instagram.com/handbala_atena/"}>
          <ButtonComponent text="faça sua aposta" />
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
                <Link href={"/"}>
                  <Image src={Logo} />
                </Link>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offcanvasContent}>
            <Link href={"/escalacoes"}>
              <ButtonComponent text="Escalações" />
            </Link>
            <Link href={"https://www.instagram.com/handbala_atena/"}>
              <ButtonComponent text="faça sua aposta" />
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
