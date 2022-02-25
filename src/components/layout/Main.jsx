import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Social from "./Social";
import Hero from "../sections/Hero";
import Spacer from "./Spacer";

function Main() {
  return (
    <main className="container max-w-full  relative">
      <Hero />
      <About />
      <Spacer />
      <Projects />
      <Spacer />
      <Contact />
      <Social />
    </main>
  );
}

export default Main;
<Spacer />;
