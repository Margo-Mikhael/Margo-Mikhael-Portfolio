import { useState } from "react";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Scrollup from "./components/Scrollup/Scrollup";
import Certficates from "./components/Certficates/Certficates";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Certficates />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}
