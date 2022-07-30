import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.scss"

export default function BetLessThan24Hours() {
	return (
		<div className={styles.main}>
			<h2 className={styles.title}>Voce ja fez uma aposta!!</h2>
			<h3 className={styles.subTitle}>Você só pode fazer uma aposta a cada 24 horas. Por favor volte mais tarde</h3>
			<div className={styles.buttonsDiv}>

				<Link href={"/"}>
					<button className={styles.homepage}>
						Voltar página inicial
					</button>
				</Link>

				<Link href={"/comprovante-de-aposta"}>
					<button className={styles.homepage}>
						Acessar meu comprovante
					</button>
				</Link>
			</div>
		</div>
	)
}
