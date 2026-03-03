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
          <h1 className="relative text-6xl lg:text-8xl mb-2 text-gray-800 handwriting drop-shadow-lg">
            Rocío Castillo
            <span className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2 
                             w-[300px] lg:w-[600px] h-24 bg-fuchsia-500/50 rotate-2 -z-10 
                             backdrop-blur-md border border-white/20 shadow-lg"></span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-2xl lg:text-3xl text-gray-800 font-bold handwriting mb-4"
          >
            Diseñadora web
          </motion.h2>

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
            Calare joyas
          </motion.h1>
          <p className="text-lg text-gray-600">
            Este proyecto corresponde a mi tienda de joyas artesanales. A partir de un wireframe de baja fidelidad, desarrollé el sitio en Next.js con un carrito de compras funcional que actualmente opera con pagos por transferencia. El sitio aún no está publicado, ya que se encuentra en etapa de pruebas y ajustes antes de su lanzamiento oficial.
          </p>
        </section>

        {/* Mi rol */}
        <section className="bg-gray-50 p-6 rounded-lg shadow relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mi rol en el proyecto</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>	Investigación: realicé benchmark de referentes y encuestas.</li>
            <li>Diseño UX/UI: elaboré wireframes en Figma de baja fidelidad, usados para definir la estructura inicial del sitio.</li>
            <li>Desarrollo web: implementé el sitio en Next.js, organizando el código de manera modular y reutilizable..</li>
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Proceso</h2>
          <p className="text-gray-600">
            Encuestas: Para definir la estructura del sitio, realicé encuestas en Instagram. Los resultados mostraron que la mayoría de los clientes (66,7%) desean una tienda en línea acompañada de la historia de la marca, mientras que un 33,3% también valoran galerías de fotos, ofertas y colaboraciones. Estos hallazgos influyeron directamente en el diseño del sitio, priorizando secciones narrativas y un catálogo funcional con carrito de compras.
          </p>
          <Image
            src="/assets/encuesta.png"
            alt="Plantilla original"
            width={1000}
            height={720}
            className="mt-8 shadow-md rounded "
          />
          
        </section>



        {/* Proceso */}
        <section>
          
          <p className="text-gray-600">
            Benchmark de sitios de joyería:
Al analizar tres tiendas online, identifiqué buenas prácticas como fotografías de alta calidad, descripciones completas y un carrito de compra visible. También observé funciones como inicio de sesión y barra de búsqueda. En esta primera versión de mi sitio decidí no incluirlas, ya que mi catálogo es reducido y busco simplificar la experiencia de compra. Sin embargo, las considero elementos a integrar en futuras iteraciones.
          </p>
        </section>

        <section>
          
          <p className="text-gray-600">
            Wireframes: El wireframe de baja fidelidad me permitió definir la estructura inicial del sitio, priorizando la narrativa y la experiencia visual antes de integrar funcionalidades más complejas

          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mi rol en el proyecto</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>	Hero: para captar la atención y transmitir la identidad de la marca.</li>
            <li>Detalle de producto: para mostrar cómo se organizarían las descripciones y fotografías.</li>
            <li>Formulario de contacto/compra: para validar la interacción básica con el usuario.</li>
          </ul>
          <Image
            src="/assets/wireframe.png"
            alt="Plantilla original"
            width={1000}
            height={720}
            className="mt-8 shadow-md rounded "
          />
          
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
          <p className="text-gray-600">
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