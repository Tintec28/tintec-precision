// src/app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'TINTEC Precision Manufacturing',
  description:
    'Soluciones industriales de maquinado CNC, diseño CAD/CAM y automatización para el sector automotriz, médico y metalmecánico.',
  keywords: ['CNC', 'CATIA', 'Automatización', 'Manufactura de precisión', 'TINTEC'],
  authors: [{ name: 'TINTEC Precision' }],
  creator: 'TINTEC',
  openGraph: {
    title: 'TINTEC Precision Manufacturing',
    description: 'Líder en manufactura CNC y automatización industrial.',
    url: 'https://www.tintec.mx',
    siteName: 'TINTEC Precision',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-white text-tintec-dark font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
