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
// import Planning from "./Components/Planning";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/corporate-event" element={<CorporateEvent />} />
        <Route path="/social-event" element={<SocialEvent />} />
        {/* <Route path="/planning" element={<Planning />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
