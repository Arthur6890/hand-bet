import type { NextPage } from "next";
import Head from "next/head";
import { GritoCard } from "../components/gritoDeGuerraCard";
import { HandBalaBanner } from "../components/handBalaBanner";
import { HeaderHand } from "../components/headerHand";
import { FooterHand } from "../components/footerHand";

const Home: NextPage = () => {
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
      <HandBalaBanner />
      <GritoCard />
      <FooterHand />
    </>
  );
};

export default Home;
