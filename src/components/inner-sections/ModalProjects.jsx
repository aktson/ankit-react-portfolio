import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ReactDom from "react-dom";
import Slider from "./Slider";
import ModalOverlay from "./ModalOverlay";

function ModalProjects({ title, stack, summary, url, github, open, onClose, sliderImages, length }) {
	if (!open) return null;

	return ReactDom.createPortal(
		<div className="p-2 md:flex justify-center items-center" id="my-modal">
			<ModalOverlay onClose={onClose} />
			<AnimatePresence>
				<motion.div
					className="max-w-2xl  bg-base-100 rounded-lg grid  grid-rows-auto md:grid-rows-2 mx-auto z-50"
					style={{ maxHeight: "850px" }}
					initial={{ y: -300 }}
					animate={{ y: 0 }}
					exit={{ y: 0 }}
					transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}>
					<Slider sliderImages={sliderImages} length={length} />
					<div className="card-body bg-base-100">
						<h3 className="card-title flex flex-col">
							<span className="flex justify-start text-2xl mb-2">{title}</span>
							<div className=" badge badge-primary badge-outline p-5 ">{stack}</div>
						</h3>
						<p className=" mb-5 line-break overflow-y-auto styledScrollbar">{summary}</p>
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
							<div className="text-xl cursor-pointer " onClick={onClose}>
								<FaTimes />
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>,
		document.getElementById("portal")
	);
}

export default ModalProjects;
