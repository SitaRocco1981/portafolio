"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "../components/NavBar";
import { projects } from "../data/projects"; 
import RedesSociales from "../components/redesSociales";
import PieDePagina from "../components/pieDePagina";
import HeaderConRedes from "../components/headerConRedes";

export default function Proyectos() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className="min-h-screen bg-fixed bg-cover bg-fixed bg-center p-10 relative"
      style={{ backgroundImage: "url('/assets/fondito.jpg')" }}
    >
      {/* Header reutilizable */}
            <HeaderConRedes titulo="Proyectos" />
      
            {/* Espacio para compensar header fijo */}
            <div className="h-44"></div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center mt-24">
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