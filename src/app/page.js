"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "./components/NavBar";
import RedesSociales from "./components/redesSociales";
import PieDePagina from "./components/pieDePagina";
import HeaderConRedes from "./components/headerConRedes";

const images = [
  { src: "/assets/foto3.jpg", alt: "Proyectos", rotate: "-5deg", pos: "lg:bottom-40 lg:left-1/2 lg:-translate-x-1/2", color: "bg-slate-50", z: "z-20" },
  { src: "/assets/imagen-contacto.webp", alt: "Contacto", rotate: "-8deg", pos: "lg:top-10 lg:left-20", color: "bg-slate-50", z: "z-10" },
  { src: "/assets/image.webp", alt: "SOBRE MI", rotate: "6deg", pos: "lg:top-40 lg:right-24", color: "bg-slate-50", z: "z-10" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className="bg-cover bg-center bg-fixed  p-10 relative lg:h-screen lg:overflow-hidden"
      style={{ backgroundImage: "url('/assets/fondito.jpg')" }}
    >
     {/* Título principal con fade-in */}
     {/* Header reutilizable */}
      <HeaderConRedes titulo="Rocío Castillo" subtitulo="Diseñadora web" />


<div className="h-60 lg:h-44"></div>


      {/* Cards con animación fluida */}
      <motion.div
        layout
        className=" flex flex-col items-center gap-16 lg:relative lg:h-[700px] lg:w-full"
      >
        {images.map((img, index) => (
  <motion.div
    key={index}
    layout
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1, rotate: parseInt(img.rotate) }}
    transition={{ type: "spring", stiffness: 60, damping: 12, delay: index * 0.2 }}
    className={`${img.color} ${img.z} lg:mb-9 shadow-2xl w-80 h-96 flex flex-col items-center justify-start p-4 border-2 rounded-xl border-gray-300
      ${img.pos} lg:absolute relative`}
    style={{ backgroundImage: "url('/assets/textura-papel.png')", backgroundSize: "cover" }}
  >
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>

    {img.alt === "Proyectos" ? (
      <Link href="/proyectos" className="w-full h-64 ">
        <motion.video
          src="/assets/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/posterProyectos.jpg"
          className="w-full h-64 object-cover rounded-sm cursor-pointer border border-gray-300 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        />
        <h2 className="mt-3 text-gray-900 uppercase font-extrabold text-4xl text-center bg-fuchsia-500/50 px-3 py-1 rounded-md shadow-md tracking-wide">
          {img.alt}
        </h2>
      </Link>
    ) : img.alt === "Contacto" ? (
      <Link href="/contacto" className="w-full">
        <motion.img
          src={img.src}
          alt={img.alt}
          className="w-full h-64 object-cover rounded-sm border border-gray-300 shadow-lg cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            filter: "hue-rotate(90deg) saturate(150%)",
          }}
          whileTap={{ scale: 0.97 }}
        />
        <h2 className="mt-3 text-gray-900 uppercase font-extrabold text-3xl text-center bg-fuchsia-500/50 px-3 py-1 rounded-md shadow-md tracking-wide">
          {img.alt}
        </h2>
      </Link>
    ) : img.alt === "SOBRE MI" ? (
      <Link href="/about" className="w-full">
        <motion.img
          src={img.src}
          alt={img.alt}
          className="w-full h-64 object-cover rounded-sm border border-gray-300 shadow-lg cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            filter: "hue-rotate(90deg) saturate(150%)",
          }}
          whileTap={{ scale: 0.97 }}
        />
        <h2 className="mt-3 text-gray-900 uppercase font-extrabold text-3xl text-center bg-fuchsia-500/50 px-3 py-1 rounded-md shadow-md tracking-wide">
          {img.alt}
        </h2>
      </Link>
    ) : null}
  </motion.div>
))}

      </motion.div>

    

      {/* Pie de página */}
      <PieDePagina />
      
    </main>
    
  );
}