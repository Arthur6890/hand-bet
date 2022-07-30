import type { NextPage } from "next";
import Head from "next/head";
import { HeaderHand } from "../../components/headerHand";
import { FooterHand } from "../../components/footerHand";
import styles from "./styles.module.scss"
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>HandBet.com</title>
        <meta
          name="description"
          content="Site de apostas criada para o jogo do HandBala DCC VS Estatística"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHand />
      <div className={styles.main}>
			<h2 className={styles.title}>Oops!</h2>
			<h3 className={styles.notFound}>404 - page not found</h3>
			<h3 className={styles.subTitle}>A página que você está buscando pode ter sido removida, está temporariamente indisponível ou não existe.</h3>
			<Link href={"/"}>
				<button className={styles.homepage}>

				Voltar página inicial
				</button>
			</Link>
		</div>
      <FooterHand />
    </>
  );
};

export default NotFoundPage;
