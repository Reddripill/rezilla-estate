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
         transitionDuration: {
            DEFAULT: "300ms",
         },
      },
   },
   plugins: [],
} satisfies Config;
