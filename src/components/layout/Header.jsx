import { useContext, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { SideBar } from "./mobile-nav/SideBar";
import logo from "../../assets/logos/logo.svg";
import logoLight from "../../assets/logos/logo-light.svg";
import Themes from "../uicomponents/Themes";
import LanguageSelect from "../uicomponents/LanguageSelect";
import LangContext from "../../context/LangContext";

function Header() {
	const [isChecked, setIsChecked] = useState(true);
	const { isEng } = useContext(LangContext);
	return (
		<header className=" absolute top-0 left-0 right-0 flex items-center justify-center ">
			<div className="container flex justify-between sm:justify-around gap-2 p-4 py-6 items-center">
				<figure className="w-20 sm:w-24 " onClick={() => scroll.scrollToTop()}>
					<img src={isChecked ? logoLight : logo} alt="ankit soni logo" />
				</figure>
				<Themes isChecked={isChecked} setIsChecked={setIsChecked} />
				<LanguageSelect />
				<nav className="hidden lg:flex items-center">
					<ul className="flex items-center gap-2">
						<li>
							<Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Home" : "Heim"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "About Me" : "Om Meg"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Skills" : "Ferdigheter"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Projects" : "Prosjekter"}
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="nav-li">
								{isEng ? "Contact" : "Kontakt"}
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
