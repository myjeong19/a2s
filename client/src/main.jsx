import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages/main/Main";
import Research from "./pages/research/Research";
import ResearchDetail from "./pages/research/ResearchDetail.jsx";
import Eun from "./pages/contact/Eun";
import Hyo from "./pages/contact/Hyo";
import Jeong from "./pages/contact/Jeong";
import Min from "./pages/contact/Min";
import { Contact } from "./pages/contact";
import { Project } from "./pages/project";
import { AnimatedTale } from "./pages/project";
import { SmartParking } from "./pages/project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:id" element={<ResearchDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/eun" element={<Eun />} />
        <Route path="/contact/hyo" element={<Hyo />} />
        <Route path="/contact/jeong" element={<Jeong />} />
        <Route path="/contact/min" element={<Min />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/animatedTale" element={<AnimatedTale />} />
        <Route path="/project/smartParking" element={<SmartParking />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
