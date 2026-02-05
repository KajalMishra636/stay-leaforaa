import { useEffect, useState } from "react";

export default function StayDetailsModal({ stay, onClose }) {
  const [showPayment, setShowPayment] = useState(false);
  const [nights, setNights] = useState(1);
  const [toast, setToast] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const images = stay.images || [stay.image];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const totalAmount = stay.price * nights;

  const confirmBooking = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
      onClose();
    }, 2500);
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>✕</button>

          {/* IMAGE CAROUSEL */}
          <div className="carousel">
            <img src={images[currentImg]} alt="Stay" />
            <div className="carousel-controls">
              <button
                onClick={() =>
                  setCurrentImg((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrentImg((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                ›
              </button>
            </div>
          </div>

          <div className="modal-body">
            {!showPayment ? (
              <>
                <h2>{stay.name}</h2>
                <p className="location">{stay.location}</p>
                <p className="price">₹{stay.price} / night</p>

                <p className="desc">
                  Experience a peaceful stay surrounded by nature,
                  comfort, and premium hospitality.
                </p>

                <ul className="amenities">
                  <li>🌿 Nature View</li>
                  <li>📶 Free Wi-Fi</li>
                  <li>🅿️ Parking</li>
                  <li>🍳 Kitchen</li>
                </ul>

                <button
                  className="pay-btn"
                  onClick={() => setShowPayment(true)}
                >
                  Proceed to Payment
                </button>
              </>
            ) : (
              <>
                <h2>Booking Details</h2>

                {/* DATE PICKER (UI ONLY) */}
                <div className="payment-row">
                  <label>Check-in</label>
                  <input type="date" />
                </div>

                <div className="payment-row">
                  <label>Check-out</label>
                  <input type="date" />
                </div>

                <div className="payment-row">
                  <label>Nights</label>
                  <input
                    type="number"
                    min="1"
                    value={nights}
                    onChange={(e) =>
                      setNights(Math.max(1, Number(e.target.value)))
                    }
                  />
                </div>

                <div className="payment-row total">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>

                <button
                  className="pay-btn confirm"
                  onClick={confirmBooking}
                >
                  Confirm Booking
                </button>

                <button
                  className="back-btn"
                  onClick={() => setShowPayment(false)}
                >
                  ← Back
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* SUCCESS TOAST */}
      {toast && (
        <div className="toast">
          ✅ Booking confirmed successfully!
        </div>
      )}
    </>
  );
}
