import { useState } from "react";
import {
  FaLeaf,
  FaGlobe,
  FaInstagram,
  FaFacebookF,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="footer">
      {/* Decorative leaves */}
      <span className="leaf leaf-1"><FaLeaf /></span>
      <span className="leaf leaf-2"><FaLeaf /></span>
      <span className="leaf leaf-3"><FaLeaf /></span>

      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-col brand">
          <h3 className="footer-logo">
            <FaLeaf className="brand-icon" /> StayLeaforaa
          </h3>
          <p className="footer-text">
            Curated luxury stays surrounded by nature, comfort, and calm.
            Discover peaceful escapes across India’s most loved destinations.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/stays">Stays</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* DESTINATIONS */}
        <div className="footer-col">
          <h4>Top Destinations</h4>
          <ul>
            <li>Lonavala</li>
            <li>Alibaug</li>
            <li>Coorg</li>
            <li>Manali</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-col">
          <h4>Stay in Touch</h4>
          <p className="footer-text small">
            Get travel inspiration & exclusive offers.
          </p>

          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <div className="input-wrap">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Subscribe</button>
          </form>

          {submitted && (
            <p className="subscribe-success">
              Subscribed successfully
            </p>
          )}

          <div className="footer-socials">
            <a href="#" aria-label="Website"><FaGlobe /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} StayLeaforaa. All rights reserved.
      </div>
    </footer>
  );
}
