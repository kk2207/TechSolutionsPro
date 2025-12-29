const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Modern, scalable web applications built with latest technologies and best practices.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android with exceptional UX.",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description: "Intelligent systems powered by machine learning and AI to automate and optimize.",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with AWS, Google Cloud, and Azure for reliability.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving threats.",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights for smarter business decisions.",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
