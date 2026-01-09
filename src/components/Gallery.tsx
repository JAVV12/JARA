'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Array de 8 placeholders con gradientes diferentes
const galleryItems = [
  { gradient: 'from-[var(--forest)] to-[var(--sage)]', text: 'Vista principal' },
  { gradient: 'from-[var(--sage)] to-[var(--sky)]', text: 'Jardín' },
  { gradient: 'from-[var(--sky)] to-[var(--bg)]', text: 'Cancha de fútbol' },
  { gradient: 'from-[var(--bg)] to-[var(--earth)]', text: 'Habitaciones' },
  { gradient: 'from-[var(--earth)] to-[var(--forest)]', text: 'Área común' },
  { gradient: 'from-[var(--forest)] to-[var(--sky)]', text: 'Baños' },
  { gradient: 'from-[var(--sage)] to-[var(--earth)]', text: 'Parqueadero' },
  { gradient: 'from-[var(--earth)] to-[var(--bg)]', text: 'Atardecer' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="galeria" className="section-padding bg-[var(--bg)]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="h2-responsive font-playfair text-[var(--text)] mb-6">
            Galería
          </h2>
          <p className="text-body font-montserrat text-[var(--text)] max-w-2xl mx-auto">
            Imágenes ilustrativas (IA) mientras publicamos las reales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`aspect-[16/9] bg-gradient-to-br ${item.gradient} rounded-[14px] overflow-hidden shadow-[var(--shadow)] cursor-pointer group relative transition-all duration-200`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-montserrat text-sm font-medium text-center px-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {item.text}
                </span>
              </div>
              {/* Blur overlay */}
              <div className="absolute inset-0 filter blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm font-montserrat text-[var(--text)]/70 italic">
            Las imágenes reales se actualizarán próximamente
          </p>
        </motion.div>
      </div>
    </section>
  )
}