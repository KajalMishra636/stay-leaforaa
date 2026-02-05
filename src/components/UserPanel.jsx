import { useEffect, useState } from "react";


export default function UserPanel({ view, onClose }) {
  const [profile, setProfile] = useState({
    name: "Guest User",
    email: "guest@stayleaforaa.com",
    phone: "+91 90000 00000",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load profile from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  // Save profile
  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setSaved(true);
    setIsEditing(false);

    setTimeout(() => setSaved(false), 1200);
  };

  return (
    <div className="user-panel-backdrop" onClick={onClose}>
      <aside
        className="user-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="panel-close" onClick={onClose}>✕</button>

        {/* ================= PROFILE ================= */}
        {view === "profile" && (
          <>
            <h2>My Profile</h2>

            {/* VIEW MODE */}
            {!isEditing && (
              <>
                <div className="profile-view">
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                  <p><strong>Phone:</strong> {profile.phone}</p>
                </div>

                <button
                  className="primary-btn"
                  onClick={() => setIsEditing(true)}
                >
                  ✏️ Edit Profile
                </button>

                {saved && (
                  <p className="save-feedback">✔ Profile updated</p>
                )}
              </>
            )}

            {/* EDIT MODE */}
            {isEditing && (
              <>
                <label>Name</label>
                <input
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />

                <label>Email</label>
                <input
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />

                <label>Phone</label>
                <input
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />

                <button className="primary-btn save" onClick={handleSave}>
                  💾 Save Changes
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            )}
          </>
        )}

        {/* ================= BOOKINGS ================= */}
        {view === "bookings" && (
          <>
            <h2>My Bookings</h2>
            <p className="empty">No bookings yet 🌿</p>
          </>
        )}

        {/* ================= LOGOUT ================= */}
        {view === "logout" && (
          <>
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button
              className="danger-btn"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Confirm Logout
            </button>
          </>
        )}
      </aside>
    </div>
  );
}
