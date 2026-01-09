'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

const faqs = [
  {
    question: "¿Cuál es la capacidad máxima de la finca?",
    answer: "La finca tiene capacidad para hasta 10 personas. Contamos con 5 habitaciones: 2 habitaciones para 4 personas cada una y 3 habitaciones para 2 personas cada una."
  },
  {
    question: "¿Qué incluye el parqueadero?",
    answer: "El parqueadero es gratuito e incluye espacio para 3 carros y 25 motocicletas, perfecto para grupos grandes."
  },
  {
    question: "¿Hay baños disponibles?",
    answer: "Sí, contamos con baños completos tanto en las habitaciones como en áreas comunes, incluyendo baños para la cancha de fútbol."
  },
  {
    question: "¿Cómo funciona el sistema de reservas?",
    answer: "Las reservas se hacen directamente por WhatsApp. Te contactaremos para confirmar disponibilidad y procesar el pago correspondiente."
  },
  {
    question: "¿Cuáles son los horarios de la cancha de fútbol?",
    answer: "Lunes a sábado: 9:00 a.m. – 8:00 p.m. / Domingo: 7:00 a.m. – 3:00 p.m."
  },
  {
    question: "¿Cuál es el precio por persona para la estadía?",
    answer: "$50.000 COP por persona por noche, con capacidad máxima de 10 personas."
  },
  {
    question: "¿El precio de la cancha incluye algo más?",
    answer: "$60.000 COP por hora incluye el uso de la cancha, baños y parqueadero."
  },
  {
    question: "¿Hay restricciones de edad o grupos?",
    answer: "No hay restricciones de edad. La finca es perfecta para familias, grupos de amigos o equipos deportivos."
  }
]

export function LocationFaq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ubicacion" className="section-padding">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Location */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="h2-responsive font-playfair text-[var(--text)] mb-6">
                ¿Dónde estamos?
              </h2>
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="text-[var(--forest)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-playfair font-bold text-[var(--text)] mb-2">
                    Vereda Paraíso
                  </h3>
                  <p className="font-montserrat text-[var(--text)] text-body leading-relaxed">
                    Ubicada estratégicamente cerca a las piscinas de Comfacauca en Pisoje,
                    nuestra finca ofrece el equilibrio perfecto entre tranquilidad y accesibilidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--sky)] to-[var(--sage)] rounded-[14px] shadow-[var(--shadow)] overflow-hidden flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={48} className="mx-auto mb-4 opacity-80" />
                  <h4 className="text-xl font-playfair font-bold mb-2">
                    Finca La Carmelita
                  </h4>
                  <p className="font-montserrat text-body opacity-90">
                    Vereda Paraíso, Pisoje
                  </p>
                  <p className="font-montserrat text-sm opacity-75 mt-2">
                    Cerca de las piscinas de Comfacauca
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open('#', '_blank')}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--forest)] hover:bg-[var(--forest)]/90 text-white font-montserrat px-6 py-3 text-button rounded-[12px] shadow-[var(--shadow)] transition-all duration-200"
              >
                <Navigation className="mr-2" size={16} />
                Abrir en Google Maps
              </Button>
            </div>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div variants={itemVariants}>
            <h3 className="h2-responsive font-playfair text-[var(--text)] mb-8">
              Preguntas Frecuentes
            </h3>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-[16px] px-6 hover:bg-[var(--card)]/80 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-montserrat font-medium text-[var(--text)] hover:text-[var(--forest)] py-6 text-body">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-montserrat text-[var(--text)] text-body pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center mt-8"
            >
              <p className="font-montserrat text-[var(--text)] text-body mb-4">
                ¿Tienes más preguntas?
              </p>
              <button
                onClick={() => window.open('https://wa.me/573013851608', '_blank')}
                className="text-[var(--forest)] hover:text-[var(--sage)] font-montserrat font-medium transition-colors duration-200 underline text-body"
              >
                Contáctanos por WhatsApp
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}