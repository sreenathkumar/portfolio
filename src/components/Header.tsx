import { useState } from "react";
import "../assets/css/header.css";
import logo from '../assets/images/logo.webp'
import MobileMenu from "./ui/MobileMenu";

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const handleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };
   return (
      <header className="fixed w-full top-0 p-4 md:items-center ">
         <div className="container flex justify-between items-center mx-auto md:px-12">
            <div className="logo">
               <img className="h-12"
                  src={logo}
                  alt="sreenath_kumar_logo"
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
