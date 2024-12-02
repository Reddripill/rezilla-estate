"use client";
import React from "react";
import styles from "./SearchForm.module.scss";
import dynamic from "next/dynamic";
import Button from "@/components/UI/button/Button";
import { Search, SlidersVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import FormInput from "@/components/UI/form-input/FormInput";
// import FormSelect from "@/components/UI/form-select/FormSelect";
import {
   propertyTypeOptions,
   roomCountOptions,
} from "@/constants/searchOptions";

const FormSelect = dynamic(
   () => import("@/components/UI/form-select/FormSelect"),
   { ssr: false }
);

const SearchForm = () => {
   return (
      <div className={styles["search-form"]}>
         <div className={styles.switch}>
            <div className={cn(styles["switch-item"], styles["_active"])}>
               <div className="button-text">For Sale</div>
            </div>
            <div className={styles["switch-item"]}>
               <div className="button-text">For Rent</div>
            </div>
         </div>
         <div className={styles.body}>
            <div className={styles.content}>
               <div className={styles.form}>
                  <div className={styles["form-item"]}>
                     <FormInput placeholder="New York, San Francisco, etc" />
                  </div>
                  <div className={styles["form-item"]}>
                     <FormSelect options={propertyTypeOptions} />
                  </div>
                  <div className={styles["form-item"]}>
                     <FormSelect options={roomCountOptions} />
                  </div>
               </div>
               <div className={styles.advanced}>
                  <SlidersVertical
                     className={styles["advanced-icon"]}
                     size={14}
                  />
                  <div className={cn(styles["advanced-text"], "small-text")}>
                     Advance Search
                  </div>
               </div>
            </div>
            <div className={styles.action}>
               <Button size="normal">
                  <div className={styles.button}>
                     <Search />
                     <div className="button-text">Search</div>
                  </div>
               </Button>
            </div>
         </div>
      </div>
   );
};

export default SearchForm;
