"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "../components/NavBar";
import { projects } from "../data/projects"; 
import RedesSociales from "../components/redesSociales";
import PieDePagina from "../components/pieDePagina";

export default function Proyectos() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center pt-10 px-6 relative"
      style={{ backgroundImage: "url('/assets/fondoo.webp')" }}
    >
      {/* NAV */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : ""}`}
      >
        <div className="relative flex items-center justify-center py-4 px-6">
          {/* Redes sociales en mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:hidden">
            <RedesSociales />
          </div>

          {/* Navbar centrado */}
          <div className="ml-auto lg:ml-0 lg:mx-auto mt-4 lg:mt-8">
            <NavBar />
          </div>

          {/* Redes sociales en escritorio */}
          <div className="hidden lg:block absolute right-8">
            <RedesSociales />
          </div>
        </div>
      </div>

      {/* Encabezado */}
      <div className="text-center mt-24 sm:mt-18lg:mt-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 handwriting drop-shadow-lg">
          Proyectos
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mt-4">
          Algunos de mis trabajos destacados
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center mt-12 lg:mt-24 flex-grow">
        {projects.map((proj, index) => (
          <div key={proj.id} className="relative w-80 h-96 flex flex-col items-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 
                            bg-yellow-200/80 rotate-2 shadow-md"></div>

            <Link href={`/proyecto/${proj.slug}`} passHref>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 12, delay: index * 0.2 }}
                className="bg-white shadow-2xl w-full h-full flex flex-col items-center justify-start 
                           p-4 border-2 border-gray-300 overflow-hidden rounded-xl cursor-pointer"
              >
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-64 object-cover rounded-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative mt-3">
                  <h3 className="rotate-2 text-gray-800 text-2xl font-bold text-center relative z-10 
                                 px-3 py-1 rounded-md bg-fuchsia-500/50 w-[250px] h-10 
                                 left-1/2 -translate-x-1/2">
                    {proj.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pie de página */}
      <PieDePagina />
    </main>
  );
}