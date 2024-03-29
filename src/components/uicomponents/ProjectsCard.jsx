import ModalProjects from "./ModalProjects";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Pulse from "react-reveal/Pulse";

function ProjectsCard({ data, length }) {
	const [isOpen, setIsOpen] = useState(false);

	let viewportWidth = window.innerWidth;

	function openModal() {
		setIsOpen(true);

		if (viewportWidth >= "769") {
			document.body.style.overflow = "hidden";
		}
	}

	function closeModal() {
		setIsOpen(false);
		if (viewportWidth >= "769") {
			document.body.style.overflow = "auto";
		}
	}

	const id = data.id;
	const cardImage = data.attributes.image.data.attributes.url;
	const results = data.attributes;

	const mappedStackImg = results.stacks.data.map((stackImage) => {
		return (
			<figure
				data-tip={stackImage.attributes.name}
				style={{ width: "1.25rem" }}
				className="tooltip tooltip-neutral text-base-100"
				key={stackImage.id}>
				<img src={stackImage.attributes.url} alt={stackImage.attributes.name} />
			</figure>
		);
	});

	return (
		<Pulse>
			<div className="shadow-lg bg-warning w-96 rounded-lg ">
				<div
					className=" max-w-lg sm:h-80 sm:w-full h-80 w-full rounded-t-lg"
					style={{
						background: `url(${cardImage}) no-repeat center `,
						backgroundSize: "cover",
						clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 82%)",
					}}></div>
				<div className=" w-full p-8 relative">
					<h3>{results.title}</h3>
					<div className="flex gap-4 mt-5">{mappedStackImg}</div>
					<button className="btn btn-primary absolute rounded-full -top-6 right-2 shadow-xl " onClick={openModal} key={id}>
						<FaAngleRight />
					</button>
					{isOpen && <ModalProjects open={isOpen} data={data} length={length} onClose={closeModal} />}
				</div>
			</div>
		</Pulse>
	);
}

export default ProjectsCard;
