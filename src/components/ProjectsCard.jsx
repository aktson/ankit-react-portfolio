import Modal from "./Modal";
import { useState } from "react";

function ProjectsCard({ id, title, img, stack, summary, url }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="hero shadow-xl h-80 md:h-96 " style={{ backgroundImage: `url(${img})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center text-neutral-content hero-content p-4 ">
        <div className="max-w-lg ">
          <h3 className=" mb-5  font-bold text-slate-200 ">{title}</h3>
          <p className="flex w-full items-center justify-center my-5 h-20 border p-2">{stack}</p>
          <button className="btn btn-accent " onClick={handleClick} key={id}>
            View
          </button>
          {isOpen && <Modal open={isOpen} title={title} summary={summary} img={img} url={url} stack={stack} onClose={() => setIsOpen(!isOpen)} />}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
