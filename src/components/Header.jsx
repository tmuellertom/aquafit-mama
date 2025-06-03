import { motion } from "framer-motion";
import Button from "./Button";

const Header = () => (
  <header className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10 pt-6">
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/aquafitlogo.svg"
        alt="Aquafit.Mama Logo"
        className="w-15 h-15 mr-1 text-white bg-white rounded-md"
      />
    </motion.div>
    <motion.nav
      className="space-x-4 mt-6 md:mt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <a
        href="#vorteile"
        className="hover:text-[var(--accent)] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[var(--accent)] pb-1 font-montserrat"
      >
        Vorteile
      </a>
      <a
        href="#ablauf"
        className="hover:text-[var(--accent)] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[var(--accent)] pb-1 font-montserrat"
      >
        Ablauf
      </a>
      <a
        href="#preise"
        className="hover:text-[var(--accent)] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[var(--accent)] pb-1 font-montserrat"
      >
        Preise
      </a>
      <a
        href="#team"
        className="hover:text-[var(--accent)] transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-[var(--accent)] pb-1 font-montserrat"
      >
        Team
      </a>
      <Button
        href="#kontakt"
        className="ml-2 px-4 py-2 bg-[var(--accent)] text-[var(--text)] font-bold rounded-full hover:bg-[var(--accent-dark)] transition-colors duration-300 font-montserrat"
      >
        Kontakt
      </Button>
    </motion.nav>
  </header>
);

export default Header;
