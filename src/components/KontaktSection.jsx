import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SubHeading from "./SubHeading";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const KontaktSection = () => (
  <section id="kontakt" className="py-24 px-4 bg-[var(--background)]">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Kontakt aufnehmen</SectionHeading>
        <div className="w-36 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 font-montserrat">
          Wir sind gerne für dich da und beantworten alle deine Fragen
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.a
          href="https://instagram.com/aquafit.mama"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          variants={fadeIn}
          whileHover={{ y: -8 }}
        >
          <div className="w-16 h-16 rounded-full bg-pink-100 mb-5 flex items-center justify-center">
            {/* Instagram Icon (farblos, CI) */}
            <svg
              className="w-10 h-10 text-pink-500"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </div>
          <SubHeading as="h3" className="mb-2">
            Instagram
          </SubHeading>
          <p className="text-gray-600 mb-4 font-montserrat">
            Folge uns für Updates und Einblicke
          </p>
          <p className="font-medium text-pink-500">@aquafit.mama</p>
        </motion.a>
        <motion.a
          href="tel:015117857224"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          variants={fadeIn}
          whileHover={{ y: -8 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-100 mb-5 flex items-center justify-center">
            {/* Telefon Icon */}
            <svg
              className="w-10 h-10 text-green-600"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
          </div>
          <SubHeading as="h3" className="mb-2">
            Anrufen
          </SubHeading>
          <p className="text-gray-600 mb-4 font-montserrat">
            Direkt und persönlich
          </p>
          <p className="font-medium text-green-600">0151 17857224</p>
        </motion.a>
        <motion.a
          href="mailto:aquafit.mama@gmail.com"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          variants={fadeIn}
          whileHover={{ y: -8 }}
        >
          <div className="w-16 h-16 rounded-full bg-blue-100 mb-5 flex items-center justify-center">
            {/* Mail Icon */}
            <svg
              className="w-10 h-10 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.511l8.25 5.5 8.25-5.5V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm16.5 1.978-7.72 5.15a.75.75 0 0 1-.81 0l-7.72-5.15v8.522c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.728z" />
            </svg>
          </div>
          <SubHeading as="h3" className="mb-2">
            E-Mail
          </SubHeading>
          <p className="text-gray-600 mb-4 font-montserrat">
            Für ausführliche Anfragen
          </p>
          <p className="font-medium text-[var(--primary)]">E-Mail senden</p>
        </motion.a>
      </motion.div>
      <motion.p
        className="mt-12 text-sm text-gray-500 text-center font-montserrat"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Aquafit.Mama • Alle Rechte vorbehalten
      </motion.p>
    </div>
  </section>
);

export default KontaktSection;
