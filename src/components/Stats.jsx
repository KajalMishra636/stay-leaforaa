import { useEffect, useRef, useState } from "react";
import { FaLeaf, FaHome, FaSmile } from "react-icons/fa";

function StatItem({ icon, value, label, sub }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          let start = 0;
          const duration = 1200;
          const step = Math.max(Math.floor(duration / value), 20);

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat-box" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <h3>{count.toLocaleString()}+</h3>
      <h4>{label}</h4>
      <p>{sub}</p>
    </div>
  );
}

const STATS = [
  {
    icon: <FaLeaf />,
    value: 2500,
    label: "Nature-first stays",
    sub: "Handpicked retreats surrounded by greenery and calm."
  },
  {
    icon: <FaHome />,
    value: 180,
    label: "Unique properties",
    sub: "Villas, homestays and farmhouses across India."
  },
  {
    icon: <FaSmile />,
    value: 3200,
    label: "Happy guests",
    sub: "Travelers who found their calm with StayLeaforaa."
  }
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-wrapper">
        <div className="stats-heading">
          <h2>Trusted by nature‑loving travelers</h2>
          <p>
            Real numbers from our community of guests and hosts choosing
            peaceful, nature‑centric stays.
          </p>
        </div>

        <div className="stats-container">
          {STATS.map((item) => (
            <StatItem
              key={item.label}
              icon={item.icon}
              value={item.value}
              label={item.label}
              sub={item.sub}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
