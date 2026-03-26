"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import RedesSociales from "../components/redesSociales";
import PieDePagina from "../components/pieDePagina";

export default function SobreMi() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="bg-cover bg-fixed bg-center pt-10 px-6 relative min-h-screen"
      style={{ backgroundImage: "url('/assets/fondoo.webp')" }}
    >
      {/* NAV */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : ""}`}
      >
        <div className="relative flex items-center justify-center py-4 px-6">
          <div className="absolute left-1/2 -translate-x-1/2 lg:hidden">
            <RedesSociales />
          </div>

          <div className="ml-auto lg:ml-0 lg:mx-auto mt-4 lg:mt-8">
            <NavBar />
          </div>

          <div className="hidden lg:block absolute right-8">
            <RedesSociales />
          </div>
        </div>
      </div>

      {/* Encabezado */}
      <div className="text-center mt-24 sm:mt-18 lg:mt-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 handwriting">
          Sobre mi
        </h1>
      </div>

      {/* Bloque principal */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-36 px-0 md:px-8 lg:px-12 max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-2/5 max-w-xl order-1 text-left"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 handwriting mb-6">
            Diseñadora web
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            ¡Hola! Soy Rocío y comencé este viaje a principios de 2023, cuando después de muchos años decidí estudiar. Fue un gran desafío, ya que partí literalmente desde cero en programación, pero con mucha motivación y curiosidad por aprender.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            El diseño es un área que me atrae profundamente y que he podido explorar también a través de la orfebrería, oficio que llevo varios años desarrollando. La mezcla entre creatividad y técnica que he aprendido con la orfebrería la relaciono con el diseño y desarrollo web: partir desde la investigación y los primeros bocetos, hasta ver cómo todo se transforma en un sitio web funcional.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Si quieres que tus ideas se conviertan en un sitio web, me encantaría trabajar contigo 👩‍💻
          </p>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="lg:w-2/5 order-2 flex items-center justify-center relative"
        >
          <div className="bg-slate-50 shadow-2xl border-2 border-gray-300 p-3 relative rotate-2 rounded-xl mb-12 w-full max-w-xs sm:max-w-md lg:max-w-sm">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>
            <img
              src="/assets/roquito-collagee.webp"
              alt="Sobre mí"
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      <PieDePagina />
    </main>
  );
}