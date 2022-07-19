import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.scss";

type Inputs = {
  nome: string;
  sobrenome: string;
  timeApostado: string;
  email: string;
  whatsapp: number;
};

const schema = yup
  .object({
    nome: yup.string().required("Este campo é obrigatório"),
    sobrenome: yup.string().required("Este campo é obrigatório"),
    timeApostado: yup.string().required("Este campo é obrigatório"),
    email: yup
      .string()
      .email("Favor insira um email válido")
      .required("Este campo é obrigatório"),
    whatsapp: yup
      .number()
      .positive()
      .integer()
      .required("Este campo é obrigatório"),
  })
  .required();

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
            <option value="DCC">DCC</option>
            <option value="ESTATISMATICA">Estatismática</option>
          </select>
          <p>{errors.timeApostado?.message}</p>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
