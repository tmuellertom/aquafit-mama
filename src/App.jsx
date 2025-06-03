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
import FooterSection from "./components/FooterSection";
import TeamSection from "./components/TeamSection";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="font-montserrat text-[var(--text)] bg-[var(--background)] overflow-hidden">
      <HeroSection />
      <VorteileSection />
      <AblaufSection />
      <TeamSection />
      <PreiseSection />
      <KontaktSection />
      <FooterSection />
    </div>
  );
}

export default App;
