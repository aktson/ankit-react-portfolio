import profileImage from "../../assets/fb.jpg";
import CardsAbout from "../inner-sections/CardsAbout";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

function About() {
	return (
		<section className=" flex flex-col justify-center items-center py-16 sm:py-32 px-1 lg:h-screen " id="about">
			<Flip right cascade>
				<h2>OM MEG</h2>
			</Flip>
			<div className="grid lg:grid-cols-1 md:grid-col-2 sm:grid-cols-1 gap-8 p-4">
				<div className="p-2  flex flex-col items-center text-center" id="about-img">
					<Fade>
						<figure>
							<img src={profileImage} alt="ankit soni" className="h-60 w-60 mb-8 mask mask-hexagon  " />
						</figure>
					</Fade>
					<div className="max-w-xl">
						<Flip left cascade>
							<p>
								Bygge state-of-the-art, enkel å bruke, brukervennlige nettsider og applikasjoner er virkelig en lidenskap for meg,
								målet er å bli Full-stack.
							</p>
						</Flip>
					</div>
				</div>

				<CardsAbout />
			</div>
		</section>
	);
}

export default About;
