import About from "@/components/screens/home/about/About";
import Customers from "@/components/screens/home/customers/Customers";
import Main from "@/components/screens/home/main/Main";

export default function Home() {
   return (
      <div>
         <Main />
         <Customers />
         <About />
      </div>
   );
}
