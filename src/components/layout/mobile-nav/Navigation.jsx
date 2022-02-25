import { motion } from "framer-motion";
import { Link } from "react-scroll";

export function Navigation() {
  const variantsLi = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <>
      <motion.ul variants={variants} className="mob-ul ">
        <motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
          <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="mob-li  nav-li">
            Home
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="mob-li nav-li ">
            About
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
          <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="mob-li nav-li ">
            Projects
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.95 }} variants={variantsLi}>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="mob-li nav-li ">
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </>
  );
}
