import { FaCreditCard, FaWallet, FaMobileAlt } from "react-icons/fa";

const OPTIONS = [
  {
    icon: <FaCreditCard />,
    title: "Cards & EMI",
    desc: "Pay securely with all major debit/credit cards and flexible EMI options on select banks."
  },
  {
    icon: <FaWallet />,
    title: "UPI & Wallets",
    desc: "Use UPI apps and popular wallets for one‑tap, 100% secure payments at checkout."
  },
  {
    icon: <FaMobileAlt />,
    title: "Saved details",
    desc: "Securely save your preferences so future bookings are faster, without compromising safety."
  }
];

export default function PaymentSection() {
  return (
    <section className="feature-section">
      <h2 className="section-title">Modern, secure payments</h2>

      <div className="feature-grid">
        {OPTIONS.map((item) => (
          <article key={item.title} className="feature-card">
            <div
              style={{
                fontSize: "24px",
                marginBottom: "10px",
                color: "#16a34a"
              }}
            >
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

