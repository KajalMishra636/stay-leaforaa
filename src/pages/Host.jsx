import { useState, useEffect } from "react";
import { FaHome, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Host() {
  const [step, setStep] = useState(1);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Auto-scroll to onboarding section
  useEffect(() => {
    if (showOnboarding) {
      document
        .querySelector(".host-onboarding")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showOnboarding]);

  return (
    <section className="host-page">
      {/* HERO */}
      <div className="host-hero">
        <h1>Become a Host</h1>
        <p>Turn your space into income with StayLeaforaa</p>

        <button
          className="hero-cta"
          onClick={() => setShowOnboarding(true)}
        >
          Start Hosting
        </button>
      </div>

      {/* BENEFITS */}
      <div className="host-benefits">
        <div className="benefit-card">
          <FaRupeeSign className="benefit-icon" />
          <h3>Earn Extra Income</h3>
          <p>Monetize unused space effortlessly.</p>
        </div>

        <div className="benefit-card">
          <MdSecurity className="benefit-icon" />
          <h3>Verified Guests</h3>
          <p>We ensure safe and trusted bookings.</p>
        </div>

        <div className="benefit-card">
          <BsLightningChargeFill className="benefit-icon" />
          <h3>Easy Management</h3>
          <p>Control pricing, availability & bookings.</p>
        </div>
      </div>

      {/* ONBOARDING SECTION */}
      {showOnboarding && (
        <section className="host-onboarding">
          <h2>Let’s get your place ready</h2>

          <div className="onboarding-cards">
            <div className="onboard-card">
              <FaHome className="onboard-icon" />
              <h3>What type of place?</h3>
              <p>Apartment, villa, farmhouse & more</p>
            </div>

            <div className="onboard-card">
              <FaMapMarkerAlt className="onboard-icon" />
              <h3>Where is it located?</h3>
              <p>City & nearby landmarks</p>
            </div>

            <div className="onboard-card">
              <FaRupeeSign className="onboard-icon" />
              <h3>Expected earnings?</h3>
              <p>You’re always in control</p>
            </div>
          </div>

          <button
            className="primary-btn"
            onClick={() => setStep(1)}
          >
            Continue
          </button>
        </section>
      )}

      {/* STEP CONTENT */}
      <div className="host-card">
        {step === 1 && <p>Tell us about your property.</p>}
        {step === 2 && <p>Upload high-quality photos.</p>}
        {step === 3 && <p>Set your pricing and availability.</p>}

        <button
          onClick={() => setStep((prev) => Math.min(prev + 1, 3))}
          disabled={step === 3}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
