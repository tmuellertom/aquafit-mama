import Header from "../components/Header";
import Footer from "../components/Footer";

const Impressum = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-extrabold mb-8">Impressum</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
        <p>
          Stefanie Bender
          <br />
          Ziegelhütter Straße 69
          <br />
          66292 Riegelsberg
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Kontakt</h2>
        <p>
          Telefon: 0151 17857224
          <br />
          E-Mail: aquafit.mama@gmail.com
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Haftungsausschluss</h2>
        <p>
          Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit, die Sie hier finden:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </section>
    </main>
    <Footer />
  </>
);

export default Impressum;
