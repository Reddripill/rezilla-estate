import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
   title: "Rezilla",
   description: "Rezilla it is real estate app",
};

const poppins = Poppins({
   weight: ["400", "500", "600"],
   subsets: ["latin"],
   display: "swap",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={poppins.className}>
         <body>
            <div className="wrapper">
               <Header />
               <main className="main">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
