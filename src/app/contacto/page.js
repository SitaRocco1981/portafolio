"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/NavBar";
import RedesSociales from "../components/redesSociales";
import PieDePagina from "../components/pieDePagina";
import HeaderConRedes from "../components/headerConRedes";

export default function Contacto() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);

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
      className="bg-cover bg-center bg-fixed p-10 relative lg:h-screen lg:overflow-hidden"
      style={{ backgroundImage: "url('/assets/fondito.jpg')" }}
    >
 {/* Header reutilizable */}
      <HeaderConRedes titulo="Contacto" />

      {/* Espacio para compensar header fijo */}
      <div className="h-44"></div>

{/* Layout principal */}
<section className="flex flex-col lg:flex-row lg:h-[calc(100vh-220px)] items-center justify-center gap-4 lg:gap-6 px-0 lg:px-6">
  
  {/* Formulario primero en mobile, derecha en desktop */}
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="lg:w-[40%] order-1 lg:order-2 flex items-center justify-center"
  >
    <form
            onSubmit={handleSubmit}
            className="bg-white/80 shadow-lg p-6 w-full lg:max-w-sm flex flex-col gap-5 lg:mb-24 mt-8 border-2 border-gray-300 rounded-xl"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 handwriting text-center mb-2">
              ¿Tienes algún proyecto en mente?
              
            </h3>
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

            {/* Mensajes de feedback */}
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

  {/* Imagen con efecto polaroid */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    className="lg:w-[40%] order-2 lg:order-1 flex items-center justify-center relative lg:mb-24 mb-12 mt-8 rounded-xl"
  >
   <div className="bg-slate-50 shadow-2xl border-2 border-gray-300 p-3 relative rotate-2 rounded-xl">
  {/* Cinta amarilla */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-200/80 rotate-2 shadow-md"></div>
  
  <img
    src="/assets/contacto-ro.png"
    alt="Contacto"
    className="w-64 lg:w-100 h-auto rounded-sm shadow-lg"
  />

  {/* Mensaje sutil debajo de la imagen */}
  <h3 className="text-gray-500 text-xs text-center mt-2  handwritting">
    Imagen generada por IA
  </h3>
</div>
  </motion.div>
</section>
      
      
       {/* Pie de página */}
      <PieDePagina />
    </main>
  );
}