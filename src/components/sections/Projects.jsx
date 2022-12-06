import ProjectsCard from "../uicomponents/ProjectsCard";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import ProjectsTabs from "../uicomponents/tabs/ProjectsTabs";

function Projects() {
	return (
		<section className=" py-16 sm:py-32 px-1" id="projects">
			<div className="container flex flex-col justify-center mx-auto items-center">
				<Flip top cascade>
					<h2>PROSJEKTER</h2>
				</Flip>
				<Slide top>
					<p className="max-w-3xl text-center mb-8">
						I løpet av studiene har jeg jobbet med mange skole- og praksis prosjekter som kan finnes på
						<a href="https://github.com/aktson?tab=repositories" target="_blank" rel="noreferrer" className="text-primary ml-1">
							github
						</a>
						, her er noen av dem utviklet med ulike verktøy og teknologi
					</p>
				</Slide>
				<ProjectsTabs />
			</div>
		</section>
	);
}

export default Projects;
