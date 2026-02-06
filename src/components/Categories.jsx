import { useNavigate } from "react-router-dom";
import beach from "../assets/beach.jpg";


const locations = [
  {
    name: "Lonavala",
    image: beach,
    tag: "Hill Escape"
  },
  {
    name: "Alibaug",
    image:
      "https://images.unsplash.com/photo-1597047084897-51e81819a499",
    tag: "Coastal Calm"
  },
  {
    name: "Coorg",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tag: "Coffee & Forests"
  },
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    tag: "Snow & Serenity"
  }
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="section explore">
      <h2 className="section-title">Explore by Location</h2>

      <div className="location-grid">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="location-tile"
            style={{ backgroundImage: `url(${loc.image})` }}
            onClick={() =>
              navigate(`/stays?location=${loc.name}`)
            }
          >
            <div className="location-overlay">
              <h3>{loc.name}</h3>
              <p>{loc.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
