"use client";
import { RefObject, useEffect } from "react";

export const useOutside = (
   ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
   handleOnClickOutside: () => void
) => {
   useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
         if (Array.isArray(ref)) {
            const boolArr = ref.map((item) => {
               return (
                  !item.current || item.current.contains(event.target as Node)
               );
            });
            if (boolArr.some((bool) => bool === true)) {
               return;
            }
            handleOnClickOutside();
         } else {
            if (!ref.current || ref.current.contains(event.target as Node)) {
               return;
            }
            handleOnClickOutside();
         }
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
         document.removeEventListener("mousedown", listener);
         document.removeEventListener("touchstart", listener);
      };
   }, [ref, handleOnClickOutside]);
};
