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
									HELLO <br />
									I'M <span className="text-primary">ANKIT SONI,</span>
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
