import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Main from "./pages/main/Main";
import Research from "./pages/research/Research";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<App />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
