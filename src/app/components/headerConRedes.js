"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar";
import RedesSociales from "@/app/components/redesSociales";

export default function HeaderConRedes({ titulo, subtitulo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
      ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : ""}`}
    >
      {/* Título y subtítulo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center pt-6"
      >
        <h1 className="mt-5 relative text-5xl  lg:text-6xl xl:text-7xl mb-2 text-gray-800 handwriting drop-shadow-lg">
          {titulo}
          <span
            className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2 
                       w-[260px] md:w-[300px] lg:w-[400px] xl:w-[600px] h-20  lg:h-20 rounded-xl 
                       bg-fuchsia-500/50 rotate-2 -z-10 
                       backdrop-blur-md border border-white/20 shadow-lg"
          ></span>
        </h1>

        {subtitulo && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-800 font-bold handwriting mb-4"
          >
            {subtitulo}
          </motion.h2>
        )}

        {/* Redes sociales en mobile: bajo el h2 */}
        <RedesSociales />
      </motion.div>

      {/* Navbar */}
      <NavBar />
    </header>
  );
}