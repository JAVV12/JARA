import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WaveSeparator } from '@/components/WaveSeparator'
import { Plans } from '@/components/Plans'
import { Gallery } from '@/components/Gallery'
import { LocationFaq } from '@/components/LocationFaq'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WaveSeparator />
      <Plans />
      <Gallery />
      <LocationFaq />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}