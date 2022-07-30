import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: UseFormRegisterReturn;
}

export const TextInput: FC<TextInputProps> = ({ register, ...props }) => {
  return (
    <>
      <input
        autoComplete="off"
        data-lpignore="true"
        {...register}
        maxLength={254}
        {...props}
      />
    </>
  );
};
