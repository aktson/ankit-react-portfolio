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
        <div className="flex justify-between">
          <img src={jsLogo} alt="javascript logo" className="tech-logos " />
          <p>60%</p>
        </div>
        <progress className="progress-bar" value="60" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="ReactJs">
        <div className="flex justify-between">
          <img src={reactLogo} alt="react logo" className="tech-logos" />
          <p>50%</p>
        </div>
        <progress className="progress-bar" value="50" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="HTML5">
        <div className="flex justify-between">
          <img src={htmlLogo} alt="html logo" className="tech-logos" />
          <p>80%</p>
        </div>
        <progress className="progress-bar" value="80" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="CSS3">
        <div className="flex justify-between">
          <img src={cssLogo} alt="css3 logo" className="tech-logos" />
          <p>70%</p>
        </div>
        <progress className="progress-bar" value="70" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Sass">
        <div className="flex justify-between">
          <img src={sassLogo} alt="sass logo" className="tech-logos " />
          <p>60%</p>
        </div>
        <progress className="progress-bar" value="60" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Taiwindcss">
        <div className="flex justify-between">
          <img src={tailwindLogo} alt="tailwind css logo" className="tech-logos " />
          <p>70%</p>
        </div>
        <progress className="progress-bar" value="70" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Bootstrap5">
        <div className="flex justify-between">
          <img src={bootstrapLogo} alt="bootstrap logo" className="tech-logos" />
          <p>60%</p>
        </div>
        <progress className="progress-bar" value="60" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Adobe XD ">
        <div className="flex justify-between">
          <img src={xdLogo} alt="adobe xd logo" className="tech-logos" />
          <p>70%</p>
        </div>
        <progress className="progress-bar" value="70" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Adobe Illustrator">
        <div className="flex justify-between">
          <img src={illustratorLogo} alt="adobe illustrator logo" className="tech-logos" />
          <p>20%</p>
        </div>
        <progress className="progress-bar" value="20" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Adobe Photoshop">
        <div className="flex justify-between">
          <img src={psLogo} alt="photoshop logo" className="tech-logos" />
          <p>20%</p>
        </div>
        <progress className="progress-bar" value="20" max="100"></progress>
      </div>

      <div className=" para-progress tooltip" data-tip="Github">
        <div className="flex justify-between">
          <img src={githubLogo} alt="github logo" className="tech-logos" />
          <p>50%</p>
        </div>
        <progress className="progress-bar" value="50" max="100"></progress>
      </div>
      <div className=" para-progress tooltip" data-tip="Wordpress">
        <div className="flex justify-between">
          <img src={wpLogo} alt="wordpress logo" className="tech-logos" />
          <p>40%</p>
        </div>
        <progress className="progress-bar" value="40" max="100"></progress>
      </div>
    </div>
  );
}

export default Progress;
