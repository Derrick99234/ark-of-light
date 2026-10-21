import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Pillars from "./components/pillars";
import Stats from "./components/stats";
import Media from "./components/media";
import Facilities from "./components/facilities";
import Projects from "./components/projects";
import Visit from "./components/visit";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Pillars />
        <Stats />
        <Media />
        <Facilities />
        <Projects />
        <Visit />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
