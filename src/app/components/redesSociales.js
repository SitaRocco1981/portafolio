"use client";
import Link from "next/link";

export default function RedesSociales() {
  return (
    <>
      {/* Escritorio: arriba a la derecha */}
      <div className="hidden lg:flex fixed top-6 right-6 gap-6 z-50">
        <Link href="https://github.com/sitarocco1981" target="_blank">
          <img
            src="/assets/github.svg"
            alt="GitHub"
            className="w-8 h-8 hover:opacity-100 opacity-80"
          />
        </Link>
        <Link href="https://linkedin.com/in/rocio-castillo-soto" target="_blank">
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-8 h-8 hover:opacity-100 opacity-80"
          />
        </Link>
      </div>

      {/* Mobile: bajo el h2 */}
      <div className="lg:hidden flex justify-center gap-6 mt-4">
        <Link href="https://github.com/sitarocco1981" target="_blank">
          <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
        </Link>
        <Link href="https://linkedin.com/in/rocio-castillo-soto" target="_blank">
          <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </Link>
      </div>
    </>
  );
}