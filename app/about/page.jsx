import { Navigation } from "@/components/navigation"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About TechSolutionsPro - Our Story & Values",
  description:
    "Learn about TechSolutionsPro team, our mission to deliver exceptional tech solutions, and our core values.",
}

export default function About() {
  return (
    <main>
      <Navigation />
      <section className="min-h-screen bg-gradient-to-br from-background via-card to-background pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">About TechSolutionsPro</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Pioneering digital transformation through innovative technology solutions since 2025
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founded in 2025, TechSolutionsPro started with a simple vision: to empower businesses of all sizes through
              cutting-edge technology solutions. What began as a small team of three passionate developers has grown
              into a full-service digital transformation agency.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Over the past decade, we've successfully delivered 500+ projects across industries, from startups to
              Fortune 500 companies. Our expertise spans web development, mobile applications, artificial intelligence,
              cloud infrastructure, and cybersecurity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, our team of 150+ professionals continues to innovate and deliver exceptional results that drive
              measurable business outcomes for our clients worldwide.
            </p>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation",
                  description:
                    "We stay ahead of technology trends and continuously explore new solutions to solve complex business challenges.",
                },
                {
                  title: "Excellence",
                  description:
                    "Quality is at the heart of everything we do. We never compromise on delivering exceptional results.",
                },
                {
                  title: "Partnership",
                  description:
                    "We view our clients as partners. Your success is our success, and we're committed to long-term relationships.",
                },
                {
                  title: "Integrity",
                  description:
                    "We operate with complete transparency and honesty in all our business dealings and client interactions.",
                },
                {
                  title: "Growth",
                  description:
                    "We believe in continuous learning and development for our team and clients to stay competitive.",
                },
                {
                  title: "Impact",
                  description:
                    "We measure success by the positive impact we create for businesses and the communities we serve.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-accent mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="mt-20 border-t border-border pt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
