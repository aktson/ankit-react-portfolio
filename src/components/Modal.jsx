import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ id, title, tech, description, img, link, showModal }) {
  const [closeModal, setClosModal] = useState("");
  function handleClick() {
    setClosModal("invisible");
  }
  return (
    <div className={`${showModal} p-3 ${closeModal}`} key={id} id="my-modal">
      <AnimatePresence>
        <motion.div
          className="container mx-auto flex justify-center items-center"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}>
          <div className=" bg-base-100 shadow-xl max-w-lg">
            <figure className="">
              <img src={img} className="w-100" alt={title} />
            </figure>
            <div className="card-body">
              <h3 className="card-title flex flex-col gap-1">
                <span className="flex justify-between">{title}</span>
                <div className="badge badge-accent p-3 ">{tech}</div>
              </h3>
              <p className="text-base mb-6">{description}</p>
              <div className="flex justify-between items-center">
                <a href={link} target="_blank" className="cursor-pointer flex btn btn-xs btn-accent btn-outline gap-2" rel="noreferrer">
                  <FaExternalLinkAlt />
                  visit
                </a>
                <div className="text-lg cursor-pointer text-slate-400" onClick={handleClick}>
                  <FaTimes />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Modal;
