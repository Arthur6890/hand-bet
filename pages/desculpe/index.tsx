import type { NextPage } from "next";
import Head from "next/head";
import { HeaderHand } from "../../components/headerHand";
import { FooterHand } from "../../components/footerHand";
import BetLessThan24Hours from "../../components/betLessThan24Hours";

const BetLessThan24HoursPage: NextPage = () => {
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
      <BetLessThan24Hours />
      <FooterHand />
    </>
  );
};

export default BetLessThan24HoursPage;
