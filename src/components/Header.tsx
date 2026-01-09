'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Estadía', href: '#estadia' },
  { name: 'Cancha', href: '#cancha' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Ubicación', href: '#ubicacion' },
  { name: 'FAQ', href: '#faq' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] ${
        isScrolled
          ? 'bg-[var(--card)] backdrop-blur-md shadow-[var(--shadow)] border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-end max-w-[1100px]">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="font-montserrat text-[var(--text)] hover:text-[var(--forest)] transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--forest)] transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => window.open('https://wa.me/573013851608', '_blank')}
            className="bg-[var(--cta)] hover:bg-[var(--cta)]/90 text-white font-montserrat px-6 py-3 text-button rounded-[12px] shadow-[var(--shadowSoft)] transition-all duration-200 hover:shadow-[var(--shadow)]"
          >
            Reservar por WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[var(--text)] hover:text-[var(--forest)] transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[var(--card)] border-b border-[var(--border)] shadow-[var(--shadow)]"
        >
          <nav className="container mx-auto px-4 py-4 space-y-4 max-w-[1100px]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-montserrat text-[var(--text)] hover:text-[var(--forest)] transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/573013851608', '_blank')}
              className="w-full bg-[var(--cta)] hover:bg-[var(--cta)]/90 text-white font-montserrat py-3 text-button rounded-[12px] mt-4"
            >
              Reservar por WhatsApp
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}