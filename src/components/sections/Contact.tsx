// src/components/sections/Contact.tsx
'use client'

import React, { useState } from 'react'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!form.name.trim()) newErrors.name = 'Nombre es obligatorio'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email inválido'
    if (!form.message.trim()) newErrors.message = 'Mensaje es obligatorio'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')

    try {
      // Aquí iría la lógica de envío real, como fetch o EmailJS
      await new Promise((res) => setTimeout(res, 1500)) // Simulación de envío

      setStatus('success')
      setForm({ name: '', company: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="w-full bg-tintec-gray py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white p-8 rounded shadow"
        >
          <h2 className="text-3xl font-bold text-tintec-dark mb-6">Contáctanos</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Nombre *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block font-semibold mb-1">
              Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold mb-1">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-tintec-blue text-white px-6 py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-green-600 font-semibold">Mensaje enviado con éxito!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-600 font-semibold">
              Error al enviar. Intenta nuevamente.
            </p>
          )}
        </form>

        {/* Información de contacto lateral */}
        <div className="bg-white p-8 rounded shadow text-tintec-dark">
          <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
          <p className="mb-2">
            <strong>Dirección:</strong> Calle Industria 123, Puebla, México
          </p>
          <p className="mb-2">
            <strong>Teléfono:</strong> +52 222 123 4567
          </p>
          <p className="mb-2">
            <strong>Email:</strong> contacto@tintec.mx
          </p>
          <p className="mb-2">
            <strong>Horario:</strong> Lunes a Viernes, 9am - 6pm
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
