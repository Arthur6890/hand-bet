import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "./styles.module.scss";
import { FaqQuestions } from "./faq";

type FaqProps = {
  title: string;
};

export function Faq({ title }: FaqProps) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.accordion}>
          <Accordion defaultActiveKey="0">
            {FaqQuestions.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header className={styles.accordionHeader}>
                  {item.question}
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
