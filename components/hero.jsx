export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background pt-32 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
          <span className="relative inline-block w-2 h-2 bg-accent rounded-full" />
          <span className="text-sm font-medium text-accent">Innovation at Scale</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-balance mb-6">
          <span className="text-foreground">Transform Your Business With</span>{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Cutting-Edge Technology
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-2xl mb-12 text-pretty">
          Enterprise-grade solutions for web development, mobile apps, AI, cloud infrastructure, and cybersecurity that
          drive measurable business outcomes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
            Get Started Today
          </button>
          <button className="px-8 py-4 border border-border hover:border-primary text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-card">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-accent">500+</div>
            <p className="text-sm text-muted-foreground mt-2">Projects</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">150+</div>
            <p className="text-sm text-muted-foreground mt-2">Experts</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">98%</div>
            <p className="text-sm text-muted-foreground mt-2">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
