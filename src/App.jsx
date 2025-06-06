/*
React + Vite + Tailwind SPA – "Aquafit.Mama"

Struktur:
- HeroSection (Logo + Nav)
- Intro (Kursname)
- Termine & Kursablauf
- Vorteile
- Preise
- Kontakt

Farben als CSS-Variablen für einfache Anpassung.
*/

import HeroSection from "./components/HeroSection";
import VorteileSection from "./components/VorteileSection";
import AblaufSection from "./components/AblaufSection";
import PreiseSection from "./components/PreiseSection";
import KontaktSection from "./components/KontaktSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="font-montserrat text-[var(--text)] bg-[var(--background)] overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <VorteileSection />
                <AblaufSection />
                <TeamSection />
                <PreiseSection />
                <KontaktSection />
                <Footer />
              </>
            }
          />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
