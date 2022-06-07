import { useState, useEffect } from "react";
import { baseUrl } from "../../settings/settings";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";
import useFetch from "../../customHook/useFetch";
import { Fragment } from "react/cjs/react.production.min";

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
				<AnimatePresence exitBeforeEnter key={id}>
					<motion.div
						className="skills"
						data-tip={title}
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 30 }}
						exit={{ opacity: 0, y: -30 }}
						transition={{ duration: 0.2 }}>
						<img src={image} alt={title} className="tech-logos " />
						<p>{title}</p>
					</motion.div>
				</AnimatePresence>
			);
		});

		setFilteredData(createHtml);
	}

	const allContent = data.map((stack) => {
		const title = stack.attributes.title;
		const image = stack.attributes.img.data.attributes.url;
		const id = stack.id;

		return (
			<AnimatePresence exitBeforeEnter key={id}>
				<motion.div
					className="skills"
					data-tip={title}
					animate={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 20 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.15 }}>
					<img src={image} alt={title} className="tech-logos " />
					<p>{title}</p>
				</motion.div>
			</AnimatePresence>
		);
	});

	return (
		<>
			<div className="tabs-container ">
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
