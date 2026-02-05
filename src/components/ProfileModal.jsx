import { useState } from "react";

export default function ProfileModal({ view, setView, onClose }) {
  const [name, setName] = useState("Guest User");
  const [email, setEmail] = useState("guest@stayleaforaa.com");
  const [phone, setPhone] = useState("+91 90000 00000");

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* ================= PROFILE ================= */}
        {view === "profile" && (
          <>
            <h2>👤 My Profile</h2>

            <div className="profile-field">
              <label>Name</label>
              <input value={name} readOnly />
            </div>

            <div className="profile-field">
              <label>Email</label>
              <input value={email} readOnly />
            </div>

            <div className="profile-field">
              <label>Phone</label>
              <input value={phone} readOnly />
            </div>

            <button
              className="profile-btn"
              onClick={() => setView("edit")}
            >
              ✏️ Edit Profile
            </button>
          </>
        )}

        {/* ================= EDIT PROFILE ================= */}
        {view === "edit" && (
          <>
            <h2>✏️ Edit Profile</h2>

            <div className="profile-field">
              <label>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="profile-field">
              <label>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="profile-field">
              <label>Phone</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <button
              className="profile-btn save"
              onClick={() => setView("profile")}
            >
              💾 Save Changes
            </button>
          </>
        )}

        {/* ================= BOOKINGS ================= */}
        {view === "bookings" && (
          <>
            <h2>📖 My Bookings</h2>

            <div className="booking-card">
              <strong>Forest Breeze Villa</strong>
              <p>Lonavala • ₹12,000 / night</p>
              <span className="status confirmed">Confirmed</span>
            </div>

            <div className="booking-card">
              <strong>Leafy Haven Retreat</strong>
              <p>Alibaug • ₹15,000 / night</p>
              <span className="status completed">Completed</span>
            </div>

            <button className="profile-btn" onClick={onClose}>
              Close
            </button>
          </>
        )}

        {/* ================= LOGOUT ================= */}
        {view === "logout" && (
          <>
            <h2>🚪 Logout</h2>
            <p className="logout-text">
              Are you sure you want to logout?
            </p>

            <button
              className="logout-confirm"
              onClick={() => {
                alert("Logged out successfully");
                onClose();
              }}
            >
              Yes, Logout
            </button>

            <button className="logout-cancel" onClick={onClose}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}
