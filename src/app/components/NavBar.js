"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-6">
      {/* Menú desktop */}
      <ul className="hidden lg:flex justify-center gap-12 handwriting xl:text-2xl lg:text-xl text-gray-800 ">
        <li className="hover:font-bold"><Link href="/">Inicio</Link></li>
        <li className="hover:font-bold"><Link href="/proyectos">Proyectos</Link></li>
        <li className="hover:font-bold"><Link href="/contacto">Contacto</Link></li>
        <li className="hover:font-bold"><Link href="/about">Sobre mi</Link></li>
      </ul>

      {/* Mobile hamburguesa */}
      <div className="lg:hidden flex flex-col items-end">
        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-1 mb-4 bg-fuchsia-500/50 p-3 rounded"
          >
            <span className="w-8 h-0.5 bg-gray-800"></span>
            <span className="w-8 h-0.5 bg-gray-800"></span>
            <span className="w-8 h-0.5 bg-gray-800"></span>
          </button>
        ) : (
          <button
            onClick={() => setOpen(false)}
            className="mb-4 text-3xl font-bold text-gray-800 bg-fuchsia-500/50 p-0.5 rounded"
          >
            ✕
          </button>
        )}

        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 mt-14 flex flex-col items-center justify-center gap-8 
                       font-handwriting text-2xl text-gray-800 
                       bg-white  py-16 z-50"
          >
            <li className="hover:font-bold"><Link href="/">Inicio</Link></li>
            <li className="hover:font-bold"><Link href="/proyectos">Proyectos</Link></li>
            <li className="hover:font-bold"><Link href="/contacto">Contacto</Link></li>
            <li className="hover:font-bold"><Link href="/about">Sobre mi</Link></li>
          </motion.ul>
        )}
      </div>
    </nav>
  );
}