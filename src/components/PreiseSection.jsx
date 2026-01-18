import { motion } from "framer-motion";
import Button from "./Button";

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

const PreiseSection = ({ data }) => (
  <section id="preise" className="py-24 px-4 bg-white">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Preise & Anmeldung
        </h2>
        <div className="w-36 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Flexible Angebote für deinen Kursbesuch
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <motion.div
          className="bg-[var(--background)] p-8 rounded-2xl shadow-lg border border-blue-100"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="flex justify-between items-start mb-6">
            <h4 className="text-2xl font-bold text-[var(--primary-dark)]">
              Kursdetails
            </h4>
          </div>
          <ul className="space-y-5 mb-8">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <span className="font-medium">Einstieg jederzeit möglich</span>
                <p className="text-gray-600 text-sm">
                  Flexibler Start nach deinen Bedürfnissen
                </p>
              </div>
            </li>
            {data.prices.map((price, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">€</span>
                </div>
                <div>
                  <span className="font-medium">
                    {price.title}: {price.price}
                  </span>
                  <p className="text-gray-600 text-sm">
                    {price.features.join(" • ")}
                  </p>
                </div>
              </li>
            ))}

            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                {/* Standort-Icon */}
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M10 2C6.686 2 4 4.686 4 8c0 4.418 5.25 9.54 5.472 9.76a1 1 0 0 0 1.416 0C10.75 17.54 16 12.418 16 8c0-3.314-2.686-6-6-6zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                    fill="#dc2626"
                  />
                </svg>
              </div>
              <div>
                <span className="font-medium">Standort: {data.location.name}</span>
                <p className="text-gray-600 text-sm mb-2">
                  {data.location.address}
                </p>
                <div className="space-y-1">
                  {data.location.details.map((detail, i) => (
                    <p key={i} className="text-sm font-medium text-[var(--primary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={data.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-[var(--accent)] underline mt-2 inline-block"
                >
                  Auf Karte zeigen
                </a>
              </div>
            </li>
          </ul>
          <div className="border-t border-blue-100 pt-5">
            <p className="text-[var(--primary-dark)] italic text-sm mb-2">
              Übrigens: Viele Krankenkassen unterstützen dieses Angebot!
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-6">Jetzt Platz sichern</h4>
            <p className="mb-6">
              Unsere Kurse sind beliebt und schnell ausgebucht. Sichere dir
              deinen Platz, indem du uns direkt kontaktierst.
            </p>
            <div className="space-y-3 mb-8">
              <p className="font-medium">So einfach geht's:</p>
              <ol className="list-decimal list-inside space-y-2 pl-2">
                <li>Wähle einen Kontaktweg unten</li>
                <li>Teile uns deinen Wunschtermin mit</li>
                <li>Wir bestätigen deine Buchung</li>
                <li>Los geht's mit Aquafit.Mama!</li>
              </ol>
            </div>
            <p className="italic mb-8">Wir freuen uns auf dich! 💙</p>
            <Button
              href="#kontakt"
              className="bg-white text-[var(--primary)] shadow-lg hover:bg-gray-100"
            >
              Kontakt aufnehmen
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
          <div className="bubble wave absolute bottom-20 right-10 w-6 h-6 bg-white opacity-30 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PreiseSection;
