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
          href="https://wa.me/4915117857224"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          variants={fadeIn}
          whileHover={{ y: -8 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-100 mb-5 flex items-center justify-center">
            {/* WhatsApp Icon (farblos, CI) */}
            <svg
              className="w-10 h-10 text-green-600"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </div>
          <SubHeading as="h3" className="mb-2">
            WhatsApp
          </SubHeading>
          <p className="text-gray-600 mb-4 font-montserrat">
            Schnell und unkompliziert
          </p>
          <p className="font-medium text-green-600">0151 17857224</p>
        </motion.a>
        <motion.a
          href="mailto:hebamme.stefanie.bender@gmail.com"
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
