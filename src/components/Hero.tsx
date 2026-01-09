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
      {/* Campo Tranquilo Background */}
      <div className="absolute inset-0 hero-campo-bg"></div>
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Floating campo elements - natural and calming */}
      <div className="absolute top-24 left-16 w-3 h-6 bg-[var(--sage)] rounded-full opacity-30 campo-float" style={{ borderRadius: '50% 50% 50% 0' }}></div>
      <div className="absolute top-36 right-24 w-4 h-8 bg-[var(--forest)] rounded-full opacity-25 campo-float" style={{ animationDelay: '2s', borderRadius: '50% 50% 0 50%' }}></div>
      <div className="absolute bottom-28 left-32 w-2 h-4 bg-[var(--accent1)] rounded-full opacity-35 campo-float" style={{ animationDelay: '4s', borderRadius: '0 50% 50% 50%' }}></div>
      <div className="absolute bottom-16 right-16 w-3 h-5 bg-[var(--sky)] rounded-full opacity-20 campo-float" style={{ animationDelay: '1s', borderRadius: '50% 0 50% 50%' }}></div>

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
          className="h1-responsive font-playfair campo-text mb-6"
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
            className="campo-btn text-white font-montserrat px-[22px] py-[14px] text-button rounded-[12px]"
          >
            Reservar Estadía
          </Button>
          <Button
            onClick={() => window.open('https://wa.me/573013851608?text=Hola%2C+quiero+alquilar+la+cancha+de+Finca+La+Carmelita.+¿Qué+horarios+hay+disponibles%3F', '_blank')}
            variant="outline"
            className="bg-[rgba(255,255,255,0.90)] border-2 border-[var(--border)] text-[var(--text)] hover:bg-white hover:border-[var(--cta)] font-montserrat px-[22px] py-[14px] text-button rounded-[12px] transition-all duration-200 hover:shadow-[var(--shadowSoft)]"
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