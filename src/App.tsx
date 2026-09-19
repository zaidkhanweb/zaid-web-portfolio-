import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <WhyWorkWithMe />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
