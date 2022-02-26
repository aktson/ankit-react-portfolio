import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectsData from "../../data/ProjectsData";
import Modal from "../Modal";

function Projects() {
  const [showModal, setShowModal] = useState("");
  const [modalRender, setModalRender] = useState([]);

  const handleClick = (id, e) => {
    e.stopPropagation();
    setShowModal("visible");
    const filteredData = ProjectsData.filter((item) => item.id === id);

    const modalToRender = filteredData.map((item, i) => {
      return (
        <Modal
          showModal={showModal}
          id={item.id}
          title={item.title}
          description={item.description}
          img={item.img.img}
          link={item.link}
          tech={item.tech}
          key={item.id}
        />
      );
    });
    setModalRender(modalToRender);
  };

  const mappedData = ProjectsData.map((item) => {
    return (
      <div className="hero shadow-xl" style={{ backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }} key={item.id}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md  ">
            <h3 className=" mb-5  font-bold text-slate-200 ">{item.title}</h3>
            <p className="mb-8  border p-2 border-slate-200 h-20 flex items-center justify-center">{item.tech}</p>
            <button className="btn btn-accent z-50" onClick={(e) => handleClick(item.id, e)} data-id={item.id}>
              View
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="projects">
      <div className="container flex flex-col justify-center mx-auto items-center">
        <h2 className="">Projects</h2>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 mx-auto  gap-2 justify-items-center max-w-screen-lg h-screen  my-8 p-2 ">
          {mappedData}
          {modalRender}
        </div>
      </div>
    </section>
  );
}

export default Projects;
