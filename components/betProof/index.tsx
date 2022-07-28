import Image from "next/image";
import { parseCookies } from "nookies";
import React from "react";
import Logo from "../../public/images/handbalaLogoComprovante.png";
// import html2canvas from "html2canvas";
import styles from "./styles.module.scss";

const getDate = Date.now();
const currentDate = new Date(getDate);

const downloadComprovante = () => {
  console.log("cabeludo");
};

const retornaDia = () => {
  let aux = currentDate.getDay();
  let day;

  switch (aux) {
    case 0:
      day = "Domingo";
      break;
    case 1:
      day = "Segunda-Feira";
      break;
    case 2:
      day = "Terça-Feira";
      break;
    case 3:
      day = "Quarta-Feira";
      break;
    case 4:
      day = "Quinta-Feira";
      break;
    case 5:
      day = "Sexta-Feira";
      break;
    case 6:
      day = "Sábado-Feira";
      break;
  }

  return day;
};

export function BetProof() {
  const {
    comprovanteEmail,
    comprovanteNome,
    comprovanteSobrenome,
    comprovanteTelefone,
    comprovanteTime,
    comprovanteValor,
  } = parseCookies();

  return (
    <div className={styles.main}>
      <h2 className={styles.mainTitle}>Obrigado por apostar conosco</h2>
      <h3 className={styles.mainSubtitle}>
        Veja abaixo seu comprovante de aposta 👇
      </h3>

      <div className={styles.comprovanteDiv}>
        <div className={styles.image}>
          <Image src={Logo} />
        </div>
        <h2 className={styles.title}>Comprovante de aposta</h2>
        <h3
          className={styles.date}
        >{`${retornaDia()}, ${currentDate.toLocaleDateString()}, às ${currentDate.getHours()}:${currentDate.getMinutes()}`}</h3>

        <div className={styles.field}>
          <h2 className={styles.fieldName}>Valor</h2>
          <h2 className={styles.fieldValue}>R$ {comprovanteValor},00 </h2>
          {/* <h2 className={styles.fieldValue}>R$ comprovanteValor 00 </h2> */}
        </div>

        <div className={styles.field}>
          <h2 className={styles.fieldName}>Nome</h2>
          <h2 className={styles.fieldValue}>
            {`${comprovanteNome} ${comprovanteSobrenome}`}
          </h2>
          {/* <h2 className={styles.fieldValue}>R$ comprovanteValor 00 </h2> */}
        </div>

        <div className={styles.field}>
          <h2 className={styles.fieldName}>E-mail</h2>
          <h2 className={styles.fieldValue}>{comprovanteEmail} </h2>
          {/* <h2 className={styles.fieldValue}>R$ comprovanteValor 00 </h2> */}
        </div>

        <div className={styles.field}>
          <h2 className={styles.fieldName}>Telefone</h2>
          <h2 className={styles.fieldValue}>{comprovanteTelefone} </h2>
          {/* <h2 className={styles.fieldValue}>R$ comprovanteValor 00 </h2>  */}
        </div>

        <div className={styles.field}>
          <h2 className={styles.fieldName}>Time Apostado</h2>
          <h2 className={styles.fieldValue}>{comprovanteTime} </h2>
          {/* <h2 className={styles.fieldValue}>R$ comprovanteValor 00 </h2> */}
        </div>
      </div>

      <h4 className={styles.attention}>
        ⚠️ Sua aposta só será válida com a presença deste comprovante e do
        comprovante de pagamento ⚠️
      </h4>

      <button className={styles.button} onClick={() => downloadComprovante()}>
        Fazer download
      </button>
    </div>
  );
}
