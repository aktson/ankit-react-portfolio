import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectsData from "../../data/ProjectsData";
import Modal from "../Modal";

function Projects() {
  const [showModal, setShowModal] = useState("");
  const [modalRender, setModalRender] = useState([]);

  const handleClick = (id, e) => {
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

  const mappedData = ProjectsData.map((item, i) => {
    return (
      <div className="hero shadow-xl h-80 md:h-96" style={{ backgroundImage: `url(${item.img.img})` }} key={item.id}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md  ">
            <h3 className=" mb-5  font-bold text-slate-200 ">{item.title}</h3>
            <p className="mb-8  border p-2 border-slate-200 h-20 flex items-center justify-center">{item.tech}</p>
            <AnimatePresence>
              <motion.button
                className="btn btn-secondary z-50"
                onClick={(e) => handleClick(item.id, e)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}>
                View
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="projects">
      <div className="container flex flex-col justify-center mx-auto items-center">
        <h2 className="">Projects</h2>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 mx-auto  gap-2 justify-items-center max-w-screen-lg   my-8 p-2 ">
          {mappedData}
          {modalRender}
        </div>
      </div>
    </section>
  );
}

export default Projects;
