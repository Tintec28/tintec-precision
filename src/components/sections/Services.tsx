// src/components/sections/Services.tsx
import React from 'react'

const services = [
  {
    title: 'Maquinado CNC de Precisión',
    description: 'Fabricamos piezas metálicas de alta precisión para la industria automotriz, médica y metalmecánica.',
    image: '/images/cnc-service.jpg',
  },
  {
    title: 'Diseño CAD/CAM con CATIA',
    description: 'Diseñamos componentes industriales complejos utilizando herramientas CAD/CAM de última generación.',
    image: '/images/catia-service.jpg',
  },
  {
    title: 'Automatización Industrial',
    description: 'Desarrollamos soluciones a medida para automatizar procesos productivos con eficiencia.',
    image: '/images/automation-service.jpg',
  },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full bg-tintec-gray py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-tintec-dark mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tintec-blue mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button className="text-tintec-blue hover:underline font-medium">
                  Saber más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
