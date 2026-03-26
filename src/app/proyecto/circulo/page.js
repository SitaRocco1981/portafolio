"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import RedesSociales from "@/app/components/redesSociales";
import PieDePagina from "@/app/components/pieDePagina";

export default function ProyectoPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="bg-cover bg-center bg-fixed pt-10 px-6 relative min-h-screen"
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
  
      {/* Card principal con estilo similar a Home */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="relative z-10
        max-w-6xl mx-auto
        space-y-12
        p-0.5 lg:p-8
        mt-24 lg:mt-32
        lg:mb-14
        lg:bg-white/90
        lg:backdrop-blur-md
        lg:border-2 lg:border-gray-300
        lg:rounded-xl
        lg:shadow-2xl"
        style={{
          backgroundImage: "url('/assets/textura-papel.png')",
          backgroundSize: "cover",
        }}
      >
        {/* Etiqueta decorativa */}
        <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>

        {/* Contexto */}
        <section>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative font-semibold text-3xl lg:text-5xl text-center mb-6 text-gray-800 handwriting drop-shadow-lg mt-0"
          >
            Círculo Startups
          </motion.h1>

          <p className="text-lg text-gray-600">
            Este proyecto se desarrolló junto a la Agencia SBS, para una comunidad que impulsa los emprendimientos guiados por la innovación en la región de Valparaíso.
          </p>
        </section>

        {/* Mi rol */}
        <section className="bg-gray-50 p-6 rounded-lg shadow relative">
          <div className="block lg:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Mi rol en el proyecto
          </h2>

          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>
              Creé en Figma el diseño de las fichas de cada Startup, asegurando que incluyeran toda la información relevante y mantuvieran una estructura clara y coherente. También diseñé la sección de beneficios del programa, destacando los puntos clave de manera visual y accesible.
            </li>
            <li>
             Implementé ambos diseños en Elementor, configurando tipografías, paleta de colores y disposición de contenidos. Utilicé el plugin ACF (Advanced Custom Fields) para gestionar los datos dinámicos de las fichas.

            </li>
            
          </ul>
        </section>

        {/* Vista resultado */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Vista del resultado
          </h2>

          <video
            controls
            className="rounded shadow-xl mb-6 mx-auto w-full max-w-4xl"
          >
            <source src="/assets/video-detallestartups.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          <p className="text-gray-600 text-center text-sm">
            Captura de sección de Directorio de Startups.
          </p>

          <video
            controls
            className="rounded shadow-xl mb-6 mx-auto w-full max-w-4xl mt-12"
          >
            <source src="/assets/video-beneficios-circulo.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          <p className="text-gray-600 text-center text-sm">
            Captura de sección Beneficios.
          </p>

          {/* Enlace al sitio */}
          <div className="flex justify-center mt-3">
            <a
              href="https://circulostartups.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-fuchsia-500 hover:text-fuchsia-800 font-semibold"
            >
              {/* Flecha antes del texto */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>

              Visitar sitio
            </a>
          </div>
        </section>

        {/* Problema */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Problema</h2>

          <p className="text-gray-800 leading-text text-lg">
            El directorio debía mostrar todas las Startups que se iban integrando de forma continua y en escritorio era necesario aprovechar el espacio para desplegar las fichas completas. En la sección de beneficios, la información debía presentarse de manera clara y breve, evitando sobrecargar la página.
          </p>

        
        </section>

        {/* Proceso */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Proceso</h2>

          <p className="text-gray-800 text-lg leading-text">
            Para la sección del Directorio, diseñé en Figma las fichas de cada Startup, definiendo todos los campos necesarios. Posteriormente implementé el diseño en Elementor, gestionando los datos dinámicos con ACF.  Finalmente, se integró un filtro de búsqueda por nombre, sector económico y ejes tecnológicos.<br></br><br></br>
            Para la sección de Beneficios, también la implementé en Elementor y añadí un modal/popup en el detalle, con el fin de mostrar la información de manera clara y breve sin sobrecargar la página.
          </p>
        </section>

        {/* Resultado comparativo */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resultado</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              

              <Image
                src="/assets/directorio-startups.png"
                alt="captura-sección- directorio-de-startups"
                width={600}
                height={400}
                className="shadow-lg rounded w-full"
              />
            </div>

            <div>
              

              <Image
                src="/assets/beneficios-circulo-modal.png"
                alt="seccion-beneficios-circulo-startups"
                width={600}
                height={400}
                className="shadow-lg rounded w-full"
              />
            </div>
          </div>
        </section>

        {/* Resultado narrativo */}
        <section>
          <p className="text-gray-800 leading-text text-lg mb-20 p-0.5">
            
           El proyecto permitió contar con un directorio ordenado y dinámico, donde las fichas muestran toda la información relevante de cada Startup y pueden filtrarse fácilmente. Además, la sección de beneficios se presenta de forma concisa y accesible, mejorando la experiencia del usuario.
          </p>
        </section>
      </motion.div>

      <PieDePagina />
    </main>
  );
}