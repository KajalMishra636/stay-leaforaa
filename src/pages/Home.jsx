import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import FeaturedStays from "../components/FeaturedStays";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";


import Stats from "../components/Stats";

export default function Home() {

  const searchRef = useRef();
  const navigate = useNavigate();
  const [maxPrice, setMaxPrice] = useState(20000);

  const handleSearch = () => {
    const value = searchRef.current.value.trim();
    if (!value) return;

    navigate(`/stays?location=${encodeURIComponent(value)}`);
  };

  return (
    <>
      {/* HERO */}
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

      {/* 🔍 PREMIUM SEARCH SECTION (NEW) */}
      <section className="home-search">
        <div className="search-glass">
          <div className="search-item">
            <label>Search destination</label>
            <input
              ref={searchRef}
              type="text"
              placeholder="Lonavala, Alibaug..."
            />
          </div>

          <div className="search-item">
            <label>Check-in date</label>
            <input type="date" />
          </div>

          <div className="search-item">
            <label>Max price (₹{maxPrice})</label>
            <input
              type="range"
              min="5000"
              max="50000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <button className="search-btn" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>
      </section>




      {/* FEATURED */}
      <FeaturedStays />



      {/* EXPLORE */}
      <Categories />

      {/* WHY */}
      <WhyChooseUs />
        
  
         

      {/* STATS */}
      <Stats />
    </>
  );
}
