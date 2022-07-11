import { useState } from "react";
import { baseUrl } from "../../settings/settings";
import Loader from "./Loader";
import useFetch from "../../customHook/useFetch";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

function Tabs() {
	const [toggleState, setToggleState] = useState("all");

	const [filteredData, setFilteredData] = useState([]);

	const url = baseUrl + "api/progresses?populate=*";
	const { data, loading } = useFetch(url);

	function handleClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.categories.data[0].id === index;
		});

		const createHtml = filterData.map((data) => {
			const title = data.attributes.title;
			const image = data.attributes.img.data.attributes.url;
			const id = data.id;
			return (
				<Flip right cascade key={id}>
					<div className="skills" data-tip={title}>
						<img src={image} alt={title} className="tech-logos " />
						<p>{title}</p>
					</div>
				</Flip>
			);
		});

		setFilteredData(createHtml);
	}

	const allContent = data.map((stack) => {
		const title = stack.attributes.title;
		const image = stack.attributes.img.data.attributes.url;
		const id = stack.id;

		return (
			<Zoom top key={id}>
				<div className="skills" data-tip={title}>
					<img src={image} alt={title} className="tech-logos " />
					<p>{title}</p>
				</div>
			</Zoom>
		);
	});

	return (
		<>
			<div className="tabs-container ">
				<Fade>
					<div className={toggleState === "all" ? "tab-header active-tab" : "tab-header  "} onClick={() => handleClick("all")}>
						Alle
					</div>
					<div className={toggleState === 1 ? " tab-header active-tab" : "tab-header"} onClick={() => handleClick(1)}>
						Front-end
					</div>
					<div className={toggleState === 2 ? " tab-header  active-tab" : "tab-header "} onClick={() => handleClick(2)}>
						Design
					</div>
					<div className={toggleState === 3 ? " tab-header active-tab" : "tab-header "} onClick={() => handleClick(3)}>
						Andre
					</div>
				</Fade>
			</div>
			{loading ? (
				<Loader />
			) : (
				<div className="tabs-content">
					<div className={toggleState === "all" ? " active-tab-content tab-content" : "tab-content"}>{allContent}</div>
					<div className={toggleState === 1 ? " active-tab-content tab-content " : "tab-content"}>{filteredData}</div>
					<div className={toggleState === 2 ? " active-tab-content tab-content " : "tab-content"}>{filteredData} </div>
					<div className={toggleState === 3 ? " active-tab-content tab-content " : "tab-content"}>{filteredData}</div>
				</div>
			)}
		</>
	);
}
export default Tabs;
