import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Social from "./Social";
import Hero from "../sections/Hero";
import Spacer from "./Spacer";
import ScrollIndicator from "../ScrollIndicator";
import Proejects2 from "../sections/Proejects2";

function Main() {
  return (
    <main className="container max-w-full relative">
      <ScrollIndicator />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Proejects2 />
      <Contact />
      <Social />
    </main>
  );
}

export default Main;
