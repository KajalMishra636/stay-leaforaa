import { useRef } from "react";

<section className="hero-container">
  <video
    className="hero-video"
    src="/assets/nature.mp4"
    autoPlay
    muted
    loop
  />

  <div className="hero-overlay">
    <h1 className="hero-title">
      Find Your Calm. <span>Stay in Nature.</span>
    </h1>

    <p className="hero-subtitle">
      Handpicked villas & peaceful retreats across India
    </p>

    <div className="hero-search">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search location (Lonavala, Coorg...)"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  </div>
</section>
