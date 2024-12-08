"use client";
import React from "react";
import styles from "./About.module.scss";
import { HousePlug, User } from "lucide-react";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AboutBlocks = () => {
   return (
      <div className={styles["content-blocks"]}>
         <div className={styles["content-block"]}>
            <div className={styles["block-icon"]}>
               <HousePlug />
            </div>
            <div className={styles["block-content"]}>
               <div className={styles["block-title"]}>
                  <h4>Donec porttitor euismod</h4>
               </div>
               <div className={styles["block-text"]}>
                  <div className="paragraph">
                     Nullam a lacinia ipsum, nec dignissim purus. Nulla
                  </div>
               </div>
            </div>
         </div>
         <div className={styles["content-block"]}>
            <div className={styles["block-icon"]}>
               <User />
            </div>
            <div className={styles["block-content"]}>
               <div className={styles["block-title"]}>
                  <h4>Donec porttitor euismod</h4>
               </div>
               <div className={styles["block-text"]}>
                  <div className="paragraph">
                     Nullam a lacinia ipsum, nec dignissim purus. Nulla
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

const About = () => {
   const isMobile = useMatchMedia("(max-width: 767px)");
   return (
      <div className="section">
         <div className="container">
            <div className="section-label">who are we</div>
            <div className={styles.body}>
               <div className={styles.content}>
                  <div className={styles["content-title"]}>
                     <h2>
                        Assisting individuals in locating the appropriate real
                        estate.
                     </h2>
                  </div>
                  <div className={styles["content-text"]}>
                     <div className="paragraph">
                        Donec porttitor euismod dignissim. Nullam a lacinia
                        ipsum, nec dignissim purus. Nulla convallis ipsum
                        molestie nibh malesuada, ac malesuada leo volutpat.
                     </div>
                  </div>
                  {!isMobile && <AboutBlocks />}
               </div>
               <div className={styles.gallery}>
                  <div className={styles["gallery-grid"]}>
                     <div
                        className={cn(
                           styles["gallery-col"],
                           styles["gallery-col-first"]
                        )}
                     >
                        <div className={styles["gallery-image"]}>
                           <Image fill src="/about/1.jpg" alt="About Image" />
                        </div>
                     </div>
                     <div
                        className={cn(
                           styles["gallery-col"],
                           styles["gallery-col-second"]
                        )}
                     >
                        <div className={styles["gallery-col-multi"]}>
                           <div
                              className={cn(
                                 styles["gallery-image"],
                                 styles["gallery-image-large"]
                              )}
                           >
                              <Image
                                 fill
                                 src="/about/2.jpg"
                                 alt="About Image"
                              />
                           </div>
                           <div
                              className={cn(
                                 styles["gallery-image"],
                                 styles["gallery-image-small"]
                              )}
                           >
                              <Image
                                 fill
                                 src="/about/3.jpg"
                                 alt="About Image"
                              />
                           </div>
                        </div>
                        <div
                           className={styles["gallery-gradient-decoration"]}
                        />
                     </div>
                  </div>
                  <div className={styles["gallery-text-decoration"]}>
                     <div className={styles["circle-text-image"]}>
                        <Image
                           fill
                           src="/about/circle-text.png"
                           alt="Real Estate since 2022"
                        />
                     </div>
                  </div>
               </div>
               {isMobile && <AboutBlocks />}
            </div>
         </div>
      </div>
   );
};

export default About;
