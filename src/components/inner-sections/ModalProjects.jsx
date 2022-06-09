import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ReactDom from "react-dom";

function Modal({ title, stack, summary, img, url, github, open, onClose }) {
	if (!open) return null;

	return ReactDom.createPortal(
		<div className="p-2 md:flex justify-center items-center" id="my-modal">
			<AnimatePresence>
				<motion.div
					className="container mx-auto flex justify-center items-center"
					initial={{ y: -300 }}
					animate={{ y: 0 }}
					exit={{ y: 0 }}
					transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}>
					<div className="max-w-2xl  bg-base-100 rounded-lg grid  grid-rows-auto md:grid-rows-2 " style={{ maxHeight: "850px" }}>
						<div className=" h-80 md:min-h-full" style={{ background: `url(${img}) no-repeat center`, backgroundSize: "cover" }}></div>
						<div className="card-body bg-base-100">
							<h3 className="card-title flex flex-col text-neutral">
								<span className="flex justify-start text-2xl mb-2">{title}</span>
								<div className=" badge badge-primary badge-outline p-5 ">{stack}</div>
							</h3>
							<p className="text-neutral  mb-5 line-break overflow-y-auto scrollbar">{summary}</p>
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
				</motion.div>
			</AnimatePresence>
		</div>,
		document.getElementById("portal")
	);
}

export default Modal;
