'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
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
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-playfair font-bold text-texto mb-6"
            >
              Preguntas Frecuentes
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl font-montserrat text-gray-600"
            >
              Todo lo que necesitas saber sobre Finca La Carmelita
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-6 hover:bg-gray-100 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-montserrat font-medium text-texto hover:text-verde-bosque py-6 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-montserrat text-gray-700 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="font-montserrat text-gray-600 mb-4">
              ¿Tienes más preguntas?
            </p>
            <button
              onClick={() => window.open('https://wa.me/573013851608', '_blank')}
              className="text-verde-bosque hover:text-salvia font-montserrat font-medium transition-colors duration-200 underline"
            >
              Contáctanos por WhatsApp
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
