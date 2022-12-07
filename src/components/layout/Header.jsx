import { useContext, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { SideBar } from "./mobile-nav/SideBar";
import logo from "../../assets/logos/logo.svg";
import logoLight from "../../assets/logos/logo-light.svg";
import Themes from "../uicomponents/Themes";
import LanguageSelect from "../uicomponents/LanguageSelect";
import LangContext from "../../context/LangContext";

function Header() {
	const { isEng, isChecked } = useContext(LangContext);
	return (
		<header className=" absolute lg:fixed top-0 left-0 right-0 flex items-center justify-center z-40 py-4  ">
			<div className="container flex justify-around md:justify-between gap-2 p-4 py-4 items-center flex-col sm:flex-row sm:bg-warning sm:shadow-xl rounded-full ">
				{/* logo */}
				<figure className=" xl:w-96" onClick={() => scroll.scrollToTop()}>
					<img src={isChecked ? logoLight : logo} alt="ankit soni logo" className="w-24 " />
				</figure>
				{/* navigation for large screens */}
				<nav className="hidden lg:flex items-center w-full justify-center">
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
				{/* change language and theme */}
				<div className="hidden sm:flex justify-between w-full items-center sm:w-auto gap-4 xl:w-96">
					<Themes />
					<LanguageSelect />
				</div>
				{/* nvagiation for small to medium screen */}
				<SideBar />
			</div>
		</header>
	);
}

export default Header;
