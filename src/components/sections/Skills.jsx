import Progress from "../inner-sections/Progress";
import Tabs from "../inner-sections/Tabs";
import Flip from "react-reveal/Flip";

function Skills() {
	return (
		<section className=" py-16 sm:py-32 px-1 lg:h-screen bg-base-200" id="skills">
			<div className=" max-w-5xl  mx-auto flex flex-col justify-center container">
				<Flip cascade>
					<h2 className="text-center mx-auto">FERDIGHETER</h2>
				</Flip>
				{/* <Progress /> */}
				<Tabs />
			</div>
		</section>
	);
}

export default Skills;
