'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'
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

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-[var(--bg)]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="h2-responsive font-playfair text-[var(--text)] mb-6"
          >
            Reserva hoy y asegura tu fecha
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body font-montserrat text-[var(--text)] mb-8"
          >
            Espacios limitados - contacta con nosotros para verificar disponibilidad
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              onClick={() => window.open('https://wa.me/573013851608', '_blank')}
              className="bg-[var(--cta)] hover:bg-[var(--cta)]/90 text-white font-montserrat px-8 py-4 text-button rounded-[12px] shadow-[var(--shadow)] transition-all duration-200 hover:shadow-[var(--shadowSoft)] inline-flex items-center"
            >
              <MessageCircle className="mr-2" size={20} />
              Hablar por WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}