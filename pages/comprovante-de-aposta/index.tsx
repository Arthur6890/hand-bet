import type { NextPage } from "next";
import Head from "next/head";
import { HeaderHand } from "../../components/headerHand";
import { FooterHand } from "../../components/footerHand";
import { BetProof } from "../../components/betProof";

const ComprovanteDeAposta: NextPage = () => {
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
      <BetProof />
      <FooterHand />
    </>
  );
};

export default ComprovanteDeAposta;
