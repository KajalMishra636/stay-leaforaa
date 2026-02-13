import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FeaturedStays from "../components/FeaturedStays";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import Roadmap from "../components/Roadmap";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import PaymentSection from "../components/PaymentSection";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(20000);
  const [searchError, setSearchError] = useState("");

  const handleSearch = () => {
    const value = search.trim();
    if (!value) {
      setSearchError("Please enter a location to search.");
      return;
    }
    setSearchError("");

    navigate(
      `/stays?location=${encodeURIComponent(value)}&maxPrice=${maxPrice}`
    );
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
              type="text"
              placeholder="Search location (Lonavala, Coorg...)"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (searchError) setSearchError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {searchError && <p className="hero-error">{searchError}</p>}
        </div>
      </section>

      {/* 🔍 PREMIUM SEARCH SECTION (NEW) */}
      <section className="home-search">
        <div className="search-glass">
          <div className="search-item">
            <label>Search destination</label>
            <input
              type="text"
              placeholder="Lonavala, Alibaug..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (searchError) setSearchError("");
              }}
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
      <Roadmap />

      {/* STATS */}
      <Stats />
      <Testimonials />
      <PaymentSection />
    </>
  );
}
