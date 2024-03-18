import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Propertie from "./pages/Propertie.jsx";
import ScrollToTop from "./components/ScrollToTop .jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <header className="absolute w-full bg-[#12286029] py-2 px-8">
        <Navbar />
      </header>
      <div className="page-content">
        <main className="flex-grow font-sans">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/propiedad/:id" element={<Propertie />} />
            <Route path="/nueva-propiedad" element={<Propertie />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
