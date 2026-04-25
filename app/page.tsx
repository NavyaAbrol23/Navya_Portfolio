import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
