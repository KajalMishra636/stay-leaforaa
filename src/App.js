import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Host from "./pages/Host";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ChatBot from "./components/Chatbot";
import FloatingLeaves from "./components/FloatingLeaves";

import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/host" element={<Host />} />
      </Routes>

 <FloatingLeaves />
      <ChatBot />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
