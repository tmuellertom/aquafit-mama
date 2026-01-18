export const courses = {
    mama: {
        title: "Aquafitness",
        subtitle: "für werdende Mamas",
        description: "Ganzheitliche Bewegung & Wohlbefinden in der Schwangerschaft mit professioneller Begleitung in deiner Nähe.",
        heroImage: "/aquafit-hero.png",
        logo: "/aquafitlogo.svg",
        accentColor: "#dd5588",
        accentColorDark: "#b13a6a",
        subtitleColor: "text-[var(--accent)]",
        benefitsImage: "/kurs.jpg",
        benefits: [
            {
                title: "Stärkung deines Körpers",
                description: "Schonende Übungen im Wasser kräftigen deine Muskulatur.",
                icon: "muscle",
            },
            {
                title: "Sanfte Bewegung",
                description: "Entlastung für deine Gelenke und deinen Rücken.",
                icon: "feather",
            },
            {
                title: "Entspannung pur",
                description: "Wohltuende Übungen für dich & dein Baby.",
                icon: "wave",
            },
            {
                title: "Gemeinschaft erleben",
                description: "Austausch mit anderen werdenden Müttern.",
                icon: "users",
            },
            {
                title: "Vorbereitung auf die Geburt",
                description: "Trainiere deine Ausdauer und Atmung für die Geburt.",
                icon: "wind",
            },
        ],
        testimonial: {
            text: "Ich habe mich jede Woche auf die Auszeit im Wasser gefreut – es hat mir körperlich und mental so gut getan.",
            name: "Jessica, 32 Wochen schwanger",
        },
        process: [
            {
                title: "Warm-up",
                description: "Wir starten mit sanften Aufwärmübungen, die deinen Körper optimal auf das Training vorbereiten.",
            },
            {
                title: "Aquafitness",
                description: "Speziell für Schwangere angepasste Übungen, die deinen Körper stärken ohne ihn zu belasten.",
            },
            {
                title: "Entspannung",
                description: "Zeit zum Entspannen und die wohltuenden Effekte des Wassers zu genießen.",
            },
            {
                title: "Austausch",
                description: "Gemeinsame Zeit mit anderen werdenden Mamas für Gespräche und Erfahrungsaustausch.",
            },
        ],
        prices: [
            {
                title: "6er Kurs",
                price: "95€",
                features: ["6 x 45 Min. Training", "Einstieg jederzeit möglich", "Eintritt inklusive"],
                highlight: true,
            },
        ],
        location: {
            name: "Hallenbad Dudweiler",
            address: "St. Avolder Str. 1, 66125 Saarbrücken",
            mapLink: "https://maps.google.com/?q=Hallenbad+Dudweiler",
            details: ["Mittwoch 10:30 – 11:15 Uhr"],
        },
    },
    baby: {
        title: "Aquafitness",
        subtitle: "für Babys & Eltern",
        description: "Spielerische Wassergewöhnung und Förderung der Motorik für Babys zwischen 3 und 12 Monaten.",
        heroImage: "/aquafit-hero.png",
        logo: "/aquafitbabylogo.svg",
        accentColor: "#FF9F1C",
        accentColorDark: "#e08b15",
        subtitleColor: "text-[var(--accent)]",
        benefitsImage: "/baby.png",
        benefits: [
            {
                title: "Frühförderung",
                description: "Unterstützt die motorische und geistige Entwicklung deines Kindes spielerisch.",
                icon: "growth",
            },
            {
                title: "Sicherheit",
                description: "Lerne sichere Griffe und Haltetechniken für entspanntes Baden.",
                icon: "shield",
            },
            {
                title: "Bindung stärken",
                description: "Intensive 1:1 Zeit und Körperkontakt vertiefen eure Beziehung.",
                icon: "heart",
            },
            {
                title: "Soziale Kontakte",
                description: "Erste Begegnungen mit anderen Babys in kleiner, ruhiger Gruppe.",
                icon: "users",
            },
            {
                title: "Wasserspaß",
                description: "Freude am Element Wasser entdecken – ohne Zwang und Druck.",
                icon: "smile",
            },
        ],
        testimonial: {
            text: "Der Kurs war das Highlight unserer Woche. Mein Kleiner liebt das Wasser jetzt und schläft danach immer wunderbar!",
            name: "Sabrina mit Leo (6 Monate)",
        },
        process: [
            {
                title: "Ankommen",
                description: "Sanftes Gleiten ins warme Wasser und Begrüßungsritual.",
            },
            {
                title: "Spieleinheit",
                description: "Geführte Griffe und Spiele zur Förderung der Bewegung.",
            },
            {
                title: "Freies Bewegen",
                description: "Zeit zum selbstständigen Entdecken (mit Schwimmhilfen) und Plantschen.",
            },
            {
                title: "Abschluss",
                description: "Gemeinsames Singen und ruhiger Ausklang im Wasser.",
            },
        ],
        prices: [
            {
                title: "8-Wochen-Kurs",
                price: "150€",
                features: ["8 Termine à 45 Min.", "Geschlossener Kurs (fester Start/Ende)", "Eintritt inklusive"],
                highlight: true,
            },
        ],
        location: {
            name: "Kombibad Altenkessel",
            address: "Großwaldstraße, 66126 Saarbrücken",
            mapLink: "https://maps.google.com/?q=Kombibad+Altenkessel",
            details: ["15:00 - 15:45 Uhr", "15:50 - 16:35 Uhr", "16:40 - 17:25 Uhr"],
        },
    },
};
