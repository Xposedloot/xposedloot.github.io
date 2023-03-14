import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Services from "./pages/services";
import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
