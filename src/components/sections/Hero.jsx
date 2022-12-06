import { Link } from "react-scroll";
import Header from "../layout/Header";
import Zoom from "react-reveal/Zoom";

function Hero() {
	return (
		<>
			<section className=" flex flex-col justify-center h-screen " id="hero">
				<Header />
				<div className="container  mx-auto px-1 relative " id="hero-bg">
					<div className=" grid lg:grid-cols-1   lg:justify-items-center text-center ">
						<div className="p-2">
							<h1>
								<Zoom top cascade>
									HELLO I'M
									<span className="text-primary"> ANKIT SONI,</span>
								</Zoom>
								<br />
								<Zoom left cascade>
									Front-end utvikler
								</Zoom>
							</h1>
							<Zoom cascade>
								<Link className="btn btn-primary btn-md sm:btn-wide " to="about" smooth={true} duration={500}>
									Se mitt arbeid
								</Link>
							</Zoom>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
