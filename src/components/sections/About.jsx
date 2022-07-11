import profileImage from "../../assets/fb.jpg";
import CardsAbout from "../inner-sections/CardsAbout";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

function About() {
	return (
		<section className=" flex flex-col justify-center items-center py-16 sm:py-32 px-1 lg:h-screen " id="about">
			<Bounce right cascade>
				<h2>OM MEG</h2>
			</Bounce>
			<div className="grid lg:grid-cols-1 md:grid-col-2 sm:grid-cols-1 gap-8 p-4">
				<div className="p-2  flex flex-col items-center text-center" id="about-img">
					<Zoom bottom cascade>
						<figure>
							<img src={profileImage} alt="ankit soni" className="h-60 w-60 mb-8 mask mask-hexagon  " />
						</figure>
					</Zoom>
					<div className="max-w-xl">
						<Bounce left cascade>
							<p>
								Bygge state-of-the-art, enkel å bruke, brukervennlige nettsider og applikasjoner er virkelig en lidenskap for meg,
								målet er å bli Full-stack.
							</p>
						</Bounce>
					</div>
				</div>
				<CardsAbout />
			</div>
		</section>
	);
}

export default About;
