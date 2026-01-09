'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Clock, Car, ShowerHead, Bed, Trophy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const estadiaFeatures = [
  { icon: Users, text: 'Máximo 10 personas' },
  { icon: Bed, text: '5 habitaciones (2 para 4 personas, 3 para 2 personas)' },
  { icon: ShowerHead, text: 'Baños incluidos' },
  { icon: Car, text: 'Parqueadero (3 carros y 25 motos)' },
]

const canchaFeatures = [
  { icon: Clock, text: 'Lunes a sábado: 9:00 a.m. – 8:00 p.m.' },
  { icon: Clock, text: 'Domingo: 7:00 a.m. – 3:00 p.m.' },
  { icon: ShowerHead, text: 'Baños incluidos' },
  { icon: Car, text: 'Parqueadero (3 carros y 25 motos)' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function Plans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="estadia" className="section-padding">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="h2-responsive font-playfair text-[var(--text)] mb-6">
            Elige tu plan
          </h2>
          <p className="text-body font-montserrat text-[var(--text)] max-w-2xl mx-auto">
            Dos opciones perfectas para disfrutar de la naturaleza y el deporte
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Estadía Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="glass-card rounded-[16px] overflow-hidden campo-pulse"
          >
            <div className="bg-[var(--forest)] p-8 text-white">
              <div className="flex items-center mb-4">
                <Bed className="mr-3" size={32} />
                <h3 className="text-3xl font-playfair font-bold">Estadía</h3>
              </div>
              <div className="text-5xl font-bold font-montserrat mb-2">
                $50.000 COP
              </div>
              <div className="text-lg opacity-90">por persona / noche</div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {estadiaFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[var(--forest)] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-montserrat text-[var(--text)] text-body">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.open('https://wa.me/573013851608?text=Hola%2C+quiero+reservar+estadía+en+Finca+La+Carmelita.+¿Qué+fechas+tienen+disponibles%3F', '_blank')}
                className="w-full campo-btn text-white font-montserrat py-3 text-button rounded-[12px]"
              >
                Reservar Estadía
              </Button>
            </div>
          </motion.div>

          {/* Cancha Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="glass-card rounded-[16px] overflow-hidden campo-pulse"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="bg-[var(--earth)] p-8 text-white">
              <div className="flex items-center mb-4">
                <Trophy className="mr-3" size={32} />
                <h3 className="text-3xl font-playfair font-bold">Cancha de Fútbol</h3>
              </div>
              <div className="text-5xl font-bold font-montserrat mb-2">
                $60.000 COP
              </div>
              <div className="text-lg opacity-90">por hora</div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {canchaFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[var(--earth)] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-montserrat text-[var(--text)] text-body">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.open('https://wa.me/573013851608?text=Hola%2C+quiero+alquilar+la+cancha+de+Finca+La+Carmelita.+¿Qué+horarios+hay+disponibles%3F', '_blank')}
                className="w-full bg-[var(--accent2)] hover:bg-[var(--accent2)]/90 text-white font-montserrat py-3 text-button rounded-[12px] transition-all duration-200 campo-btn"
              >
                Alquilar Cancha
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}