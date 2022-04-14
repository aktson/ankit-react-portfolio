import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Social from "./Social";
import Hero from "../sections/Hero";
import Spacer from "./Spacer";
import ScrollIndicator from "../inner-sections/ScrollIndicator";
import Skills from "../sections/Skills";

function Main() {
  return (
    <main className="container max-w-full relative">
      <ScrollIndicator />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Social />
    </main>
  );
}

export default Main;
