import { Link, animateScroll as scroll } from "react-scroll";
import { SideBar } from "./mobile-nav/SideBar";

function Header() {
  return (
    <header className=" absolute top-0 left-0 right-0  ">
      <div className="container flex justify-around mx-auto p-2 items-center">
        <div className="brand text-slate-300 mt-2" onClick={() => scroll.scrollToTop()}>
          Ankit Soni
        </div>
        <nav className=" navbar sticky top-0 hidden md:block">
          <ul className=" text-slate-100 ">
            <li>
              <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="nav-li">
                Home
              </Link>
            </li>
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
        <SideBar />
      </div>
    </header>
  );
}

export default Header;
