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
            className="relative text-3xl lg:text-5xl text-center mb-6 text-gray-800 handwriting drop-shadow-lg mt-0 font-semibold"
          >
            Abogados Viña del Mar
          </motion.h1>

          <p className="text-lg text-gray-600">
            Este sitio fue desarrollado durante mi práctica profesional en la Agencia SBS
            Publicidad. Consistió en el rediseño del sitio web de un estudio de abogados en
            Viña del Mar, utilizando Elementor como herramienta principal para estructurar y
            dar forma a la propuesta digital.
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
              Rediseñé la estructura de las páginas en Figma, definiendo bloques y jerarquías claras.
            </li>
            <li>
              Implementé el diseño en Elementor, ajustando tipografías, paletas y disposición de contenidos.
            </li>
            <li>
              Gestioné recursos visuales desde bancos de imágenes gratuitos, adaptándolos al estilo del cliente.
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
            <source src="/assets/video-abogados.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          <p className="text-gray-600 text-center text-sm">
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

        {/* Problema */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Problema</h2>

          <p className="text-gray-800 leading-text text-lg">
            El cliente partía de una plantilla estándar de Elementor y además, el desafío era
            trabajar con recursos visuales limitados y transmitir profesionalismo, confianza
            y claridad.
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
          <p className="text-gray-600 text-center text-sm mt-2">
            Captura de algunas secciones de la plantilla original.
          </p>
        </section>

        {/* Proceso */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Proceso</h2>

          <p className="text-gray-800 text-lg leading-text">
            El proceso consistió en investigar distintos sitios web de estudios de abogados,
            analizando paletas de colores, tipografías e imágenes. Esto permitió obtener
            referencias y complementarlas con las ideas del cliente. Para resolver el tema
            de las imágenes, recurrimos a bancos gratuitos relacionados con el ámbito
            jurídico. El desarrollo se centró en optimizar la estructura del sitio para
            facilitar la navegación y potenciar el diseño con una paleta sobria.
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
          <p className="text-gray-800 leading-text text-lg mb-20 p-0.5">
            El resultado fue un sitio web renovado y profesional, que proyecta confianza y
            claridad. La paleta sobria y la tipografía reforzaron la percepción de
            seriedad. El cliente destacó la mejora en la presentación de su estudio y la
            Agencia valoró la eficiencia en la implementación.
          </p>
        </section>
      </motion.div>

      <PieDePagina />
    </main>
  );
}