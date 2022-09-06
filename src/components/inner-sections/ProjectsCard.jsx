import ModalProjects from "./ModalProjects";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

function ProjectsCard({ id, title, img, stack, summary, url, github, stacks, sliderImages, length }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);

		let viewportWidth = window.innerWidth;

		if (viewportWidth >= "769") {
			document.body.style.overflow = "hidden";
		}
	};

	const closeModal = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	const mappedStackImg = stacks.map((stackImage) => {
		return (
			<figure data-tip={stackImage.attributes.name} style={{ width: "1.25rem" }} className="tooltip" key={stackImage.id}>
				<img src={stackImage.attributes.url} alt={stackImage.attributes.name} />
			</figure>
		);
	});

	return (
		<Zoom>
			<div className="shadow-xl shadow-slate-400 ">
				<div
					className=" max-w-lg sm:h-80 sm:w-full h-80 w-full"
					style={{
						background: `url(${img}) no-repeat center `,
						backgroundSize: "cover",
						clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 82%)",
					}}></div>
				<div className=" w-full p-8 relative">
					<h3>{title}</h3>
					<div className="flex gap-4 mt-5">{mappedStackImg}</div>
					<button className="btn btn-primary absolute rounded-full -top-6 right-2 shadow-xl" onClick={openModal} key={id}>
						<FaAngleRight />
					</button>
					{isOpen && (
						<ModalProjects
							open={isOpen}
							id={id}
							title={title}
							summary={summary}
							img={img}
							url={url}
							stack={stack}
							github={github}
							sliderImages={sliderImages}
							length={length}
							onClose={closeModal}
						/>
					)}
				</div>
			</div>
		</Zoom>
	);
}

export default ProjectsCard;
