import "./globals.css";

import { Indie_Flower, Lato } from "next/font/google";

// Configuración de Lato (textos y botones)
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // pesos más comunes
  variable: "--font-lato",
});

// Configuración de Indie Flower (títulos)
const indie = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"], // Indie Flower solo tiene un peso
  variable: "--font-indie",
});

export const metadata = {
  title: "Portafolio Rocío Castillo",
  description: "Mi portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${lato.variable} ${indie.variable}`}>
        {children}
      </body>
    </html>
  );
}