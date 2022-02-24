import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header className=" shadow fixed top-0 left-0 right-0 bg-slate-200 z-index-10">
      <div className="container flex justify-around mx-auto p-2 items-center">
        <div className="brand text-slate-600" onClick={() => scroll.scrollToTop()}>
          Ankit Soni
        </div>
        <nav className=" navbar sticky top-0">
          <ul className=" text-base-100 ">
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="nav-li">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="nav-li">
                Projects
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="nav-li">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
