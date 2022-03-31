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

function Progress() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 justify-center ">
      <div className=" para-progress tooltip" data-tip="javascript">
        <img src={jsLogo} alt="javascript logo" className="tech-logos " />
        <progress className="progress-bar" value="60" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="ReactJs">
        <img src={reactLogo} alt="react logo" className="tech-logos" />
        <progress className="progress-bar" value="50" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="HTML5">
        <img src={htmlLogo} alt="html logo" className="tech-logos" />
        <progress className="progress-bar" value="90" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="CSS3">
        <img src={cssLogo} alt="css3 logo" className="tech-logos" />
        <progress className="progress-bar" value="70" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Sass">
        <img src={sassLogo} alt="sass logo" className="tech-logos " />
        <progress className="progress-bar" value="60" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Taiwindcss">
        <img src={tailwindLogo} alt="tailwind css logo" className="tech-logos " />
        <progress className="progress-bar" value="70" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Bootstrap5">
        <img src={bootstrapLogo} alt="bootstrap logo" className="tech-logos" />
        <progress className="progress-bar" value="60" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Adobe XD ">
        <img src={xdLogo} alt="adobe xd logo" className="tech-logos" />
        <progress className="progress-bar" value="60" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Adobe Illustrator">
        <img src={illustratorLogo} alt="adobe illustrator logo" className="tech-logos" />
        <progress className="progress-bar" value="30" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Adobe Photoshop">
        <img src={psLogo} alt="photoshop logo" className="tech-logos" />
        <progress className="progress-bar" value="20" max="100"></progress>
      </div>

      <div className=" para-progress tooltip" data-tip="Github">
        <img src={githubLogo} alt="github logo" className="tech-logos" />
        <progress className="progress-bar" value="50" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Wordpress">
        <img src={wpLogo} alt="wordpress logo" className="tech-logos" />
        <progress className="progress-bar" value="40" max="100"></progress>
      </div>
    </div>
  );
}

export default Progress;
