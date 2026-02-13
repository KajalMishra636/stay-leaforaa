import { FaQuoteLeft } from "react-icons/fa";

const FEEDBACK = [
  {
    name: "Aarav Mehta",
    role: "Stayed at Forest Breeze Villa, Lonavala",
    quote:
      "The booking was smooth and the villa felt like a private sanctuary in the hills. Loved the calm vibe."
  },
  {
    name: "Sara D’Souza",
    role: "Weekend getaway in Alibaug",
    quote:
      "Beautifully curated stays. The photos, pricing and details were honest – no surprises, only great views."
  },
  {
    name: "Karan Patel",
    role: "Remote work retreat in Coorg",
    quote:
      "Fast Wi‑Fi, green views and a peaceful neighbourhood. Perfect balance of work and slow travel."
  }
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">Guest feedback</h2>

      <div className="testimonial-grid">
        {FEEDBACK.map((item) => (
          <article key={item.name} className="testimonial-card">
            <FaQuoteLeft style={{ color: "#6b8f71", marginBottom: 10 }} />
            <p className="quote">{item.quote}</p>
            <div className="author">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

