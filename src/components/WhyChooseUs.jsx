const features = [
  {
    icon: "🌿",
    title: "Nature-first stays",
    desc: "Carefully selected stays surrounded by greenery and calm environments."
  },
  {
    icon: "⭐",
    title: "Premium curated villas",
    desc: "Handpicked villas that meet high standards of comfort and design."
  },
  {
    icon: "🛎️",
    title: "Trusted hospitality",
    desc: "Reliable service, transparent pricing, and guest-first support."
  },
  {
    icon: "📍",
    title: "Prime locations",
    desc: "Stays located in the most desirable travel destinations."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section why">
      <h2 className="section-title">Why StayLeaforaa?</h2>

      <div className="why-cards">
        {features.map((item) => (
          <div key={item.title} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
