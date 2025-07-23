// src/components/sections/Hero.tsx
'use client'
import React from 'react'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          TINTEC Precision Manufacturing
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Soluciones CNC de alta precisión para la industria automotriz, médica y metalmecánica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#contact"
            className="bg-tintec-blue text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Cotizar
          </Link>
          <Link 
            href="#services"
            className="bg-white text-tintec-blue border border-tintec-blue px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero