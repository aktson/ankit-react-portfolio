import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ReactDom from "react-dom";
import Slider from "./Slider";
import ModalOverlay from "./ModalOverlay";

function ModalProjects({ title, stack, summary, url, github, open, onClose, sliderImages, length }) {
	if (!open) return null;

	return ReactDom.createPortal(
		<div className="p-2 md:flex justify-center items-center" id="my-modal">
			<ModalOverlay>
				<div className="max-w-2xl  bg-base-100 rounded-lg grid  grid-rows-auto md:grid-rows-2 z-50 " style={{ maxHeight: "850px" }}>
					<Slider sliderImages={sliderImages} length={length} />
					<div className="card-body bg-base-100">
						<h3 className="card-title flex flex-col text-neutral">
							<span className="flex justify-start text-2xl mb-2">{title}</span>
							<div className=" badge badge-primary badge-outline p-5 ">{stack}</div>
						</h3>
						<p className="text-neutral  mb-5 line-break overflow-y-auto styledScrollbar">{summary}</p>
						<div className="flex justify-between items-center">
							<div className="flex gap-2">
								<a
									href={url}
									target="_blank"
									className="cursor-pointer flex btn btn-sm btn-primary  rounded-2xl gap-2"
									rel="noreferrer">
									<FaExternalLinkAlt />
									visit
								</a>
								<a
									href={github}
									target="_blank"
									className="cursor-pointer flex btn btn-sm rounded-2xl btn-primary  gap-2"
									rel="noreferrer">
									<FaGithub />
									Github
								</a>
							</div>
							<div className="text-xl cursor-pointer text-slate-500" onClick={onClose}>
								<FaTimes />
							</div>
						</div>
					</div>
				</div>
			</ModalOverlay>
		</div>,
		document.getElementById("portal")
	);
}

export default ModalProjects;
