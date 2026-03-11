"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PieDePagina from "./components/pieDePagina";
import HeaderConRedes from "./components/headerConRedes";

const images = [
  {
    src: "/assets/foto3.jpg",
    alt: "Proyectos",
    rotate: "-5deg",
    pos: "xl:bottom-36 xl:left-1/2 xl:-translate-x-1/2",
    color: "bg-slate-50",
    z: "z-20",
    order: "order-1 lg:order-2", 
  },
  {
    src: "/assets/imagen-contacto.webp",
    alt: "Contacto",
    rotate: "-8deg",
    pos: "xl:top-12 xl:left-20",
    color: "bg-slate-50",
    z: "z-10",
    order: "order-2 lg:order-1", 
  },
  {
    src: "/assets/image.webp",
    alt: "SOBRE MI",
    rotate: "6deg",
    pos: "xl:top-32 xl:right-20",
    color: "bg-slate-50",
    z: "z-10",
    order: "order-3 lg:order-3",
  },
];

export default function Home() {
  return (
    <main
      className="bg-cover bg-center bg-fixed p-8 relative lg:h-screen lg:overflow-hidden"
      style={{ backgroundImage: "url('/assets/fondito.jpg')" }}
    >
      {/* Header */}
      <HeaderConRedes titulo="Rocío Castillo" subtitulo="Diseñadora web" />

      {/* Espaciado */}
      <div className="h-60 lg:h-20"></div>

      {/* Cards */}
      <motion.div
        layout
        className="
          flex flex-col items-center gap-16
          lg:flex-row lg:justify-center lg:items-start lg:gap-8
          xl:relative xl:h-[500px] xl:w-full xl:mt-48 lg:mt-24
        "
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
  layout
  initial={{ opacity: 0, y: 40, scale: 0.9 }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    
    rotate:
      window.innerWidth >= 1280
        ? parseInt(img.rotate) 
        : window.innerWidth >= 1024
        ? index === 0
          ? -3
          : index === 1
          ? 0
          : 3 
        : 0, 
  }}
  transition={{
    type: "spring",
    stiffness: 60,
    damping: 12,
    delay: index * 0.2,
  }}
  className={`${img.color} ${img.z} shadow-2xl 
              w-80 h-96 
              lg:w-72 lg:h-80 
              xl:w-80 xl:h-96 
              flex flex-col items-center justify-start p-4 
              border-2 rounded-xl border-gray-300 
              ${img.pos} xl:absolute relative 
              ${img.order}`}


            style={{
              backgroundImage: "url('/assets/textura-papel.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>

            {img.alt === "Proyectos" ? (
              <Link href="/proyectos" className="w-full h-64 lg:h-56 xl:h-64">
                <motion.video
                  src="/assets/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/posterProyectos.jpg"
                  className="w-full h-64 lg:h-56 xl:h-64 object-cover rounded-sm cursor-pointer border border-gray-300 shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                />
                <h2 className="mt-3 text-gray-900 uppercase font-extrabold 
                               text-4xl lg:text-3xl xl:text-4xl 
                               text-center bg-fuchsia-500/50 px-3 py-1 rounded-md shadow-md tracking-wide">
                  {img.alt}
                </h2>
              </Link>
            ) : (
              <Link href={img.alt === "Contacto" ? "/contacto" : "/about"} className="w-full">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 lg:h-56 xl:h-64 object-cover rounded-sm border border-gray-300 shadow-lg cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    filter: "hue-rotate(90deg) saturate(150%)",
                  }}
                  whileTap={{ scale: 0.97 }}
                />
                <h2 className="mt-3 text-gray-900 uppercase font-extrabold 
                               text-3xl lg:text-2xl xl:text-3xl 
                               text-center bg-fuchsia-500/50 px-3 py-1 rounded-md shadow-md tracking-wide">
                  {img.alt}
                </h2>
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="mt-12 lg:mt-6">
        <PieDePagina />
      </div>
    </main>
  );
}