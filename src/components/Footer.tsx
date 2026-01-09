'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[var(--forest)] text-white py-16">
      <div className="container mx-auto px-4 max-w-[1100px]">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="h2-responsive font-playfair mb-4">
            Reserva hoy y asegura tu fecha
          </h2>
          <p className="text-body font-montserrat opacity-90 mb-8 max-w-2xl mx-auto">
            Espacios limitados - contacta con nosotros para verificar disponibilidad
          </p>
          <button
            onClick={() => window.open('https://wa.me/573013851608', '_blank')}
            className="bg-[var(--cta)] hover:bg-[var(--cta)]/90 text-white font-montserrat px-8 py-4 text-button rounded-[12px] shadow-[var(--shadow)] transition-all duration-200 hover:shadow-[var(--shadowSoft)] inline-flex items-center"
          >
            Hablar por WhatsApp
          </button>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Finca La Carmelita
            </h3>
            <p className="font-montserrat opacity-90 leading-relaxed mb-4 text-body">
              Tu espacio perfecto para descansar en la naturaleza y disfrutar del fútbol
              en un entorno natural y tranquilo.
            </p>
            <p className="font-montserrat text-sm opacity-75 italic">
              Reservas sujetas a disponibilidad.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-playfair font-bold mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center font-montserrat text-body">
                <MapPin className="mr-3 flex-shrink-0" size={20} />
                <span className="opacity-90">
                  Vereda Paraíso, cerca a las piscinas de Comfacauca (Pisoje)
                </span>
              </div>
              <div className="flex items-center font-montserrat text-body">
                <Phone className="mr-3 flex-shrink-0" size={20} />
                <button
                  onClick={() => window.open('https://wa.me/573013851608', '_blank')}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  +57 301 385 1608
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-playfair font-bold mb-4">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://instagram.com/fincalacarmelita', '_blank')}
                className="bg-[var(--sage)] hover:bg-[var(--sage)]/80 p-3 rounded-[16px] transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-[var(--forest)]" />
              </button>
            </div>
            <div className="mt-4 space-y-2 font-montserrat text-sm opacity-75 text-body">
              <p>
                <a
                  href="https://instagram.com/fincalacarmelita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  @fincalacarmelita
                </a>
              </p>
              <p>
                <a
                  href="https://tiktok.com/@fincalacarmelita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  @fincalacarmelita
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="font-montserrat opacity-75 text-sm">
            © 2025 Finca La Carmelita. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}