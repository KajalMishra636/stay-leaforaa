import { NavLink } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import UserPanel from "./UserPanel";
import logo from "../assets/logo.jpg";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState(null);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="logo">
          <img src={logo} alt="StayLeaforaa logo" />
          <span>StayLeaforaa</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/stays">Stays</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/host" className="host-link">
  Host your place
</NavLink>

        </nav>

        <div className="nav-actions" ref={menuRef}>
          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <div
            className={`user-avatar ${activeView ? "active" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            👤
          </div>

          {/* Dropdown */}
          {open && (
            <div className="user-dropdown">
              <p className="user-name">Guest User</p>

              <button
                onClick={() => {
                  setActiveView("profile");
                  setOpen(false);
                }}
              >
                My Profile
              </button>

              <button
                onClick={() => {
                  setActiveView("bookings");
                  setOpen(false);
                }}
              >
                Bookings
              </button>

              <button
                className="logout"
                onClick={() => {
                  setActiveView("logout");
                  setOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* SLIDE-IN USER PANEL */}
      {activeView && (
        <UserPanel view={activeView} onClose={() => setActiveView(null)} />
      )}
    </>
  );
}
