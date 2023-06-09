import React from "react";
import ReactDOM from "react-dom/client";
import Fixed from "./Fixed-comps";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import About from "./components/About";
import Career from "./components/Career";
import Wrt from "./components/services/Wrt";
import Ms from "./components/services/Ms";
import Dm from "./components/services/Dm";
import Sd from "./components/services/Sd";
import Consultancy from "./components/services/Consultancy";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fixed />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="career" element={<Career />} />
            <Route path="wrt" element={<Wrt />} />
            <Route path="ms" element={<Ms />} />
            <Route path="dm" element={<Dm />} />
            <Route path="sd" element={<Sd />} />
            <Route path="consultancy" element={<Consultancy />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
