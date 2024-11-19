"use client";
import React from "react";
import styles from "./Footer.module.scss";
import Logo from "@/components/UI/logo/Logo";
import { Mail, Phone } from "lucide-react";
import { countries, links } from "@/constants/links";
import Link from "next/link";
import Input from "@/components/UI/input/Input";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/svgs";

const Footer = () => {
   const isDesktop = useMatchMedia("(min-width: 768px)");
   return (
      <footer>
         <div className={styles["footer-body"]}>
            <div className="container">
               <div className={styles["footer-container"]}>
                  <div className={styles.info}>
                     <div className={styles.logo}>
                        <Logo />
                     </div>
                     <div className={styles.location}>
                        <div className="button-text">
                           2728 Hickory StreetSalt Lake City, UT 84104
                        </div>
                     </div>
                     <div className={styles.communication}>
                        <div className={styles["flex-block"]}>
                           <Phone />
                           <div className="button-text">+1 206-214-2298</div>
                        </div>
                        <div className={styles["flex-block"]}>
                           <Mail />
                           <div className="button-text">
                              support@rezilla.com
                           </div>
                        </div>
                     </div>
                  </div>
                  {isDesktop && (
                     <div className={styles.navigation}>
                        <div className={styles.col}>
                           <div className={styles["navigation-title"]}>
                              <h4>Quick Links</h4>
                           </div>
                           <nav className={styles.links}>
                              {links.map((item) => (
                                 <div
                                    key={item.label}
                                    className={styles["link-item"]}
                                 >
                                    <Link href={item.link}>{item.label}</Link>
                                 </div>
                              ))}
                           </nav>
                        </div>
                        <div className={styles.col}>
                           <div className={styles["navigation-title"]}>
                              <h4>Discovery</h4>
                           </div>
                           <nav className={styles.links}>
                              {countries.map((item) => (
                                 <div
                                    key={item.label}
                                    className={styles["link-item"]}
                                 >
                                    <Link href={item.link}>{item.label}</Link>
                                 </div>
                              ))}
                           </nav>
                        </div>
                     </div>
                  )}
                  <div className={styles.contact}>
                     <div className={styles["contact-title"]}>
                        <h4>Subscribe to our Newsletter!</h4>
                     </div>
                     <div className={styles.input}>
                        <Input placeholder="Email Address" />
                     </div>
                     <div className={styles.socials}>
                        <div className={styles["socials-title"]}>
                           <h4>Follow Us on</h4>
                        </div>
                        <div className={styles["socials-links"]}>
                           <div className={styles["socials-logo"]}>
                              <Link href="/">
                                 <LinkedinIcon />
                              </Link>
                           </div>
                           <div className={styles["socials-logo"]}>
                              <Link href="/">
                                 <FacebookIcon />
                              </Link>
                           </div>
                           <div className={styles["socials-logo"]}>
                              <Link href="/">
                                 <InstagramIcon />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.label}>
            <div className="container">
               <div className={styles["label-container"]}>
                  <div className={styles["label-text"]}>
                     © Rezilla – All rights reserved
                  </div>
                  {isDesktop && (
                     <nav className={styles["label-links"]}>
                        <div className={styles["label-link"]}>
                           <Link href="/" className={styles["label-text"]}>
                              Terms and Conditions
                           </Link>
                        </div>
                        <div className={styles["label-link"]}>
                           <Link href="/" className={styles["label-text"]}>
                              Privacy Policy
                           </Link>
                        </div>
                        <div className={styles["label-link"]}>
                           <Link href="/" className={styles["label-text"]}>
                              Disclaimer
                           </Link>
                        </div>
                     </nav>
                  )}
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
