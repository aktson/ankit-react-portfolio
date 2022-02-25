import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.section
          className=" flex flex-col justify-center items-center gap-y-16 bg-base-200 lg:h-screen "
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          id="hero">
          <div className="hero min-h-screen ">
            <div className="text-center hero-content">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Hello, I'm <span className="text-primary">Ankit Soni</span>
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                  et a id nisi.
                </p>
                <Link className="btn btn-outline btn-primary btn-wide" to="about" smooth={true} duration={500}>
                  View my Work
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
}

export default Hero;
