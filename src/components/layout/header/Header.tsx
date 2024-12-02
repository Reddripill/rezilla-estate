"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { CircleUser, House, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { links } from "@/constants/links";
import Button from "@/components/UI/button/Button";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { useOutside } from "@/hooks/useOutside";
import Logo from "@/components/UI/logo/Logo";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef(null);
   const burgerRef = useRef(null);
   const isDesktop = useMatchMedia("(min-width: 1023px)");
   const isMobile = useMatchMedia("(max-width: 767px)");
   const closeMenu = () => {
      setIsOpen(false);
   };
   useOutside([menuRef, burgerRef], closeMenu);
   useEffect(() => {
      if (isOpen) {
         document.body.classList.add("_lock-scroll");
      } else {
         document.body.classList.remove("_lock-scroll");
      }
      return () => {
         document.body.classList.remove("_lock-scroll");
      };
   }, [isOpen]);
   return (
      <header className={styles.header}>
         {!isMobile && (
            <div className={styles["header-info"]}>
               <div className={cn(styles.wrapper, styles["info-body"])}>
                  <div className={styles["info-item"]}>
                     <MapPin />
                     <div className={styles["white-text"]}>
                        Rezilla, 18 Grattan St, Brooklyn
                     </div>
                  </div>
                  <div className={styles.contacts}>
                     <div className={styles["info-item"]}>
                        <Phone />
                        <div className={styles["white-text"]}>
                           +1 206-214-2298
                        </div>
                     </div>
                     <div className={styles["info-item"]}>
                        <Mail />
                        <div className={styles["white-text"]}>
                           support@rezilla.com
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
         <div className={styles["header-body"]}>
            <div className={styles["header-wrapper"]}>
               <div
                  className={cn(styles.wrapper, styles["header-content"], {
                     [styles["_open"]]: isOpen,
                  })}
               >
                  <div
                     className={cn(styles.menu, { [styles["_open"]]: isOpen })}
                     ref={menuRef}
                  >
                     <nav className={styles.nav}>
                        {links
                           .filter((item) => !!item.header)
                           .map((item, index) => (
                              <div
                                 key={item.label}
                                 className={cn(styles["nav-item"], {
                                    [styles["_active"]]: index === 0,
                                 })}
                              >
                                 <Link
                                    href={item.link}
                                    className={cn(
                                       "button-text",
                                       styles["nav-label"]
                                    )}
                                 >
                                    {item.label}
                                 </Link>
                              </div>
                           ))}
                        {!isDesktop && (
                           <div className={styles["nav-item"]}>
                              <Link
                                 href="/"
                                 className={cn(
                                    "button-text",
                                    styles["nav-label"]
                                 )}
                              >
                                 Login/Register
                              </Link>
                           </div>
                        )}
                        {isMobile && (
                           <div className={styles["nav-item"]}>
                              <Link
                                 href="/"
                                 className={cn(
                                    "button-text",
                                    styles["nav-label"]
                                 )}
                              >
                                 Add Listing
                              </Link>
                           </div>
                        )}
                     </nav>
                  </div>
                  <div className={styles.home}>
                     <Logo />
                  </div>
                  <div className={styles.actions}>
                     {isDesktop && (
                        <Link href="/">
                           <div className={styles["flex-block"]}>
                              <CircleUser />
                              <div className="button-text">Login/Register</div>
                           </div>
                        </Link>
                     )}
                     {!isMobile && (
                        <div className={styles.button}>
                           <Button size="small">
                              <div className={styles["flex-block"]}>
                                 <House />
                                 <div className="button-text-white">
                                    Add Listing
                                 </div>
                              </div>
                           </Button>
                        </div>
                     )}
                     <div
                        className={cn(styles.burger, {
                           [styles["_open"]]: isOpen,
                        })}
                        ref={burgerRef}
                        onClick={() => setIsOpen(!isOpen)}
                     >
                        <span></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
