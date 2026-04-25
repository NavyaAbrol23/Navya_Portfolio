import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
