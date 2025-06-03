import { motion } from "framer-motion";
import Button from "./Button";
import Header from "./Header";

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--primary-dark)] text-white min-h-[90vh] pt-6 pb-20 overflow-hidden">
    {/* Dekorative Luftblasen */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="bubble wave absolute top-1/4 left-1/4 w-6 h-6 bg-white opacity-60 rounded-full"></div>
      <div
        className="bubble wave absolute top-1/3 left-2/3 w-8 h-8 bg-white opacity-50 rounded-full"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="bubble wave absolute top-2/3 left-1/5 w-10 h-10 bg-white opacity-40 rounded-full"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="bubble wave absolute top-1/2 left-3/4 w-4 h-4 bg-white opacity-70 rounded-full"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
    <Header />
    <motion.div
      className="mt-12 md:mt-16 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Hero Text */}
      <div className="md:w-1/2 text-left">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight font-lovelo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="block">Aquafitness</span>
          <span className="text-[var(--accent)]">für werdende Mamas</span>
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-white/90 max-w-lg font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Ganzheitliche Bewegung & Wohlbefinden in der Schwangerschaft mit
          professioneller Begleitung in deiner Nähe.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button
            href="#kontakt"
            className="bg-[var(--accent)] text-[var(--text)] shadow-lg hover:bg-[var(--accent-dark)] transform hover:scale-105"
          >
            Kurs buchen
          </Button>
          <Button
            href="#vorteile"
            className="bg-white/20 backdrop-blur-sm text-white shadow-md hover:bg-white/30"
          >
            Mehr erfahren
          </Button>
        </motion.div>
      </div>
      {/* Hero Image */}
      <div className="md:w-1/2 relative">
        <div className="relative">
          <motion.img
            src="/aquafit-hero.png"
            alt="Aquafitness für Schwangere"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          />
          {/* Logo Overlay unten mittig, halb so breit wie das Bild, weiß */}
          <img
            src="/aquafitlogo.svg"
            alt="Aquafit.Mama Logo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 max-w-[50%] z-20 pointer-events-none select-none"
            style={{ filter: "invert(1) brightness(9)" }}
          />
          {/* Dekoelemente */}
          <motion.div
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--accent)] rounded-full -z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          ></motion.div>
          <motion.div
            className="absolute -top-4 -left-4 w-16 h-16 bg-[var(--highlight)] rounded-full -z-10 opacity-70"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
