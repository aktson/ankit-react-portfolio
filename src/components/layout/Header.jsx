import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { SideBar } from "./mobile-nav/SideBar";
import logo from "../../assets/logos/logo.svg";
import logoLight from "../../assets/logos/logo-light.svg";
import Themes from "../uicomponents/Themes";

function Header() {
	const [isChecked, setIsChecked] = useState(true);
	return (
		<header className=" absolute top-0 left-0 right-0  ">
			<div className="container flex justify-around mx-auto p-2 items-center">
				<div className="logo flex gap-4 " onClick={() => scroll.scrollToTop()}>
					<img src={isChecked ? logoLight : logo} alt="ankit soni logo" />
				</div>
				<Themes isChecked={isChecked} setIsChecked={setIsChecked} />
				<nav className=" navbar  top-0 hidden md:block">
					<ul>
						<li>
							<Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="nav-li">
								Heim
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="nav-li">
								Om meg
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} className="nav-li">
								Ferdigheter
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="nav-li">
								Prosjekter
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="nav-li">
								Kontakt
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
