'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Clock, Car, ShowerHead, Bed, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'

const estadiaFeatures = [
  { icon: Users, text: 'Máximo 10 personas' },
  { icon: Bed, text: '5 habitaciones (2 para 4 personas, 3 para 2 personas)' },
  { icon: ShowerHead, text: 'Baños incluidos' },
  { icon: Car, text: 'Parqueadero (3 carros + 25 motos)' },
]

const canchaFeatures = [
  { icon: Clock, text: 'Lunes a sábado: 9:00 a.m. – 8:00 p.m.' },
  { icon: Clock, text: 'Domingo: 7:00 a.m. – 3:00 p.m.' },
  { icon: ShowerHead, text: 'Baños incluidos' },
  { icon: Car, text: 'Parqueadero (3 carros + 25 motos)' },
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

export function PlanCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="estadia" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-texto mb-6">
            Elige tu plan
          </h2>
          <p className="text-xl font-montserrat text-gray-600 max-w-2xl mx-auto">
            Dos opciones perfectas para disfrutar de la naturaleza y el deporte
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Estadía Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-verde-bosque to-salvia p-8 text-white">
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
                    <feature.icon className="text-verde-bosque mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-montserrat text-texto">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.open('https://wa.me/573013851608?text=Hola%2C+quiero+reservar+estadía+en+Finca+La+Carmelita.+¿Qué+fechas+tienen+disponibles%3F', '_blank')}
                className="w-full bg-cta hover:bg-green-600 text-white font-montserrat py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                Reservar Estadía
              </Button>
            </div>
          </motion.div>

          {/* Cancha Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-tierra to-cielo p-8 text-white">
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
                    <feature.icon className="text-tierra mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-montserrat text-texto">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => window.open('https://wa.me/573013851608?text=Hola%2C+quiero+alquilar+la+cancha+de+Finca+La+Carmelita.+¿Qué+horarios+hay+disponibles%3F', '_blank')}
                className="w-full bg-tierra hover:bg-amber-700 text-white font-montserrat py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
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
