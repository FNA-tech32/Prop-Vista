import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Values from "./components/Values";
import Contact from "./components/Contact";
import GetStart from "./components/GetStart";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-x-clip font-sans">
        <div className="relative bg-ink">
          <div className="pointer-events-none absolute h-80 w-80 rounded-[100px] bg-white/50 blur-[100px]" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Values />
        <Contact />
        <GetStart />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
