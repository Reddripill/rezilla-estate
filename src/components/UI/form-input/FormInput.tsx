import React, { InputHTMLAttributes } from "react";
import styles from "./FormInput.module.scss";

type PropsType = InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ placeholder }: PropsType) => {
   return (
      <input type="text" className={styles.input} placeholder={placeholder} />
   );
};

export default FormInput;
