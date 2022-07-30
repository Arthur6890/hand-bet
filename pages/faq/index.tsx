import type { NextPage } from "next";
import Head from "next/head";
import { HeaderHand } from "../../components/headerHand";
import { FooterHand } from "../../components/footerHand";
import { Faq } from "../../components/faq";

const FaqPage: NextPage = () => {
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
      <Faq title="Alguma dúvida? Veja aqui tudo o que você precisa saber!" />
      <FooterHand />
    </>
  );
};

export default FaqPage;
