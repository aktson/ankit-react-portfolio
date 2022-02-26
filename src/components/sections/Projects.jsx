import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProjectsData from "../../data/ProjectsData";

function Projects() {
  const [data, setData] = useState(ProjectsData);

  const handleClick = (id, e) => {
    const filteredData = data.filter((item) => item.id === id);

    const newHtml = filteredData.map((html) => {
      return (
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{html.title}</h2>
            <p>{html.description}</p>
            <div class="justify-end card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const mappedData = data.map((item) => {
    return (
      <div className="hero shadow-xl" style={{ backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }} key={item.id}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md  ">
            <h3 className=" mb-5  font-bold text-slate-200 ">{item.title}</h3>
            <p className="mb-8  border p-2 border-slate-200 h-20 flex items-center justify-center">{item.tech}</p>
            <button className="btn btn-accent" onClick={(e) => handleClick(item.id, e)} data-id={item.id}>
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
        </div>
      </div>
    </section>
  );
}

export default Projects;
{
  /* <motion.div
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.4 }}
className="hero shadow-xl"
style={{ backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }}
key={item.id}> */
}
