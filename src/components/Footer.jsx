export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-col">
          <h3 className="footer-logo">🌿 StayLeaforaa</h3>
          <p className="footer-text">
            Curated luxury stays surrounded by nature, comfort, and calm.
            Discover peaceful escapes across India’s most loved destinations.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/stays">Stays</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div className="footer-col">
          <h4>Top Destinations</h4>
          <ul>
            <li>Lonavala</li>
            <li>Alibaug</li>
            <li>Coorg</li>
            <li>Manali</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: support@stayleaforaa.com</p>
          <p>Phone: +91 90000 00000</p>

          <div className="footer-socials">
            <span>🌐</span>
            <span>📷</span>
            <span>📘</span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} StayLeaforaa. All rights reserved.
      </div>
    </footer>
  );
}
