import React from "react";
import { cn } from "@/lib/utils";
import styles from "./Customers.module.scss";
import Image from "next/image";
import { logos } from "@/constants/logos";

const Customers = () => {
   return (
      <div className="section">
         <div className="container">
            <div className={styles.wrapper}>
               <div className={styles.customers}>
                  <div className={styles["customers-item"]}>
                     <div className={styles["customers-image"]}>
                        <Image
                           width={155}
                           height={36}
                           src="/customers/1.jpg"
                           alt="Customers"
                        />
                     </div>
                     <h4 className={styles["customers-text"]}>
                        72k+ Happy <br />
                        Customers
                     </h4>
                  </div>
                  <div
                     className={cn(
                        styles["customers-item"],
                        styles["customers-item__small"]
                     )}
                  >
                     <div className={styles["customers-image"]}>
                        <Image
                           width={60}
                           height={60}
                           src="/customers/2.jpg"
                           alt="Customers"
                        />
                     </div>
                     <h4 className={styles["customers-text"]}>
                        200+ New <br />
                        Listings Everyday!
                     </h4>
                  </div>
               </div>
               <div className={styles.companies}>
                  <div className={styles["companies-body"]}>
                     <div
                        className={cn(styles["companies-text"], "button-text")}
                     >
                        Trusted by 100+ Companies across the globe!
                     </div>
                     <div className={styles["companies-feed"]}>
                        {logos.map((logo) => (
                           <div key={logo} className={styles["companies-logo"]}>
                              <Image
                                 width={120}
                                 height={40}
                                 src={logo}
                                 alt="Company Logo"
                              />
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className={styles["circle-gradient"]} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Customers;
