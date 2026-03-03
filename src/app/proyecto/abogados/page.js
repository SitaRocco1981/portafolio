"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import PieDePagina from "@/app/components/pieDePagina";

export default function ProyectoPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="bg-cover bg-center bg-fixed p-10 relative min-h-screen"
      style={{ backgroundImage: "url('/assets/fondito.jpg')" }}
    >
      {/* HEADER FIJO */}
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
          <h1 className="relative text-6xl lg:text-8xl mb-3 text-gray-800 handwriting drop-shadow-lg">
            Proyectos
            <span className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2 
                             w-[300px] lg:w-[600px] h-24 bg-fuchsia-500/50 rotate-2 -z-10 
                             backdrop-blur-md border border-white/20 shadow-lg"></span>
          </h1>
            {/* 
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-2xl lg:text-3xl text-gray-800 font-bold handwriting mb-4"
          >
            Diseñadora web
          </motion.h2>*/}

          {/* Redes sociales en mobile: bajo el h2 */}
          <div className="lg:hidden flex justify-center gap-6 mt-4">
            <a href="https://github.com/sitarocco1981" target="_blank">
              <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/rocio-castillo-soto" target="_blank">
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </motion.div>

        {/* Navbar */}
        <NavBar />

        {/* Redes sociales en escritorio: arriba a la derecha */}
        <div className="hidden lg:flex fixed top-6 right-6 gap-6 z-50">
          <a href="https://github.com/sitarocco1981" target="_blank">
            <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8 hover:opacity-100 opacity-80" />
          </a>
          <a href="https://linkedin.com/in/rocio-castillo-soto" target="_blank">
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-100 opacity-80" />
          </a>
        </div>
      </header>

      {/* Espacio para compensar header fijo */}
      <div className="h-44"></div>






      {/* Card principal con estilo similar a Home */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="relative z-10 bg-white/90 backdrop-blur-md border-2 border-gray-300 rounded-xl shadow-2xl max-w-6xl mx-auto p-8 space-y-12 mt-20 lg:mb-14"
        style={{ backgroundImage: "url('/assets/textura-papel.png')", backgroundSize: "cover" }}
      >
        {/* Etiqueta decorativa */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>

        {/* Contexto */}
        <section>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-5xl text-center mb-6 text-gray-800 handwriting drop-shadow-lg mt-6"
          >
            Abogados Viña del Mar
          </motion.h1>
          <p className="text-lg text-gray-600">
            Este sitio fue desarrollado durante mi práctica profesional en la Agencia SBS Publicidad. Consistió en el rediseño del sitio web de un estudio de abogados en Viña del Mar, utilizando Elementor como herramienta principal para estructurar y dar forma a la propuesta digital.
          </p>
        </section>

        {/* Mi rol */}
        <section className="bg-gray-50 p-6 rounded-lg shadow relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mi rol en el proyecto</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Rediseñé la estructura de las páginas en Figma, definiendo bloques y jerarquías claras.</li>
            <li>Implementé el diseño en Elementor, ajustando tipografías, paletas y disposición de contenidos.</li>
            <li>Gestioné recursos visuales desde bancos de imágenes gratuitos, adaptándolos al estilo del cliente.</li>
          </ul>
        </section>

        
       {/* Vista resultado */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vista del resultado</h2>
          <video controls className="rounded shadow-xl mb-6 mx-auto w-full max-w-4xl">
            <source src="/assets/video-abogados.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>
          <p className="text-gray-600 text-center">
            Captura del sitio web final mostrando la nueva estructura y diseño.
          </p>
          {/* Enlace al sitio */}
  <div className="flex justify-center mt-3">
    <a
      href="https://www.abogadosvinadelmar.cl" 
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



        {/* Problema, Proceso, Resultado narrativo... */}
         {/* Problema */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Problema</h2>
          <p className="text-gray-600">
            El cliente partía de una plantilla estándar de Elementor y 
            además, el desafío era trabajar con recursos visuales limitados y transmitir profesionalismo, confianza y claridad.
          </p>
          <Image
            src="/assets/Captura-de-pantalla-abogados-plantillaantigua.webp"
            alt="Plantilla original"
            width={500}
            height={320}
            className="mt-4 shadow-md rounded mx-auto"
          />
          <Image
            src="/assets/captura-team.png"
            alt="Plantilla original"
            width={500}
            height={320}
            className="mt-4 shadow-md rounded mx-auto"
          />
        </section>



        {/* Proceso */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Proceso</h2>
          <p className="text-gray-600">
            El proceso consistió en investigar distintos sitios web de estudios de abogados, analizando paletas de colores, 
            tipografías e imágenes. Esto permitió obtener referencias y complementarlas con las ideas del cliente. 
            Para resolver el tema de las imágenes, recurrimos a bancos gratuitos relacionados con el ámbito jurídico. 
            El desarrollo se centró en optimizar la estructura del sitio para facilitar la navegación y potenciar el diseño 
            con una paleta sobria.
          </p>
        </section>

        {/* Resultado comparativo */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Resultado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">Antes</h3>
              <Image
                src="/assets/Captura-antes.png"
                alt="Antes"
                width={600}
                height={300}
                className="shadow-lg rounded w-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">Después</h3>
              <Image
                src="/assets/captura-actual.webp"
                alt="Después"
                width={600}
                height={400}
                className="shadow-lg rounded w-full"
              />
            </div>
          </div>
        </section>

        {/* Resultado narrativo */}
        <section>
          <p className="text-gray-600 mb-20">
            El resultado fue un sitio web renovado y profesional, que proyecta confianza y claridad. 
            La paleta sobria y la tipografía reforzaron la percepción de seriedad. 
            El cliente destacó la mejora en la presentación de su estudio y la Agencia valoró la eficiencia en la implementación.
          </p>
        </section>




      </motion.div>
      < PieDePagina />
      
    </main>
    
  );
}