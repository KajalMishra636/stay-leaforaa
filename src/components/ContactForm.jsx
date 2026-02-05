import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    alert("Thank you! We’ll get back to you.");
    setEmail("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Get in Touch</h3>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
