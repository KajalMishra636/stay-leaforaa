import { useSearchParams } from "react-router-dom";
import { useFetchStays } from "../hooks/useFetchStays";
import StayCard from "./StayCard";
import { useState, useEffect } from "react";

export default function StayList() {
  const { stays, loading, error } = useFetchStays();
  const [searchParams] = useSearchParams();

  const queryLocation = searchParams.get("location") || "";
  const [search, setSearch] = useState(queryLocation);
  const [sort, setSort] = useState("");

  useEffect(() => {
    setSearch(queryLocation);
  }, [queryLocation]);

  if (loading) return <p className="status">⏳ Loading stays...</p>;
  if (error) return <p className="status error">❌ {error}</p>;

  let filtered = stays.filter((stay) =>
    stay.location.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <section id="stays" className="stays-section">
      <div className="controls">
       

       
      </div>

      <div className="stays">
        {filtered.length === 0 ? (
          <p>No stays found for this location.</p>
        ) : (
          filtered.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))
        )}
      </div>
    </section>
  );
}
