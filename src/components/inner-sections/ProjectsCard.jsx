import ModalProjects from "./ModalProjects";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function ProjectsCard({ id, title, img, stack, summary, url, github, stacks }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const mappedStackImg = stacks.map((stackImage) => {
    return <img src={stackImage.attributes.url} className="w-5" />;
  });

  return (
    // <div className="hero shadow-xl h-80 w-80 md:h-96 " style={{ backgroundImage: `url(${img})` }} id="project-tile">
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="text-center text-neutral-content hero-content p-4 ">
    //     <div className="max-w-lg ">
    //       <h3 className=" mb-5  font-bold text-slate-200 ">{title}</h3>
    //       <p className="flex w-full items-center justify-center my-5 h-20 border p-2">{stack}</p>
    //       <button className="btn btn-accent btn-base " onClick={handleClick} key={id}>
    //         View
    //       </button>
    //       {isOpen && (
    //         <ModalProjects open={isOpen} title={title} summary={summary} img={img} url={url} stack={stack} onClose={() => setIsOpen(!isOpen)} />
    //       )}
    //     </div>
    //   </div>

    // <div class="card lg:w-96 w-80 bg-base-100 drop-shadow-2xl ">
    //   <figure>
    //     <img src={img} alt={title} />
    //   </figure>
    //   <div class="card-body">
    //     <h3 class="card-title">{title}</h3>
    //     <p className="h-10">{stack}</p>
    //     <div class="card-actions justify-end">
    //       <button class="btn btn-primary" onClick={handleClick} key={id}>
    //         View
    //       </button>
    //       {isOpen && (
    //         <ModalProjects open={isOpen} title={title} summary={summary} img={img} url={url} stack={stack} onClose={() => setIsOpen(!isOpen)} />
    //       )}
    //     </div>
    //   </div>
    // </div>
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
