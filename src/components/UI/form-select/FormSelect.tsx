"use client";
import React, { useState } from "react";
import { OptionType } from "@/types/select.type";
import Select from "react-select";
import "./FormSelect.scss";

interface IProps {
   options: OptionType[];
}

const FormSelect = ({ options }: IProps) => {
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   return (
      <Select
         options={options}
         menuIsOpen={menuIsOpen}
         onBlur={() => setMenuIsOpen(false)}
         onFocus={() => setMenuIsOpen(true)}
         className={"select-container"}
         classNamePrefix={"select"}
         unstyled
      />
   );
};

export default FormSelect;
