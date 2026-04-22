import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ubicacion from "../components/Ubicacion";
import Historia from "../components/Historia";
import Especialidades from "../components/Especialidades";
import Talleres from "../components/Talleres";
import Sumate from "../components/Sumate";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Ubicacion />
      <Historia />
      <Especialidades />
      <Talleres />
      <Sumate />
      <Footer />
    </div>
  );
}