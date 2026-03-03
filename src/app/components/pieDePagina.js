"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PieDePagina (){
    return(
    <div className="absolute lg:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 
                      text-center text-gray-800 handwriting text-lg mt-6 lg:mt-0 font-bold  ">
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             className="w-6 h-6 text-fuchsia-600">
          <path d="M12 21s-6-4.35-9-8.28C-1.5 7.5 3 2 7.5 5.5L12 9l4.5-3.5C21 2 25.5 7.5 21 12.72 18 16.65 12 21 12 21z"/>
        </svg>
        <span><h3>Hecho por Ro — MMXXVI</h3></span>
      </div>
    );
}