import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDom from "react-dom";

function Modal({ title, stack, summary, img, url, open, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="p-3" id="my-modal">
      <AnimatePresence>
        <motion.div
          className="container mx-auto flex justify-center items-center"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}>
          <div className=" shadow-xl max-w-lg bg-base-100 rounded-lg">
            <figure className=" bg-black ">
              <img src={img} className="w-100 shadow-2xl  " alt={title} />
            </figure>
            <div className="card-body bg-base-100">
              <h3 className="card-title flex flex-col text-neutral">
                <span className="flex justify-center sm:justify-start text-2xl mb-2">{title}</span>
                <div className=" badge p-5 sm:p-4 bg-accent-focus border-0 text-center sm:text-left mx-auto sm:mx-0">{stack}</div>
              </h3>
              <p className="text-neutral text-base text-center md:text-left mb-5">{summary}</p>
              <div className="flex justify-between items-center">
                <a href={url} target="_blank" className="cursor-pointer flex btn btn-sm btn-accent btn-outline gap-2" rel="noreferrer">
                  <FaExternalLinkAlt />
                  visit
                </a>
                <div className="text-lg cursor-pointer text-slate-500" onClick={onClose}>
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
