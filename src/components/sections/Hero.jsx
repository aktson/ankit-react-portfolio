import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../layout/Header";

function Hero() {
	return (
		<>
			<section className=" flex flex-col justify-center h-screen " id="hero">
				<Header />

				<AnimatePresence>
					<motion.div
						className="container text-base-100  mx-auto px-1 relative "
						id="hero-bg"
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 50 }}
						exit={{ opacity: 0, y: 0 }}
						transition={{ duration: 1 }}>
						<div className=" grid lg:grid-cols-1 text-primary lg:justify-items-center text-center ">
							<div className="p-2">
								<h1>
									HELLO <br /> <span className="text-primary">I'M ANKIT SONI,</span>
									<br /> Front-end utvikler
								</h1>
								<Link className="btn btn-primary btn-md sm:btn-wide " to="about" smooth={true} duration={500}>
									Se mitt arbeid
								</Link>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
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
