import { NavLink } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ProfileModal from "./ProfileModal";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [showProfile, setShowProfile] = useState(false);


  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        🌿 <span>StayLeaforaa</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/stays">Stays</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="nav-actions" ref={menuRef}>
        {/* Theme toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* User avatar */}
        <div className="user-avatar" onClick={() => setOpen(!open)}>
          👤
        </div>

        {/* Dropdown */}
        {open && (
  <div className="user-dropdown">
    <p className="user-name">Guest User</p>

    <button
      onClick={() => {
        setOpen(false);
        setShowProfile(true);
      }}
    >
      My Profile
    </button>

    <button>Bookings</button>
    <button className="logout">Logout</button>
  </div>
)}

      </div>
    </header>

    
  );
}
