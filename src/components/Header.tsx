import { useState } from "react";
import "../assets/css/header.css";
import logo from '../assets/images/Logo-dark-2.svg'
import MobileMenu from "./ui/MobileMenu";
import { smoothScroll } from "../utils/smoothScroll";

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const handleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };
   const scrollTop = () => {
      smoothScroll(0)
   }
   return (
      <header className="fixed w-full top-0 p-3 md:items-center ">
         <div className="container flex justify-between items-center mx-auto md:px-12 cursor-pointer">
            <div className="logo">
               <img className="h-14"
                  src={logo}
                  alt="sreenath_kumar_logo"
                  onClick={scrollTop}
               />
            </div>
            <nav>
               <div className="md:hidden lg:hidden">
                  <input type="checkbox" id="check" onChange={handleMobileMenu} />
                  <label htmlFor="check">
                     <span></span>
                     <span></span>
                     <span></span>
                  </label>
               </div>
               <MobileMenu open={mobileMenuOpen} />
            </nav>
         </div>

      </header>
   );
}
