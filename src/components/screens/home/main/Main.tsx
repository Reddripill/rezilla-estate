import React from "react";
import styles from "./Main.module.scss";
import MainCarousel from "./main-carousel/MainCarousel";
import SearchForm from "./search-form/SearchForm";
import { cn } from "@/lib/utils";

const Main = () => {
   return (
      <div className={styles.main}>
         <div className={styles.wrapper}>
            <div className="container">
               <div className={styles["main-container"]}>
                  <div className={styles.content}>
                     <div className={styles["content-title"]}>
                        <h1>Find a perfect home you love..!</h1>
                     </div>
                     <div className={styles["content-text"]}>
                        <div className="paragraph">
                           Etiam eget elementum elit. Aenean dignissim dapibus
                           vestibulum. Integer a dolor eu sapien sodales
                           vulputate ac in purus.
                        </div>
                     </div>
                     <div className={styles.carousel}>
                        <MainCarousel />
                        <div
                           className={cn(
                              styles["carousel-decoration"],
                              "gradient-reverse"
                           )}
                        ></div>
                     </div>
                  </div>
                  <div className={styles.search}>
                     <SearchForm />
                  </div>
               </div>
            </div>
         </div>
         <div className={cn(styles.decoration, "gradient")}></div>
      </div>
   );
};

export default Main;
