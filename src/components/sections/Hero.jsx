import { Link } from "react-scroll";
import Header from "../layout/Header";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

function Hero() {
	return (
		<>
			<section className=" flex flex-col justify-center h-screen " id="hero">
				<Header />
				<div className="container text-base-100  mx-auto px-1 relative " id="hero-bg">
					<div className=" grid lg:grid-cols-1 text-primary lg:justify-items-center text-center ">
						<div className="p-2">
							<h1>
								<Bounce top cascade>
									HELLO I'M
								</Bounce>
								<Bounce right cascade>
									<span className="text-primary"> ANKIT SONI,</span>
								</Bounce>
								<br />
								<Bounce left cascade>
									Front-end utvikler
								</Bounce>
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
