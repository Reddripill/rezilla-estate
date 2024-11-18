import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { House } from "lucide-react";

const Logo = () => {
   return (
      <Link href="/">
         <div className={styles["flex-block"]}>
            <div className={styles.logo}>
               <House size={24} />
            </div>
            <div className={styles.label}>Rezilla</div>
         </div>
      </Link>
   );
};

export default Logo;
