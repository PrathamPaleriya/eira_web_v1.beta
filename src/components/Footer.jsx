import React from 'react';
import logo from '../assets/eira_logo_light.svg';
import {Link} from "react-router-dom"

const Footer = () => {
   return (
      <footer className="w-full">
         {/* Main Gradient Footer */}
         <div className="w-full bg-gradient-to-r from-[#A29EE3] to-[#3E9EDA] px-6 py-16 md:py-24 text-white">
            <div className="md:max-w-[90%] mx-auto flex flex-col justify-between min-h-[300px]">

               {/* Top Section */}
               <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-0">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none  mb-12 md:mb-0">
                    Safe Space for your <br /> feelings
                  </h2>

                  <img src={logo} alt="Eira Logo" className="h-8 md:h-12 opacity-90" />
               </div>

               {/* Middle Section (Beta + Links) */}
               <div className="w-full mt-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                     {/* Beta text */}
                     <span className="font-sans font-medium text-sm md:text-base opacity-90 lowercase">
                        currently in beta
                     </span>

                     {/* Links */}
                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 text-sm md:text-base font-medium">
                        <Link to="/contact" className="hover:opacity-80 transition-opacity">contact us</Link>
                        <Link to="/privacy-policy" className="hover:opacity-80 transition-opacity">privacy policy</Link>
                        <Link to="/terms-and-conditions" className="hover:opacity-80 transition-opacity">terms & conditions</Link>
                     </div>

                  </div>
               </div>

            </div>
         </div>

         {/* Black Bottom Bar */}
         <div className="w-full bg-black text-white px-6 py-4">
            <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-neutral-400">
               <div className="mb-2 md:mb-0">
                  copyright &copy; 2025, all right reserved.
               </div>
               <div>
                  by <span className="text-white font-medium">Athams</span>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
