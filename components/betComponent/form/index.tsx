import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookie } from "nookies";

type Inputs = {
  nome: string;
  sobrenome: string;
  timeApostado: string;
  email: string;
  whatsapp: number;
  valorApostado: number;
  aceitoTermos: boolean;
};

const schema = yup
  .object({
    nome: yup.string().required("Este campo é obrigatório"),
    sobrenome: yup.string().required("Este campo é obrigatório"),
    timeApostado: yup.string().defined().required("Este campo é obrigatório"),
    email: yup
      .string()
      .email("Favor insira um email válido")
      .required("Este campo é obrigatório"),
    whatsapp: yup
      .number()
      .positive()
      .integer()
      .required("Este campo é obrigatório"),
    valorApostado: yup.number().positive().required("Este campo é obrigatório"),
    aceitoTermos: yup.boolean().isTrue("Você deve aceitar os termos de uso"),
  })
  .required();

export function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setCookie(null, "comprovanteNome", data.nome, {
      path: "/",
      maxAge: 86400,
    });
    setCookie(null, "comprovanteSobrenome", data.sobrenome, {
      path: "/",
      maxAge: 86400,
    });
    setCookie(null, "comprovanteValor", data.valorApostado.toString(), {
      path: "/",
      maxAge: 86400,
    });
    setCookie(null, "comprovanteEmail", data.email, {
      path: "/",
      maxAge: 86400,
    });
    setCookie(null, "comprovanteTelefone", data.whatsapp.toString(), {
      path: "/",
      maxAge: 86400,
    });
    setCookie(null, "comprovanteTime", data.timeApostado, {
      path: "/",
      maxAge: 86400,
    });
    router.push("/comprovante-de-aposta");
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Faça sua aposta!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label
            className={`${
              errors.nome?.message ? styles.labelError : styles.simpleLabel
            }`}
          >
            Nome
          </label>
          <input
            {...register("nome")}
            className={`${
              errors.nome?.message ? styles.labelError : styles.simpleLabel
            }`}
          />
          <p>{errors.nome?.message}</p>

          <label
            className={`${
              errors.sobrenome?.message ? styles.labelError : styles.simpleLabel
            }`}
          >
            Sobrenome
          </label>
          <input
            {...register("sobrenome")}
            className={`${
              errors.sobrenome?.message ? styles.labelError : styles.simpleLabel
            }`}
          />
          <p>{errors.sobrenome?.message}</p>

          <label
            className={`${
              errors.email?.message ? styles.labelError : styles.simpleLabel
            }`}
          >
            Email
          </label>
          <input
            {...register("email")}
            className={`${
              errors.email?.message ? styles.labelError : styles.simpleLabel
            }`}
          />
          <p>{errors.email?.message}</p>

          <label
            className={`${
              errors.whatsapp?.message ? styles.labelError : styles.simpleLabel
            }`}
          >
            WhatsApp com DDD
          </label>
          <input
            type="number"
            {...register("whatsapp")}
            className={`${
              errors.whatsapp?.message ? styles.labelError : styles.simpleLabel
            }`}
          />
          <p>{errors.whatsapp?.message}</p>

          <label
            className={`${
              errors.timeApostado?.message
                ? styles.labelError
                : styles.simpleLabel
            }`}
          >
            Em qual time você deseja apostar?
          </label>
          <select
            {...register("timeApostado", {
              required: "Você precisa escolher uma equipe para apostar",
            })}
            className={`${
              errors.timeApostado?.message
                ? styles.labelError
                : styles.simpleLabel
            }`}
          >
            <option value={undefined}> </option>
            <option value="DCC">DCC</option>
            <option value="ESTATISMATICA">Estatismática</option>
          </select>
          <p>{errors.timeApostado?.message}</p>

          <label
            className={`${
              errors.valorApostado?.message
                ? styles.labelError
                : styles.simpleLabel
            }`}
          >
            Quanto você deseja apostar?
          </label>
          <input
            type="number"
            {...register("valorApostado")}
            className={`${
              errors.valorApostado?.message
                ? styles.labelError
                : styles.simpleLabel
            }`}
          />
          <p>{errors.valorApostado?.message}</p>

          <div>
            <div className={styles.terms}>
              <label
                className={`${
                  errors.aceitoTermos?.message
                    ? styles.labelError
                    : styles.simpleLabel
                }`}
              >
                Declaro que li e aceito os{" "}
                <Link href={"https://www.instagram.com"}>
                  <a target="_blank" rel="noopener noreferrer">
                    Termos de Uso
                  </a>
                </Link>
              </label>
              <input
                type="checkbox"
                {...register("aceitoTermos")}
                className={`${
                  errors.aceitoTermos?.message
                    ? styles.labelError
                    : styles.simpleLabel
                }`}
              />
            </div>
            <p className={styles.termsError}>{errors.aceitoTermos?.message}</p>
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
