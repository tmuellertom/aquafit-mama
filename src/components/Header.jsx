import { motion } from "framer-motion";
import Button from "./Button";

const Header = ({ currentCourse, onToggle, logo }) => (
  <header className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10 pt-6">
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={logo || "/aquafitlogo.svg"}
        alt="Aquafit.Mama Logo"
        className="w-15 h-15 mr-1 text-white bg-white rounded-md"
      />
      {/* Course Toggle */}
      <div className="bg-white/30 p-1.5 rounded-full flex items-center backdrop-blur-md border border-white/40 shadow-xl">
        <button
          onClick={() => onToggle("mama")}
          className={`px-6 py-2 rounded-full text-base font-bold transition-all duration-300 ${currentCourse === "mama"
            ? "bg-[var(--accent)] text-white shadow-md transform scale-105"
            : "text-white hover:bg-white/20"
            }`}
        >
          Mama
        </button>
        <button
          onClick={() => onToggle("baby")}
          className={`px-6 py-2 rounded-full text-base font-bold transition-all duration-300 ${currentCourse === "baby"
            ? "bg-[var(--accent)] text-white shadow-md transform scale-105"
            : "text-white hover:bg-white/20"
            }`}
        >
          Baby
        </button>
      </div>
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
        className="ml-2 px-4 py-2 bg-[var(--accent)] text-white font-bold rounded-full hover:bg-[var(--accent-dark)] transition-colors duration-300 font-montserrat"
      >
        Kontakt
      </Button>
    </motion.nav>
  </header>
);

export default Header;
