import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Venue from "./Components/Venue";
import Weddings from "./Components/Weddings";
import ContactUs from "./Components/ContactUs";
import CorporateEvent from "./Components/CorporateEvent";
import SocialEvent from "./Components/SocialEvent";
import Faq from "./Components/Faq";
import Blog from "./Components/Blog";
import Planing from "./Components/Planing";
import SocialBar from "./Components/SocialBar";

const App = () => {
  return (
    <Router>
      <Nav />
      <SocialBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/corporate-event" element={<CorporateEvent />} />
        <Route path="/social-event" element={<SocialEvent />} />
        <Route path="/planning" element={<Planing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
