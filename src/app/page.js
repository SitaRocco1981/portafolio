"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import PieDePagina from "./components/pieDePagina";
import NavBar from "./components/NavBar";
import RedesSociales from "./components/redesSociales";

const images = [
  { src: "/assets/foto3.jpg", alt: "Proyectos" },
  { src: "/assets/imagen-contacto.webp", alt: "Contacto" },
  { src: "/assets/image.webp", alt: "SOBRE MI" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/assets/fondoo.webp')" }}
    >
      {/* NAV */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : ""}
      `}
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

      {/* HERO */}
      <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* TEXTURA ACUARELA SOLO HERO */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/fondo-abstracto.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: `
              radial-gradient(circle at center, black 70%, transparent 100%)
            `,
            maskImage: `
              radial-gradient(circle at center, black 70%, transparent 100%)
            `,
          }}
        />

        {/* CARD HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-white/80 backdrop-blur-md w-full max-w-xl lg:max-w-3xl flex flex-col items-center text-center pt-14 px-10 pb-16 border-2 border-gray-300 rounded-xl shadow-2xl"
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-7 bg-yellow-200/80 rotate-2 shadow-md"></div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 handwriting drop-shadow-lg">
            Rocío Castillo
          </h1>

          <h2 className="text-xl lg:text-3xl text-gray-700 font-semibold handwriting mt-4">
            Diseñadora web
          </h2>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-10 text-sm text-gray-500"
          >
            <h3 className="text-xl">↓ scroll</h3>
          </motion.div>
        </motion.div>
      </section>

      {/* CARDS */}
      <section className="relative px-6 pb-20 flex justify-center -mt-20 lg:mt-0 bg-fuchsia-500/10 mt-12">
        <div className="relative z-10 flex flex-col gap-8 lg:gap-20 items-center lg:flex-row lg:items-end lg:justify-center">
          {images.map((img, index) => {
            const isProyecto = img.alt === "Proyectos";

            const rotations = {
              Proyectos: "rotate-0 lg:order-2 lg:-translate-y-8 lg:scale-110 z-20",
              Contacto: "lg:order-1 -rotate-6",
              "SOBRE MI": "lg:order-3 rotate-6",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.08, y: -10, zIndex: 30 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.2,
                }}
                className={`
                  relative
                  ${rotations[img.alt]}
                  bg-slate-50 shadow-xl
                  w-[85%] max-w-sm
                  lg:w-[260px]
                  xl:w-[300px]
                  flex flex-col items-center
                  pt-5 px-5 pb-14
                  border border-gray-300 rounded-xl
                  transition-shadow duration-300
                  hover:shadow-2xl mt-8 lg:mt-32
                `}
                
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>

                <Link
                  href={
                    isProyecto
                      ? "/proyectos"
                      : img.alt === "Contacto"
                      ? "/contacto"
                      : "/about"
                  }
                  className="w-full"
                >
                  {isProyecto ? (
                    <video
                      src="/assets/hero-video-proyectos.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/assets/posterProyectos.jpg"
                      className="w-full aspect-square object-cover rounded-sm border border-gray-300 shadow-md"
                    />
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-square object-cover rounded-sm border border-gray-300 shadow-md"
                    />
                  )}

                  <div className="relative flex justify-center mt-6">
                    <div className="absolute w-[110%] h-8 bg-fuchsia-500/50 rotate-[-2deg] shadow-md rounded"></div>
                    <h2 className="relative text-gray-900 uppercase font-extrabold text-lg tracking-wide">
                      {img.alt}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <PieDePagina />
    </main>
  );
}