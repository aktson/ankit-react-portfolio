import { useState } from "react";
import ProjectsData from "../../data/ProjectsData";

function Projects() {
  const [data, setData] = useState(ProjectsData);

  const mappedData = data.map((item) => {
    return (
      <div className="card shadow-xl card-bordered ">
        <figure>
          {/* <img src={item.img} alt="site image" /> */}
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div className="justify-end card-body ">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.content}</p>
          <div className="card-actions">
            <p className=" px-4 py-2 text-center sw-full h-20 font-semibold border-t ">{item.tech}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="grid  lg:grid-cols-3 md:grid-cols-2 mx-auto container gap-4 justify-items-center max-w-screen-lg my-8 p-2 " id="projects">
      {mappedData}
    </section>
  );
}

export default Projects;
