import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

const Escalacoes: NextPage = () => {
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
      <Header />
      <Escalacoes />
      <Footer />
    </>
  );
};

export default Escalacoes;
