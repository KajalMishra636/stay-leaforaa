import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCreditCard,
  FaHome,
  FaMagic,
  FaCheckCircle,
  FaRocket
} from "react-icons/fa";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Discover & Explore",
    icon: FaSearch,
    desc: "Browse curated stays and destinations.",
    details:
      "Smart filters, curated collections, location-based discovery.",
    status: "done"
  },
  {
    phase: "Phase 2",
    title: "Smart Booking",
    icon: FaCreditCard,
    desc: "Seamless booking experience.",
    details:
      "Instant confirmation, secure payments, flexible cancellation.",
    status: "active"
  },
  {
    phase: "Phase 3",
    title: "Host Onboarding",
    icon: FaHome,
    desc: "Easy onboarding for hosts.",
    details:
      "Guided setup, pricing tools, analytics dashboard.",
    status: "upcoming"
  },
  {
    phase: "Phase 4",
    title: "Personalized Trips",
    icon: FaMagic,
    desc: "Tailored travel experiences.",
    details:
      "AI recommendations, trip planning, personalized stays.",
    status: "upcoming"
  }
];

export default function Roadmap() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [openIndex, setOpenIndex] = useState(
    roadmapData.findIndex((i) => i.status === "active")
  );

  // Scroll-synced progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const percent = (scrolled / total) * 100;

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="roadmap-section" ref={containerRef}>
      <h2 className="section-title">Our Product Roadmap</h2>

      <div className="roadmap">
        {/* Progress Line */}
        <div className="roadmap-progress">
          <motion.div
            className="roadmap-progress-fill"
            style={{ height: `${progress}%` }}
          />
        </div>

        {roadmapData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="roadmap-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`roadmap-icon ${item.status}`}>
                {item.status === "done" ? <FaCheckCircle /> : <FaRocket />}
              </div>

              <div
                className={`roadmap-card ${
                  openIndex === index ? "open" : ""
                }`}
                onClick={() => setOpenIndex(index)}
              >
                <span className="phase">{item.phase}</span>

                <h3 className="title-with-icon">
                  <Icon /> {item.title}
                </h3>

                <p>{item.desc}</p>

                <motion.div
                  className="roadmap-details"
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{item.details}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
