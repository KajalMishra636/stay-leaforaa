import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("⚠️ All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("⚠️ Enter a valid email address");
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="ai-contact">
      <div className="ai-card">
        <div className="ai-header">🤖 StayLeaforaa Assistant</div>
        <p className="ai-sub">How can we help you today?</p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Type your message..."
            value={form.message}
            onChange={handleChange}
          />

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">✅ Message sent successfully</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
