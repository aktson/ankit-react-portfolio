import { baseUrl } from "../../settings/settings";
import { useState, useEffect } from "react";
import ProjectsCard from "../inner-sections/ProjectsCard";
import Loader from "../inner-sections/Loader";

function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const url = baseUrl + "api/projects?populate=*";
    const response = await fetch(url);
    const results = await response.json();
    setData(results.data);
    setLoading(false);
  }

  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="bg-base-200 py-16 sm:py-32 px-1" id="projects">
        <div className="container flex flex-col justify-center mx-auto items-center">
          <h2 className="">Projekter</h2>
          <div className="grid  md:grid-cols-2 grid-cols-1 mx-auto  gap-8  max-w-screen-5xl  my-8 p-2 ">
            {data.map((items) => {
              const item = items.attributes;
              const projectId = items.id;
              const image = item.image.data.attributes.url;

              const stackImages = item.stacks.data;

              return (
                <ProjectsCard
                  id={projectId}
                  title={item.title}
                  img={image}
                  stack={item.stack}
                  summary={item.summary}
                  url={item.url}
                  github={item.github}
                  stacks={stackImages}
                  key={projectId}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
