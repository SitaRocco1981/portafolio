"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import RedesSociales from "../components/redesSociales";
import PieDePagina from "../components/pieDePagina";

export default function Contacto() {
  const [status, setStatus] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      nombre: e.target[0].value,
      email: e.target[1].value,
      mensaje: e.target[2].value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main
      className="bg-cover bg-center bg-fixed p-18 relative"
      style={{ backgroundImage: "url('/assets/fondoo.webp')" }}
    >
      {/* NAV */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : ""}`}
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

      <div className="text-center mt-24 sm:mt-28 lg:mt-18">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 handwriting -mb-14">
          ¿Tienes algún proyecto en mente?
        </h1>
      </div>

      {/* Layout principal */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-8 px-0 lg:px-6 mt-28 sm:mt-32 lg:mt-40">
        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-[40%] order-1 lg:order-2 flex items-center justify-center"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 shadow-lg p-6 w-full max-w-2xl sm:max-w-sm lg:max-w-md flex flex-col gap-6 mt-12 sm:mt-16 lg:-mt-9 border-2 border-gray-300 rounded-xl"
          >
            <input
              type="text"
              required
              placeholder="Tu nombre"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
            <input
              type="email"
              required
              placeholder="Tu correo"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
            <textarea
              placeholder="Tu mensaje"
              rows="4"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            ></textarea>
            <button
              type="submit"
              className="bg-fuchsia-500/50 text-gray-800 font-bold py-3 rounded-md shadow-md hover:bg-fuchsia-200 transition cursor-pointer"
            >
              ENVIAR
            </button>

            {status === "success" && (
              <p className="text-green-600 font-semibold text-center mt-4">
                ¡Tu mensaje fue enviado con éxito 😺!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-semibold text-center mt-4">
                Ocurrió un error al enviar. Intenta nuevamente.
              </p>
            )}
          </form>
        </motion.div>

        {/* Imagen polaroid */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="lg:w-[40%] order-2 lg:order-1 flex items-center justify-center relative mb-12 lg:mb-24 mt-12 sm:mt-16 lg:mt-12 rounded-xl"
        >
          <div className="bg-slate-50 shadow-2xl border-2 border-gray-300 p-3 relative rotate-2 rounded-xl w-full max-w-xs sm:max-w-sm lg:max-w-sm">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>
            <img
              src="/assets/contacto-ro.png"
              alt="Contacto"
              className="w-full h-auto rounded-sm shadow-lg"
            />
            <h3 className="text-gray-500 text-xs text-center mt-2 handwriting">
              Imagen generada por IA
            </h3>
          </div>
        </motion.div>
      </section>

      <PieDePagina />
    </main>
  );
}