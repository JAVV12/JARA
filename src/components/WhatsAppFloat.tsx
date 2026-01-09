'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const floatVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 1,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

export function WhatsAppFloat() {
  return (
    <motion.div
      variants={floatVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={() => window.open('https://wa.me/573013851608', '_blank')}
        className="bg-[var(--cta)] hover:bg-[var(--cta)]/90 text-white p-4 rounded-full shadow-[var(--shadow)] transition-all duration-200 hover:shadow-[var(--shadowSoft)]"
        aria-label="Contactar por WhatsApp"
        style={{ width: '56px', height: '56px' }}
      >
        <MessageCircle size={24} />
      </button>
    </motion.div>
  )
}