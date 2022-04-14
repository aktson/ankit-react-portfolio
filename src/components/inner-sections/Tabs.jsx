import { useState, useEffect } from "react";
import { baseUrl } from "../../settings/settings";
import Loader from "./Loader";
import Progress from "./Progress";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const url = baseUrl + "api/progresses?populate=*";
    const response = await fetch(url);
    const results = await response.json();

    setData(results.data);
    setLoading(false);
    console.log(results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(index) {
    setToggleState(index);
  }

  const allContent = data.map((stack) => {
    const title = stack.attributes.title;
    const image = stack.attributes.img.data.attributes.url;
    const id = stack.id;

    return (
      <div className="flex flex-col justify-center items-center gap-3 shadow-xl p-2 w-40 tooltip" data-tip={title} key={id}>
        <img src={image} alt={title} className="tech-logos " />
        <p>{title}</p>
      </div>
    );
  });

  return (
    <>
      <div className="tabs-container ">
        <div className={toggleState === 1 ? " tab-header active-tab" : "tab-header  "} onClick={() => handleClick(1)}>
          Alle
        </div>
        <div className={toggleState === 2 ? " tab-header active-tab" : "tab-header  "} onClick={() => handleClick(2)}>
          Front-end
        </div>
        <div className={toggleState === 3 ? " tab-header  active-tab" : "tab-header "} onClick={() => handleClick(3)}>
          Design
        </div>
        <div className={toggleState === 4 ? " tab-header active-tab" : "tab-header "} onClick={() => handleClick(4)}>
          Andre
        </div>
      </div>
      <div className="tabs-content">
        <div className={toggleState === 1 ? " active-tab-content tab-content " : "tab-content"}>{allContent}</div>
        <div className={toggleState === 2 ? " active-tab-content tab-content " : "tab-content"}>Content 2</div>
        <div className={toggleState === 3 ? " active-tab-content tab-content " : "tab-content"}>Contect 3 </div>
        <div className={toggleState === 4 ? " active-tab-content tab-content " : "tab-content"}>Content 4</div>
      </div>
    </>
  );
}

export default Tabs;
