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
      style={{ backgroundImage: "url('/assets/fondito.jpg')" }}
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

      {/* Card principal */}
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
            Calare joyas
          </motion.h1>

          <p className="text-lg text-gray-800 w-full leading-relaxed">
            Este proyecto es de mi tienda de joyas artesanales, que por
            el momento, sólo funciona en Instagram. A partir de un wireframe de
            baja fidelidad, desarrollé el sitio en Next.js con un carrito de
            compras funcional que actualmente opera con pagos por transferencia.
            El sitio aún no está publicado, ya que se encuentra en etapa de
            pruebas y ajustes antes de su lanzamiento oficial.
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
              <span className="font-semibold">Investigación:</span> realicé
              Benchmark de referentes y encuestas.
            </li>

            <li>
              <span className="font-semibold">Diseño UX/UI:</span> elaboré
              wireframes en Figma de baja fidelidad, usados para definir la
              estructura inicial del sitio.
            </li>

            <li>
              <span className="font-semibold">Desarrollo web:</span> implementé
              el sitio en Next.js, organizando el código de manera modular y
              reutilizable.
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
            <source src="/assets/video-calare.mp4" type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          <p className="text-gray-600 text-center text-sm mt-2">
            Captura del sitio web final.
          </p>

          <div className="flex justify-center mt-3">
            <a
              href="https://github.com/SitaRocco1981/tienda-calare-joyas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-fuchsia-500 hover:text-fuchsia-800 font-semibold"
            >
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

              Ver código
            </a>
          </div>
        </section>

        {/* Proceso */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Proceso
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="font-semibold">Encuestas:</span>
            <br></br>
            Para definir la estructura del sitio, realicé encuestas en
            Instagram. Los resultados mostraron que la mayoría de los clientes
            (66,7%) desean una tienda en línea acompañada de la historia de la
            marca, mientras que un 33,3% también valoran galerías de fotos,
            ofertas y colaboraciones. Estos hallazgos influyeron directamente en
            el diseño del sitio, priorizando secciones narrativas y un catálogo
            funcional con carrito de compras.
          </p>

          <Image
            src="/assets/encuesta.png"
            alt="encuesta-calare"
            width={1000}
            height={720}
            className="mt-8 shadow-md rounded"
          />

          <p className="text-gray-600 text-center mt-2 text-sm">
            Parte de los resultados de la encuesta realizada en mi cuenta de
            Instagram
          </p>
        </section>

        <section>
          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="font-semibold">
              Benchmark de otras tiendas de joyería artesanal:
            </span>
            <br></br>
            Al analizar tres tiendas online, identifiqué buenas prácticas como
            fotografías de alta calidad, descripciones completas y un carrito
            de compra visible. También observé funciones como inicio de sesión
            y barra de búsqueda. En esta primera versión de mi sitio decidí no
            incluirlas, ya que mi catálogo es reducido y busco simplificar la
            experiencia de compra. Sin embargo, las considero elementos a
            integrar en futuras iteraciones.
          </p>
        </section>

        <section>
          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="font-semibold">Wireframes:</span>
            <br></br>
            El wireframe de baja fidelidad me permitió definir la estructura
            inicial del sitio, priorizando la narrativa y la experiencia visual
            antes de integrar funcionalidades más complejas.
          </p>

          <p className="text-lg font-semibold text-gray-800 mb-2 mt-4">
            Secciones del wireframe:
          </p>

          <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1 text-lg mb-3">
            <li>
              Hero: para captar la atención y transmitir la identidad de la
              marca.
            </li>

            <li>
              Detalle de producto: para mostrar cómo se organizarían las
              descripciones y fotografías.
            </li>

            <li>
              Formulario de contacto/compra: para validar la interacción básica
              con el usuario.
            </li>
          </ul>

          <Image
            src="/assets/wireframe-calare.webp"
            alt="wireframe-calare"
            width={1000}
            height={720}
            className="mt-12 rounded mx-auto"
          />
        </section>

        {/* Resultado */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Resultado
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">Sección Inicio/Home</h3>

              <Image
                src="/assets/captura-inicio-calare.png"
                alt="Captura inicio sitio calare joyas"
                width={600}
                height={300}
                className="shadow-lg rounded w-full"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">Sección sobre la marca/historia</h3>

              <Image
                src="/assets/captura-historia-calarejoyas.png"
                alt="Captura sección historia de calare joyas"
                width={600}
                height={400}
                className="shadow-lg rounded w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow relative mb-12">
          <div className="block lg:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Logros alcanzados
          </h2>

          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>
              Sitio funcional en Next.js con carrito operativo mediante
              transferencia.
            </li>

            <li>Integración de hallazgos de encuestas</li>

            <li>
              Benchmark aplicado: fotos de calidad, categorías claras, carrito
              visible.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2 mt-4">
            Próximos pasos
          </h2>

          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Publicar el sitio y ampliar métodos de pago.</li>

            <li>
              Optimizar experiencia de usuario con búsqueda y cuenta de usuario
              cuando el catálogo crezca.
            </li>
          </ul>
        </section>
      </motion.div>

      <PieDePagina />
    </main>
  );
}