import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header";
import { GritoCard } from "../components/gritoDeGuerraCard";
import { HandBalaBanner } from "../components/handBalaBanner";
import Script from "next/script";
import { Footer } from "../components/footer";

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
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
      </Head>

      <Header />
      <HandBalaBanner />
      <GritoCard />
      <Footer />
    </>
  );
};

export default Home;
