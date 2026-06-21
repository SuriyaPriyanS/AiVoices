import FAQ from '@/components/landing/FAQ'
import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import Navbar from '@/components/landing/Navbar'
import Pricing from '@/components/landing/Pricing'
import Showcase from '@/components/landing/Showcase'
import SocialProof from '@/components/landing/SocialProof'
import Templates from '@/components/landing/Templates'

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Templates />
      <Showcase />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
