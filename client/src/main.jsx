import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Main from "./pages/main/Main";
import Research from "./pages/research/Research";
import ResearchDetail from "./pages/research/ResearchDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<App />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:id" element={<ResearchDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
