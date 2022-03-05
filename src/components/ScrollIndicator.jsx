import { Link } from "react-scroll";
import { FaHome, FaInfo, FaProjectDiagram, FaRegIdBadge, FaDotCircle } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <div className="fixed right-1 sm:right-5 top-16 ">
      {/* indicator with icons for small to larger screens */}
      <ul class=" bg-base-100 shadow menu rounded-lg hidden sm:flex ">
        <li>
          <Link activeClass="active-indicator" to="hero" spy={true} smooth={true} duration={500}>
            <FaHome className="indicator-icons" />
          </Link>
        </li>
        <li>
          <Link activeClass="active-indicator" to="about" spy={true} smooth={true} duration={500}>
            <FaInfo className="indicator-icons" />
          </Link>
        </li>
        <li>
          <Link activeClass="active-indicator" to="projects" spy={true} smooth={true} duration={500}>
            <FaProjectDiagram className="indicator-icons" />
          </Link>
        </li>
        <li>
          <Link activeClass="active-indicator" to="contact" spy={true} smooth={true} duration={500}>
            <FaRegIdBadge className="indicator-icons" />
          </Link>
        </li>
      </ul>
      {/* Small button indicators for mobile */}
      <ul class=" flex flex-col gap-4 sm:hidden ">
        <li>
          <Link activeClass="active-indicator" to="hero" spy={true} smooth={true} duration={500}>
            <FaDotCircle className="indicator-icons" />
          </Link>
        </li>
        <li>
          <Link activeClass="active-indicator" to="about" spy={true} smooth={true} duration={500}>
            <FaDotCircle className="indicator-icons" />
          </Link>
        </li>
        <li>
          <Link activeClass="active-indicator" to="projects" spy={true} smooth={true} duration={500}>
            <FaDotCircle className="indicator-icons" />
          </Link>
        </li>
        <li>
          <Link activeClass="active-indicator" to="contact" spy={true} smooth={true} duration={500}>
            <FaDotCircle className="indicator-icons" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ScrollIndicator;
