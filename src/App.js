import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ChatBot/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
