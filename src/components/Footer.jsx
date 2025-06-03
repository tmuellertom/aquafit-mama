import React from "react";

const Footer = () => (
  <footer className="bg-[var(--primary-dark)] text-white py-8 mt-12">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <img
          src="/aquafitlogo.svg"
          alt="Aquafit.Mama Logo"
          className="w-10 h-10 bg-white rounded-md"
        />
        <span className="font-bold text-lg font-lovelo">Aquafit.Mama</span>
      </div>
      <nav className="flex flex-wrap gap-6 font-montserrat text-sm">
        <a href="/" className="hover:text-[var(--accent)] transition-colors">
          Start
        </a>
        <a
          href="#vorteile"
          className="hover:text-[var(--accent)] transition-colors"
        >
          Vorteile
        </a>
        <a
          href="#ablauf"
          className="hover:text-[var(--accent)] transition-colors"
        >
          Ablauf
        </a>
        <a
          href="#preise"
          className="hover:text-[var(--accent)] transition-colors"
        >
          Preise
        </a>
        <a
          href="#team"
          className="hover:text-[var(--accent)] transition-colors"
        >
          Team
        </a>
        <a
          href="#kontakt"
          className="hover:text-[var(--accent)] transition-colors"
        >
          Kontakt
        </a>
        <a
          href="/impressum"
          className="hover:text-[var(--accent)] transition-colors"
        >
          Impressum
        </a>
      </nav>
    </div>
    <div className="text-center text-xs text-white/60 mt-6 font-montserrat">
      &copy; {new Date().getFullYear()} Aquafit.Mama – Alle Rechte vorbehalten.
    </div>
  </footer>
);

export default Footer;
