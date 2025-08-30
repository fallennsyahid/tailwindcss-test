import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import PartnersSection from "@/components/partners-section"
import PortfolioSection from "@/components/portfolio-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
