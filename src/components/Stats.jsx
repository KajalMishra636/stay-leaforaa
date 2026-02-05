import { useEffect, useRef, useState } from "react";

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
    <div className="stat-card" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <h3>{count.toLocaleString()}+</h3>
      <h4>{label}</h4>
      <p>{sub}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      
      
    </section>
  );
}
