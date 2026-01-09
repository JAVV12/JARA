import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Finca La Carmelita - Descanso en la naturaleza + cancha de fútbol',
  description: 'Finca La Carmelita ofrece descanso en la naturaleza con habitaciones cómodas para hasta 10 personas y una cancha de fútbol profesional para jugar en serio. Ubicada en Vereda Paraíso, cerca a las piscinas de Comfacauca.',
  keywords: 'finca, descanso, naturaleza, cancha fútbol, alquiler habitaciones, Pisoje, Comfacauca',
  authors: [{ name: 'Finca La Carmelita' }],
  openGraph: {
    title: 'Finca La Carmelita - Descanso en la naturaleza + cancha de fútbol',
    description: 'Finca La Carmelita ofrece descanso en la naturaleza con habitaciones cómodas para hasta 10 personas y una cancha de fútbol profesional.',
    url: 'https://fincalacarmelita.com',
    siteName: 'Finca La Carmelita',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Finca La Carmelita - Descanso y fútbol en la naturaleza',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finca La Carmelita - Descanso en la naturaleza + cancha de fútbol',
    description: 'Finca La Carmelita ofrece descanso en la naturaleza con habitaciones cómodas para hasta 10 personas y una cancha de fútbol profesional.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${montserrat.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--text)] font-montserrat text-body antialiased">
        {children}
      </body>
    </html>
  )
}