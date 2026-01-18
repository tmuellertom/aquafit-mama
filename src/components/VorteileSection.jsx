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

const VorteileSection = ({ data }) => (
  <section id="vorteile" className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Deine Vorteile</SectionHeading>
        <div className="w-24 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 font-montserrat">
          Entdecke, warum dieser Kurs ideal für euch ist
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <SubHeading as="h3" className="mb-6 relative inline-block">
            Was dich erwartet
          </SubHeading>
          <motion.ul
            className="space-y-5 text-lg font-montserrat"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {data.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                variants={fadeIn}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center">
                  <span className="text-[var(--primary)] text-xl">✓</span>
                </div>
                <div>
                  <SubHeading as="h4">{benefit.title}</SubHeading>
                  <p className="text-gray-600 text-base font-montserrat">
                    {benefit.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src={data.benefitsImage}
              alt="Aquafitnesskurs"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[var(--primary)] opacity-20 -z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
      {/* Testimonial */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-8 py-10 bg-[var(--background)] rounded-2xl relative font-montserrat">
          <div className="mb-4 flex items-center justify-center w-full">
            <span className="w-16 h-16 flex items-center justify-center mx-auto">
              <svg
                className="w-12 h-12 text-[var(--primary)]"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg>
            </span>
          </div>
          <p className="text-xl italic text-gray-700 mb-6 font-lovelo">
            „{data.testimonial.text}“
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-[var(--primary-dark)]"></span>
            <p className="font-medium text-[var(--primary-dark)] font-montserrat">
              {data.testimonial.name}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VorteileSection;
