import { baseUrl } from "../../settings/settings";
import { useState, useEffect } from "react";
import ProjectsCard from "../ProjectsCard";
import Loader from "../Loader";

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
      <section id="projects" className="bg-base-200 py-16 sm:py-32 px-1">
        <div className="container flex flex-col justify-center mx-auto items-center">
          <h2 className="">Projects</h2>
          <div className="grid  lg:grid-cols-3 md:grid-cols-2 mx-auto  gap-2 justify-items-center max-w-screen-lg  my-8 p-2 ">
            {data.map((items) => {
              const item = items.attributes;
              const projectId = items.id;
              const image = item.image.data.attributes.url;
              console.log(item);
              return (
                <ProjectsCard
                  id={projectId}
                  title={item.title}
                  img={image}
                  stack={item.stack}
                  summary={item.summary}
                  url={item.url}
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
