export default function StayCard({ stay, onViewDetails }) {
  return (
    <div className="card">
      <img src={stay.image} alt={stay.name} />
      <h3>{stay.name}</h3>
      <p>{stay.location}</p>
      <span>₹{stay.price} / night</span>

      <button onClick={onViewDetails}>
        View Details
      </button>
    </div>
  );
}
