import type { Config } from "tailwindcss";

export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundColor: {
            ascent: "#3A0CA3",
         },
         colors: {
            "blue-ascent": "#4361EE",
            "purple-ascent": "#3A0CA3",
            "light-dark": "#2B2B2B",
            dark: "#0B090A",
         },
         padding: {
            container: "15px",
         },
         boxShadow: {
            header:
               "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            input: "4px 10px 5px 0 rgba(0, 0, 0, 0.05)",
         },
         transitionDuration: {
            DEFAULT: "300ms",
         },
      },
   },
   plugins: [],
} satisfies Config;
