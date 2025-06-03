const FooterSection = () => (
  <footer className="py-10 px-4 bg-[var(--primary-dark)] text-white">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-center mb-4 bg-white rounded-md">
          <img
            src="/aquafitlogo.svg"
            alt="Aquafit.Mama Logo"
            className="w-20 h-20 text-white"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 md:mb-0">
          <a
            href="#vorteile"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Vorteile
          </a>
          <a
            href="#ablauf"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Ablauf
          </a>
          <a
            href="#team"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Team
          </a>
          <a
            href="#preise"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Preise
          </a>
          <a
            href="#kontakt"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Kontakt
          </a>
        </div>
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} Aquafit.Mama
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
