// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type emailProps = {
  destinatario: string;
  assunto: string;
  corpo: string;
  anexos: string;
};

export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const config = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
    tls: {
      secureProtocol: "TLSv1_method",
      rejectUnauthorized: false,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const sendEmail = async ({
    destinatario,
    assunto,
    corpo,
    anexos,
  }: emailProps) => {
    const dadosEmail = {
      from: process.env.SMTP_REMETENTE,
      to: destinatario,
      subject: assunto,
      text: corpo,
    };

    transporter.sendMail(dadosEmail, (error: string) => {
      if (error) {
        console.error(error);
        throw error;
      }
      console.info(`Email enviado.`);
    });
  };
}
