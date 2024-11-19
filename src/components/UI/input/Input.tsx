import React from "react";
import styles from "./Input.module.scss";
import { ArrowRight } from "lucide-react";

const Input = ({ placeholder }: { placeholder: string }) => {
   return (
      <div className={styles.input}>
         <input
            type="text"
            className={styles["input-field"]}
            placeholder={placeholder}
         />
         <button type="button" className={styles["input-button"]}>
            <ArrowRight />
         </button>
      </div>
   );
};

export default Input;
