import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import OurServices from "./components/OurServices/OurServices";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import Blog from "./components/Blog/Blog";
// import Career from "./components/Career/Career";
import Testimonials from "./components/Testimonials/Testimonials";
import Service1 from "./components/OurServices/Service1";
import Service2 from "./components/OurServices/Service2";
import Service3 from "./components/OurServices/Service3";
import Service4 from "./components/OurServices/Service4";
import Service5 from "./components/OurServices/Service5";


export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* <Route path="/faqs" element={<Career />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/behavioral-therapy" element={<Service1 />} />
          <Route path="/eye-movement-desensitization" element={<Service2 />} />
          <Route path="/workplace" element={<Service3 />} />
          <Route path="/counselling-psychotherapy" element={<Service4 />} />
          <Route path="/therapy-for-children-and-young-people" element={<Service5 />} />
        </Routes>
      </Router>
  );
}
