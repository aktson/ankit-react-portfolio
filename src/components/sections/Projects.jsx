import ProjectsCard from "../inner-sections/ProjectsCard";
import Loader from "../inner-sections/Loader";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { useContext } from "react";
import ProjectsContext from "../../context/ProjectsContext";

function Projects() {
	const { data, loading, error } = useContext(ProjectsContext);

	// const mappedData = data.map((items) => {
	// 	const sliderImages = items.attributes.sliderImages.data;
	// 	const length = sliderImages.length;

	// 	return <ProjectsCard data={items} length={length} key={items.id} />;
	// });
	if (error) {
		return <div>{error}</div>;
	}

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

				{/* {loading ? (
					<Loader />
				) : (
					<div className="grid  md:grid-cols-3 grid-cols-1 mx-auto  gap-8  max-w-screen-5xl  my-8 p-2 ">{mappedData}</div>
				)} */}
			</div>
		</section>
	);
}

export default Projects;

// function Projects() {
// 	const [data, setData] = useState([]);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	const mappedData = data.map((items) => {
// 		const item = items.attributes;
// 		const projectId = items.id;
// 		const image = item.image.data.attributes.url;
// 		const stackImages = item.stacks.data;

// 		return (
// 			<ProjectsCard
// 				id={projectId}
// 				title={item.title}
// 				img={image}
// 				stack={item.stack}
// 				summary={item.summary}
// 				url={item.url}
// 				github={item.github}
// 				stacks={stackImages}
// 				key={projectId}
// 			/>
// 		);
// 	});

// 	async function fetchData() {
// 		const url = baseUrl + "api/projects?populate=*";
// 		const response = await fetch(url);
// 		const results = await response.json();
// 		setData(results.data);
// 		setLoading(false);
// 	}

// 	return (
// 		<section className=" py-16 sm:py-32 px-1" id="projects">
// 			<div className="container flex flex-col justify-center mx-auto items-center">
// 				<h2 className="">PROSJEKTER</h2>
// 				<p className="max-w-3xl text-center mb-5">
// 					I løpet av studiene har jeg jobbet med mange skole- og praksis prosjekter som kan finnes på
// 					<a href="https://github.com/aktson?tab=repositories" target="_blank" rel="noreferrer" className="text-primary ml-1">
// 						github
// 					</a>
// 					, her er noen av dem utviklet med forskjellige verktøy og teknologi
// 				</p>
// 				{loading ? (
// 					<Loader />
// 				) : (
// 					<div className="grid  md:grid-cols-2 grid-cols-1 mx-auto  gap-8  max-w-screen-5xl  my-8 p-2 ">{mappedData}</div>
// 				)}
// 			</div>
// 		</section>
// 	);
// }

// export default Projects;
