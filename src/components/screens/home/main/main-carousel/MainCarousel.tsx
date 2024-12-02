"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MainCarousel.module.scss";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/scss";
import "swiper/scss/pagination";

const MainCarousel = () => {
   const imageArr = new Array(4).fill("/main-carousel/image-1.jpg");
   return (
      <div className={styles.swiper}>
         <div className={styles["swiper-wrapper"]}>
            <Swiper
               spaceBetween={16}
               slidesPerView={1}
               modules={[Navigation, Pagination]}
               navigation={{
                  prevEl: `.${styles["arrow-prev"]}`,
                  nextEl: `.${styles["arrow-next"]}`,
                  disabledClass: `${styles["swiper-button-disabled"]}`,
               }}
               pagination={{
                  el: `.${styles.bullets}`,
                  bulletClass: `${styles["swiper-pagination-bullet"]}`,
                  bulletActiveClass: `${styles["swiper-pagination-bullet-active"]}`,
                  clickable: true,
               }}
            >
               {imageArr.map((image, index) => (
                  <SwiperSlide key={image + index}>
                     <div className={styles["swiper-item"]}>
                        <Image src={image} alt={`${index} Slide`} fill />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <div className={styles.arrows}>
            <div className={cn(styles.arrow, styles["arrow-prev"])}>
               <ChevronLeft />
            </div>
            <div className={cn(styles.arrow, styles["arrow-next"])}>
               <ChevronRight />
            </div>
         </div>
         <div className={styles.bullets}></div>
      </div>
   );
};

export default MainCarousel;
