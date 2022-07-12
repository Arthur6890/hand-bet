import React from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  text: string;
};
export default function Button({ text }: ButtonProps) {
  return (
    <a className={styles.main}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </a>
  );
}
