'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-playfair font-bold text-texto mb-6"
            >
              Ubicación
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl font-montserrat text-gray-600"
            >
              Fácil acceso desde las principales vías de Popayán
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-verde-bosque mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-texto mb-2">
                    Vereda Paraíso
                  </h3>
                  <p className="font-montserrat text-gray-700 leading-relaxed">
                    Ubicada estratégicamente cerca a las piscinas de Comfacauca en Pisoje,
                    nuestra finca ofrece el equilibrio perfecto entre tranquilidad y accesibilidad.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-playfair font-bold text-texto mb-4">
                  Cómo llegar
                </h4>
                <div className="space-y-3 font-montserrat text-gray-700">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-verde-bosque rounded-full mr-3"></span>
                    Desde Popayán: Ruta principal hacia Pisoje
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-salvia rounded-full mr-3"></span>
                    Cerca de las piscinas de Comfacauca
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-cielo rounded-full mr-3"></span>
                    Acceso por vía veredal en buen estado
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open('#', '_blank')} // TODO: Reemplazar con enlace real de Google Maps
                className="bg-cielo hover:bg-blue-600 text-white font-montserrat px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg inline-flex items-center"
              >
                <Navigation className="mr-2" size={20} />
                Abrir en Google Maps
              </Button>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-cielo to-salvia rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={64} className="mx-auto mb-4 opacity-80" />
                    <h4 className="text-2xl font-playfair font-bold mb-2">
                      Finca La Carmelita
                    </h4>
                    <p className="font-montserrat text-lg opacity-90">
                      Vereda Paraíso, Pisoje
                    </p>
                    <p className="font-montserrat text-sm opacity-75 mt-2">
                      Cerca de las piscinas de Comfacauca
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-white font-montserrat text-sm font-medium">
                    📍 Ubicación exacta próximamente
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
