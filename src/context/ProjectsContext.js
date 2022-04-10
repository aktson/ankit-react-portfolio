import { createContext, useState } from "react";
import { baseUrl } from "../settings/settings";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const url = baseUrl + "api/projects?populate=*";
    const response = await fetch(url);
    const results = await response.json();
    setData(results.data);
    setLoading(false);
  }

  return <ProjectsContext.Provider value={{
    data,
    loading,
    fetchData,
  }}>
    {children}
  </ProjectsContext.Provider>;


}
export default ProjectsContext;