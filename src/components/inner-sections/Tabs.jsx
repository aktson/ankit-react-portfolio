import { useState, useEffect } from "react";
import { baseUrl } from "../../settings/settings";
import Loader from "./Loader";

function Tabs() {
  const [toggleState, setToggleState] = useState("all");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const url = baseUrl + "api/progresses?populate=*";
    const response = await fetch(url);
    const results = await response.json();

    setData(results.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(index) {
    setToggleState(index);

    const filterData = data.filter((result) => {
      return result.attributes.categories.data[0].id === index;
    });

    const createHtml = filterData.map((data) => {
      const title = data.attributes.title;
      const image = data.attributes.img.data.attributes.url;
      const id = data.id;
      return (
        <div className="skills" data-tip={title} key={id}>
          <img src={image} alt={title} className="tech-logos " />
          <p>{title}</p>
        </div>
      );
    });

    setFilteredData(createHtml);
  }

  const allContent = data.map((stack) => {
    const title = stack.attributes.title;
    const image = stack.attributes.img.data.attributes.url;
    const id = stack.id;

    return (
      <div className="skills" data-tip={title} key={id}>
        <img src={image} alt={title} className="tech-logos " />
        <p>{title}</p>
      </div>
    );
  });
  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="tabs-container ">
          <div className={toggleState === "all" ? " tab-header active-tab" : "tab-header  "} onClick={() => handleClick("all")}>
            Alle
          </div>
          <div className={toggleState === 1 ? " tab-header active-tab" : "tab-header"} onClick={() => handleClick(1)}>
            Front-end
          </div>
          <div className={toggleState === 2 ? " tab-header  active-tab" : "tab-header "} onClick={() => handleClick(2)}>
            Design
          </div>
          <div className={toggleState === 3 ? " tab-header active-tab" : "tab-header "} onClick={() => handleClick(3)}>
            Andre
          </div>
        </div>
        <div className="tabs-content">
          <div className={toggleState === "all" ? " active-tab-content tab-content " : "tab-content"}>{allContent}</div>
          <div className={toggleState === 1 ? " active-tab-content tab-content " : "tab-content"}>{filteredData}</div>
          <div className={toggleState === 2 ? " active-tab-content tab-content " : "tab-content"}>{filteredData} </div>
          <div className={toggleState === 3 ? " active-tab-content tab-content " : "tab-content"}>{filteredData}</div>
        </div>
      </>
    );
  }
}
export default Tabs;
