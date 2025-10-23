import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AccessSection } from "@/components/access-section"
import { ContactSection } from "@/components/contact-section"
import { RecruitSection } from "@/components/recruit-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <ServicesSection />
      <AccessSection />
      <ContactSection />
      <RecruitSection />
      <Footer />
    </main>
  )
}
