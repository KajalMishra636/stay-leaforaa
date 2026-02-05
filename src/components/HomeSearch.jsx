export default function HomeSearch({
  search,
  setSearch,
  maxPrice,
  setMaxPrice
}) {
  return (
    <section className="home-search">
      <div className="search-glass">

        <div className="search-item">
          <label>Search destination</label>
          <input
            type="text"
            placeholder="Lonavala, Alibaug..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

        <button className="search-btn">
          🔍 Search
        </button>

      </div>
    </section>
  );
}
