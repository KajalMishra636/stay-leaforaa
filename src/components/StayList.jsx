import { useSearchParams } from "react-router-dom";
import { useFetchStays } from "../hooks/useFetchStays";
import StayCard from "./StayCard";
import StayDetailsModal from "./StayDetailsModal";
import { useState, useEffect } from "react";

const QUICK_FILTERS = [
  { id: "all", label: "All stays" },
  { id: "hills", label: "Hill escapes" },
  { id: "coastal", label: "Coastal stays" },
  { id: "forest", label: "Forest retreats" }
];

function getCategoryForStay(stay) {
  const loc = stay.location?.toLowerCase() || "";
  if (loc.includes("lonavala") || loc.includes("manali")) return "hills";
  if (loc.includes("alibaug") || loc.includes("goa")) return "coastal";
  if (loc.includes("coorg")) return "forest";
  return "all";
}

export default function StayList() {
  const { stays, loading, error } = useFetchStays();
  const [searchParams] = useSearchParams();

  const queryLocation = searchParams.get("location") || "";
  const queryMaxPrice = Number(searchParams.get("maxPrice")) || "";

  const [search, setSearch] = useState(queryLocation);
  const [sort, setSort] = useState("");
  const [selectedStay, setSelectedStay] = useState(null);
  const [maxPrice, setMaxPrice] = useState(queryMaxPrice);
  const [priceError, setPriceError] = useState("");
  const [segment, setSegment] = useState("all");

  useEffect(() => {
    setSearch(queryLocation);
    if (queryMaxPrice) {
      setMaxPrice(queryMaxPrice);
    }
  }, [queryLocation, queryMaxPrice]);

  if (loading) return <p className="status">⏳ Loading stays...</p>;
  if (error) return <p className="status error">❌ {error}</p>;

  const numericMax = Number(maxPrice) || Infinity;

  let filtered = stays.filter((stay) => {
    const matchesLocation = stay.location
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPrice = stay.price <= numericMax;
    const category = getCategoryForStay(stay);
    const matchesSegment =
      segment === "all" || category === segment;

    return matchesLocation && matchesPrice && matchesSegment;
  });

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <section id="stays" className="stays-section">
      {/* FILTER & SORT BAR */}
      <div className="filter-bar">
        <input
          className="filter-input"
          type="text"
          placeholder="Search by location (e.g. Lonavala)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          className="filter-input price-input"
          type="number"
          min="1000"
          max="100000"
          placeholder="Max price (₹)"
          value={maxPrice}
          onChange={(e) => {
            const value = e.target.value;
            setMaxPrice(value);

            if (!value) {
              setPriceError("");
              return;
            }

            const n = Number(value);
            if (Number.isNaN(n) || n < 1000 || n > 100000) {
              setPriceError(
                "Please choose a price between ₹1,000 and ₹100,000."
              );
            } else {
              setPriceError("");
            }
          }}
        />

        <select
          className="filter-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by price</option>
          <option value="low">Low to high</option>
          <option value="high">High to low</option>
        </select>
      </div>

      {/* QUICK SEGMENT CHIPS */}
      <div className="filter-chips">
        {QUICK_FILTERS.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className={`filter-chip ${
              segment === chip.id ? "active" : ""
            }`}
            onClick={() => setSegment(chip.id)}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {priceError && (
        <div style={{ margin: "0 40px" }}>
          <p className="form-error">{priceError}</p>
        </div>
      )}

      <div className="stays">
        {filtered.length === 0 ? (
          <p>No stays found for this location.</p>
        ) : (
          filtered.map((stay) => (
            <StayCard
              key={stay.id}
              stay={stay}
              onViewDetails={() => setSelectedStay(stay)}
            />
          ))
        )}
      </div>

      {selectedStay && (
        <StayDetailsModal
          stay={selectedStay}
          onClose={() => setSelectedStay(null)}
        />
      )}
    </section>
  );
}
