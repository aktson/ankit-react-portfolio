import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../layout/Header";
import HeroImage from "../../assets/fb-2.jpg";
import CardsAbout from "../inner-sections/CardsAbout";

function Hero() {
  return (
    <>
      <section className=" flex flex-col justify-center  bg-base-100 lg:h-screen  " id="hero">
        <Header />
        <AnimatePresence>
          <motion.div
            className="hero min-h-screen text-base-100 py-16 sm:py-32 px-1"
            id="hero-bg"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 1 }}>
            <div className="hero-content  grid lg:grid-cols-2" id="hero">
              <div className="max-w-md">
                <h1>
                  Hallo, <br /> Jeg er <span className="text-accent">Ankit Soni</span> Front-end utvikler.
                </h1>

                <Link className="btn btn-accent btn-md sm:btn-wide " to="about" smooth={true} duration={500}>
                  Se mitt arbeid
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <CardsAbout />
      </section>
    </>
  );
}

export default Hero;

// hero without image
{
  /* <div className="hero min-h-screen ">
  <div className="text-center hero-content">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">
        Hello, I'm <span className="text-primary">Ankit Soni</span>
      </h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id
        nisi.
      </p>

      <Link className="btn btn-primary btn-outline btn-wide " to="about" smooth={true} duration={500}>
        View my Work
      </Link>
    </div>
  </div>
</div>; */
}
// hero with background image
{
  /*  */
}
