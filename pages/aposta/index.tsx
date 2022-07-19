import type { NextPage } from "next";
import Head from "next/head";
import { HeaderHand } from "../../components/headerHand";
import { FooterHand } from "../../components/footerHand";
import { BetComponent } from "../../components/betComponent";

const Aposta: NextPage = () => {
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
      <BetComponent />
      <FooterHand />
    </>
  );
};

export default Aposta;
