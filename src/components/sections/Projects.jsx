import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectsData from "../../data/ProjectsData";

function Projects() {
  const [data, setData] = useState(ProjectsData);

  function handleClick(id) {
    const filteredData = data.filter((item) => item.id === id);
    console.log(filteredData);
  }

  const mappedData = data.map((item) => {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.4 }}
        className="hero shadow-xl"
        style={{ backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }}
        key={item.id}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md  ">
            <h3 className=" mb-5  font-bold text-slate-100 ">{item.title}</h3>
            <p className="mb-8  border p-2 border-slate-200 h-20 flex items-center justify-center">{item.tech}</p>
            <button className="btn btn-secondary">View</button>
          </div>
        </div>
      </motion.div>
    );
  });
  return (
    <section id="projects">
      <div className="container flex flex-col justify-center mx-auto items-center">
        <h2 className="">Projects</h2>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 mx-auto  gap-2 justify-items-center max-w-screen-lg h-screen  my-8 p-2 ">
          {mappedData}
        </div>
      </div>
    </section>
  );
}

export default Projects;
