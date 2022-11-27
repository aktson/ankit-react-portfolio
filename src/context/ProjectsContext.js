import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../settings/settings";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  async function fetchData() {
    const url = baseUrl + "api/projects?populate=*";

    const response = await fetch(url);

    try {

      const results = await response.json();

      if (response.ok) {
        setData(results.data);
      }


    } catch (error) {
      console.log(error)
      setError(error)

    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchData();
  }, [])

  return <ProjectsContext.Provider value={{
    data, setData, error,
    loading,
    fetchData,
  }}>
    {children}
  </ProjectsContext.Provider>;


}
export default ProjectsContext;