import { useState } from "react";
import StayCard from "./StayCard";
import StayDetailsModal from "./StayDetailsModal";
import { useFetchStays } from "../hooks/useFetchStays";

export default function FeaturedStays() {
  const { stays, loading, error } = useFetchStays();
  const [selectedStay, setSelectedStay] = useState(null);

  if (loading) return <p className="status">Loading featured stays...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <section className="section">
      <h2 className="section-title">Featured Stays</h2>

      <div className="stays">
        {stays.slice(0, 3).map((stay) => (
          <StayCard
            key={stay.id}
            stay={stay}
            onViewDetails={() => setSelectedStay(stay)}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedStay && (
        <StayDetailsModal
          stay={selectedStay}
          onClose={() => setSelectedStay(null)}
        />
      )}
    </section>
  );
}
