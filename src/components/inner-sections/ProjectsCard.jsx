import ModalProjects from "./ModalProjects";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function ProjectsCard({ id, title, img, stack, summary, url, github, stacks }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const mappedStackImg = stacks.map((stackImage) => {
    return (
      <figure data-tip={stackImage.attributes.name} style={{ width: "1.25rem" }} className="tooltip" key={stackImage.id}>
        <img src={stackImage.attributes.url} alt={stackImage.attributes.name} />
      </figure>
    );
  });

  return (
    <div className="hero shadow-xl max-w-lg sm:h-96 sm:w-96 h-96 w-80 items-end card " style={{ backgroundImage: `url(${img})` }}>
      <div className=" w-full bg-base-100 p-5 relative">
        <h3>{title}</h3>
        <div className="flex gap-4">{mappedStackImg}</div>
        <button className="btn btn-primary absolute rounded-full -top-6 right-2 shadow-xl" onClick={handleClick} key={id}>
          <FaAngleRight />
        </button>
        {isOpen && (
          <ModalProjects
            open={isOpen}
            title={title}
            summary={summary}
            img={img}
            url={url}
            stack={stack}
            github={github}
            onClose={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectsCard;
