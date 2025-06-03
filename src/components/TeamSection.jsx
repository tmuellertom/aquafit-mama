import SectionHeading from "./SectionHeading";
import SubHeading from "./SubHeading";

const team = [
  {
    name: "Stefanie Bender",
    image: "/steffi.jpg",
    description:
      "Hebamme mit Leidenschaft seit 2022, spezialisiert auf Aquafitness für Schwangere. Mutter von zwei Kindern.",
    qualifikationen: [
      "Trageberaterin",
      "Prä- und Postnatal-Yoga",
      "Vor- und Nachsorge",
      "Babymassage",
      "klinische Geburtshilfe",
    ],
  },
  {
    name: "Sandra Schönborn",
    image: "/sandra.jpg",
    description:
      "Hebamme mit Leidenschaft seit über 10 Jahren. Mutter von zwei Kindern und Expertin für Aquafitness in der Schwangerschaft.",
    qualifikationen: [
      "Stillberaterin",
      "Vor- und Nachsorge",
      "Rückbildungsgymnastik",
      "klinische Geburtshilfe",
    ],
  },
  {
    name: "Ina Fechler",
    image: "/ina.jpg",
    description:
      "Hebamme mit Leidenschaft seit über 15 Jahren. Mutter von zwei Kindern und Expertin für Entspannungstechniken in der Schwangerschaft.",
    qualifikationen: [
      "Beleghebamme Praxis Ringelblume",
      "Babymassage",
      "Ayurvedische Schwangerschaftsmassage",
      "Erste-Hilfe am Kind",
    ],
  },
];

const TeamSection = () => (
  <section id="team" className="py-20 px-4 bg-[var(--background)]">
    <div className="max-w-5xl mx-auto">
      <SectionHeading className="text-center">Unser Team</SectionHeading>
      <div className="w-24 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
      <p className="text-lg max-w-2xl mx-auto text-gray-600 font-montserrat text-center mb-10">
        Drei erfahrene Hebammen begleiten dich mit Herz, Wissen und Engagement
        durch deinen Aquafitness-Kurs.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-lg mb-4 border-4 border-[var(--primary)]"
            />
            <SubHeading as="h3" className="mb-2">
              {member.name}
            </SubHeading>
            <p className="text-gray-600 font-montserrat text-base">
              {member.description}
            </p>
            <ul className="mt-4 text-left text-sm text-gray-700 list-disc list-inside">
              {member.qualifikationen.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
