export function ContactInfo() {
  return (
    <div className="space-y-4">
      {[
        {
          icon: "📍",
          title: "Address",
          content: "Gangrar, Chittorgarh, Rajasthan, India - 312001",
        },
        {
          icon: "📞",
          title: "Phone",
          content: "+91 9263480417",
        },
        {
          icon: "📧",
          title: "Email",
          content: "kunalk12395@gmail.com",
        },
      ].map((info, index) => (
        <a
          key={index}
          href={info.link}
          className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
          <div>
            <h3 className="font-semibold text-foreground">{info.title}</h3>
            <p className="text-muted-foreground group-hover:text-accent transition-colors">{info.content}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
