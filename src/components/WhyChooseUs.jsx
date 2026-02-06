import {
  FaLeaf,
  FaStar,
  FaConciergeBell,
  FaMapMarkedAlt
} from "react-icons/fa";

const features = [
  {
    icon: FaLeaf,
    title: "Nature-first stays",
    desc: "Carefully selected stays surrounded by greenery and calm environments."
  },
  {
    icon: FaStar,
    title: "Premium curated villas",
    desc: "Handpicked villas that meet high standards of comfort and design."
  },
  {
    icon: FaConciergeBell,
    title: "Trusted hospitality",
    desc: "Reliable service, transparent pricing, and guest-first support."
  },
  {
    icon: FaMapMarkedAlt,
    title: "Prime locations",
    desc: "Stays located in the most desirable travel destinations."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section why">
      <h2 className="section-title">Why StayLeaforaa?</h2>

      <div className="why-cards">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="why-card">
              <div className="why-icon">
                <Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
