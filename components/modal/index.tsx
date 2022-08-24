import React, {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from "./styles.module.scss"

export function StudyOnlyModal() {

  useEffect(() => {
    setTimeout(
      function() {
        setShow(true)
      }, 3000)
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} className={styles.modal}>
    <Modal.Header closeButton className={styles.modalHeader}>
      <Modal.Title>{"Atenção!"}</Modal.Title>
    </Modal.Header>
    <Modal.Body className={styles.modalBody}>{'Este projeto é unica e exclusivamente educacional, não tendo seu desenvolvedor recebido nenhum valor para si, obedecendo o Decreto-Lei 9215/46, que foi recepcionado pela Constituição de 1988 como Lei Ordinária e que tem o seguinte objeto: "proíbe a prática ou exploração de jogos de azar em todo o território nacional".'}</Modal.Body>
  </Modal>
  )
}
