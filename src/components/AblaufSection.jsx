import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SubHeading from "./SubHeading";
import Button from "./Button";

const AblaufSection = ({ data }) => (
  <section
    id="ablauf"
    className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] py-24 px-4 relative overflow-hidden text-white"
  >
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
      <div className="bubble wave absolute top-1/3 right-1/4 w-6 h-6 bg-white opacity-60 rounded-full"></div>
      <div
        className="bubble wave absolute top-2/3 left-1/3 w-8 h-8 bg-white opacity-50 rounded-full"
        style={{ animationDelay: "1.2s" }}
      ></div>
    </div>
    <div className="container mx-auto relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading>So läuft dein Kurs ab</SectionHeading>
        <div className="w-36 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
        <p className="text-lg max-w-2xl mx-auto text-white/90">
          Ein durchdachtes Programm für dein Wohlbefinden
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.process.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg text-[var(--text)] flex flex-col items-center text-center"
            whileHover={{
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-[var(--background)] mb-5 flex items-center justify-center">
              <span className="text-[var(--primary)] font-bold text-2xl">
                {index + 1}
              </span>
            </div>
            <SubHeading as="h4">{step.title}</SubHeading>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button
          href="#preise"
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[var(--accent-dark)] transition-all duration-300"
        >
          Kursübersicht ansehen
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AblaufSection;
