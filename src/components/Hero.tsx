'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, Home, Car, ShowerHead } from 'lucide-react'
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
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const badges = [
  { icon: Users, text: 'Hasta 10 personas' },
  { icon: Home, text: '5 habitaciones' },
  { icon: ShowerHead, text: 'Baños' },
  { icon: Car, text: 'Parqueadero' },
]

export function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-background.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-[1100px] mx-auto"
      >
        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="h1-responsive font-playfair text-[var(--text)] mb-6"
        >
          Finca La Carmelita
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-body font-montserrat text-[var(--text)] max-w-3xl mx-auto mb-8"
        >
          Descanso en la naturaleza + cancha de fútbol para jugar en serio
        </motion.p>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-8 text-body font-montserrat text-[var(--text)]"
        >
          <MapPin className="mr-2" size={20} />
          Vereda Paraíso, cerca a las piscinas de Comfacauca (Pisoje)
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            onClick={() => window.open('https://wa.me/573013851608?text=Hola%2C+quiero+reservar+estadía+en+Finca+La+Carmelita.+¿Qué+fechas+tienen+disponibles%3F', '_blank')}
            className="bg-[var(--cta)] hover:bg-[var(--cta)]/90 text-white font-montserrat px-[22px] py-[14px] text-button rounded-[12px] shadow-[var(--shadowSoft)] transition-all duration-200"
          >
            Reservar Estadía
          </Button>
          <Button
            onClick={() => window.open('https://wa.me/573013851608?text=Hola%2C+quiero+alquilar+la+cancha+de+Finca+La+Carmelita.+¿Qué+horarios+hay+disponibles%3F', '_blank')}
            variant="outline"
            className="bg-[rgba(255,255,255,0.70)] border-[var(--border)] text-[var(--forest)] hover:bg-white font-montserrat px-[22px] py-[14px] text-button rounded-[12px] transition-all duration-200"
          >
            Alquilar Cancha
          </Button>
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[rgba(255,255,255,0.55)] border border-[var(--border)] rounded-[999px] px-4 py-3 flex flex-col items-center justify-center min-h-[80px] transition-all duration-200"
            >
              <badge.icon size={20} className="text-[var(--text)] mb-2" />
              <span className="text-[var(--text)] font-montserrat text-sm text-center leading-tight">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}