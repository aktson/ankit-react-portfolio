import React from "react";
import jsLogo from "../../assets/logos/javascript.svg";
import reactLogo from "../../assets/logos/react.svg";
import psLogo from "../../assets/logos/photoshop.svg";
import tailwindLogo from "../../assets/logos/tailwindcss.svg";
import htmlLogo from "../../assets/logos/html.svg";
import bootstrapLogo from "../../assets/logos/bootstrap.svg";
import xdLogo from "../../assets/logos/xd.svg";
import illustratorLogo from "../../assets/logos/illustrator.svg";
import cssLogo from "../../assets/logos/css.svg";
import sassLogo from "../../assets/logos/sass.svg";
import wpLogo from "../../assets/logos/wordpress.svg";
import githubLogo from "../../assets/logos/github.svg";

function Techs() {
  return (
    <div className="flex flex-col justify-center items-center my-16 p-4 gap-8">
      <h3>Ferdigheter</h3>
      <div className="flex gap-8 items-center justify-center">
        <img src={htmlLogo} alt="" className="tech-logos" />
        <img src={cssLogo} alt="" className="tech-logos" />
        <img src={sassLogo} alt="" className="tech-logos" />
        <img src={bootstrapLogo} alt="" className="tech-logos" />
        <img src={tailwindLogo} alt="" className="tech-logos" />
        <img src={psLogo} alt="" className="tech-logos" />
        <img src={xdLogo} alt="" className="tech-logos" />
        <img src={illustratorLogo} alt="" className="tech-logos" />
        <img src={jsLogo} alt="" className="tech-logos" />
        <img src={reactLogo} alt="" className="tech-logos" />
        <img src={wpLogo} alt="" className="tech-logos" />
        <img src={githubLogo} alt="" className="tech-logos" />
      </div>
    </div>
  );
}

export default Techs;
