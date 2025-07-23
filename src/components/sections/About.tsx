// src/components/sections/About.tsx
'use client'
import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-tintec-dark mb-8">
          ¿Por qué elegir TINTEC?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          En TINTEC Precision Manufacturing ofrecemos soluciones innovadoras y de alta calidad
          en manufactura CNC, diseño CAD/CAM y automatización industrial. Contamos con más de 20 años
          de experiencia y certificaciones que garantizan la excelencia en cada proyecto.
        </p>
        {/* ... resto del código */}
      </div>
    </section>
  )
}

export default About