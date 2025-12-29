import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Quick Contact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach us directly through any of these channels
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
