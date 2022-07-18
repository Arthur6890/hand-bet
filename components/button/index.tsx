import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  text: string;
  href: string;
};
export default function Button({ text, href }: ButtonProps) {
  return (
    <>
      <Link href={href}>
        <a className={styles.main}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </a>
      </Link>
    </>
  );
}
