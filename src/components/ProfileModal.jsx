export default function ProfileModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="profile-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✕</button>

        <h2>My Profile</h2>

        <div className="profile-field">
          <label>Name</label>
          <input type="text" value="Guest User" readOnly />
        </div>

        <div className="profile-field">
          <label>Email</label>
          <input type="email" value="guest@stayleaforaa.com" readOnly />
        </div>

        <div className="profile-field">
          <label>Phone</label>
          <input type="text" value="+91 90000 00000" readOnly />
        </div>

        <button className="profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}
