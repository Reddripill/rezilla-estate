import React from "react";
import styles from "./Button.module.scss";
import { cn } from "@/lib/utils";

interface IProps {
   size: "small" | "normal";
   children: React.ReactNode;
}

const Button = ({ size, children }: IProps) => {
   return (
      <button
         type="button"
         className={cn(styles.button, {
            [styles["button-small"]]: size === "small",
            [styles["button-normal"]]: size === "normal",
         })}
      >
         {children}
      </button>
   );
};

export default Button;
