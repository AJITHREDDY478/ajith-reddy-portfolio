import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  const handleDownloadResume = () => {
    // Mock download - will be replaced with actual backend integration
    console.log('Downloading resume...');
    window.open('/resume/Ajith_Reddy_ROR.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header onDownloadResume={handleDownloadResume} />
      <main>
        <Hero onDownloadResume={handleDownloadResume} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
