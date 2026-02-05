import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m Leafy. How can I help you today?" }
  ]);

  const quickReplies = [
    "Show featured stays",
    "Popular locations",
    "Booking help",
    "Contact support"
  ];

  const handleReply = (text) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "bot", text: getBotResponse(text) }
    ]);
  };

  const getBotResponse = (text) => {
    if (text.includes("featured"))
      return "You can explore our handpicked featured stays right on this page 🌿";

    if (text.includes("location"))
      return "Popular locations include Lonavala, Alibaug, Coorg and Manali.";

    if (text.includes("booking"))
      return "Select a stay, choose your dates, and proceed to payment.";

    if (text.includes("contact"))
      return "You can reach us at support@stayleaforaa.com 📧";

    return "I’m here to help with stays, bookings, and locations 😊";
  };

  return (
    <>
      {/* CHAT BUTTON */}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            Leafy Assistant 🌿
            <span onClick={() => setOpen(false)}>✕</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${msg.from}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-quick">
            {quickReplies.map((q, i) => (
              <button key={i} onClick={() => handleReply(q)}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
