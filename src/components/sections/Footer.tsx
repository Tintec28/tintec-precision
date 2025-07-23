// src/components/sections/Footer.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-tintec-dark text-tintec-gray py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/logo.png"
            alt="TINTEC Precision Manufacturing Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-sm">
            Soluciones industriales de manufactura de precisión para sectores automotriz,
            médico, agroindustrial y metalmecánico.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
          <ul>
            <li className="mb-2">
              <Link href="#services" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#about" className="hover:underline">
                Acerca de
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#contact" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <p className="mb-2">Calle Industria 123, Puebla, México</p>
          <p className="mb-2">+52 222 123 4567</p>
          <p className="mb-2">contacto@tintec.mx</p>
          <p className="mb-2">Lunes a Viernes, 9am - 6pm</p>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com/tintec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tintec-blue"
                aria-label="Facebook"
              >
                {/* Aquí ícono SVG Facebook simplificado */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98h-2.5v-2.89h2.5v-2.2c0-2.47 1.47-3.83 3.73-3.83 1.08 0 2.21.2 2.21.2v2.44h-1.25c-1.23 0-1.62.77-1.62 1.56v1.83h2.75l-.44 2.89h-2.31v6.98A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/tintec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tintec-blue"
                aria-label="Twitter"
              >
                {/* Ícono SVG Twitter simplificado */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.98-2.48 9.06 9.06 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.72 4.13A12.85 12.85 0 0 1 1.67 2.16a4.5 4.5 0 0 0 1.4 6.05 4.49 4.49 0 0 1-2.04-.56v.06a4.51 4.51 0 0 0 3.62 4.42 4.49 4.49 0 0 1-2.03.08 4.52 4.52 0 0 0 4.22 3.12 9.06 9.06 0 0 1-5.6 1.93 9.34 9.34 0 0 1-1.08-.06 12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.84 0-.2 0-.42-.02-.62A9.18 9.18 0 0 0 23 3z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/tintec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tintec-blue"
                aria-label="LinkedIn"
              >
                {/* Ícono SVG LinkedIn simplificado */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8.04h4.95V24H.24V8.04zm7.1 0h4.75v2.17h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.3 5.96 7.59V24h-4.95v-7.94c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.06 2.08-3.06 4.23V24H7.34V8.04z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-tintec-gray pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TINTEC Precision Manufacturing. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
