import { useState } from "react";
import { baseUrl } from "../../settings/settings";
import Loader from "./Loader";
import useFetch from "../../customHook/useFetch";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import TabsInner from "./TabsInner";

function Tabs() {
	const [toggleState, setToggleState] = useState("all");

	const [filteredData, setFilteredData] = useState([]);

	const url = baseUrl + "api/categories?populate=*";
	const { data, loading, error } = useFetch(url);

	function handleAllClick(index) {
		setToggleState(index);
		setFilteredData(data);
	}

	function handleFrontendClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "frontend";
		});

		setFilteredData(filterData);
	}
	function handleDesignClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "design";
		});

		setFilteredData(filterData);
	}
	function handleOtherClick(index) {
		setToggleState(index);

		const filterData = data.filter((result) => {
			return result.attributes.category === "other";
		});

		setFilteredData(filterData);
	}

	if (error) {
		return <div className="text-center bg-red-600 text-base-200 p-2 w-max mx-auto">{error}</div>;
	}

	return (
		<>
			<div className="tabs-container ">
				<Fade>
					<div className={toggleState === "all" ? "tab-header active-tab" : "tab-header  "} onClick={() => handleAllClick("all")}>
						Alle
					</div>
					<div className={toggleState === 1 ? " tab-header active-tab" : "tab-header"} onClick={() => handleFrontendClick(1)}>
						Front-end
					</div>
					<div className={toggleState === 2 ? " tab-header  active-tab" : "tab-header "} onClick={() => handleDesignClick(2)}>
						Design
					</div>
					<div className={toggleState === 3 ? " tab-header active-tab" : "tab-header "} onClick={() => handleOtherClick(3)}>
						Andre
					</div>
				</Fade>
			</div>

			{loading ? (
				<Loader />
			) : (
				<div className="tabs-content">
					<div className={toggleState === "all" ? " active-tab-content tab-content" : "tab-content"}>
						<TabsInner data={data} />
					</div>
					<div className={toggleState === 1 ? " active-tab-content tab-content " : "tab-content"}>
						<TabsInner data={filteredData} />
					</div>
					<div className={toggleState === 2 ? " active-tab-content tab-content " : "tab-content"}>
						<TabsInner data={filteredData} />
					</div>
					<div className={toggleState === 3 ? " active-tab-content tab-content " : "tab-content"}>
						<TabsInner data={filteredData} />
					</div>
				</div>
			)}
		</>
	);
}
export default Tabs;
