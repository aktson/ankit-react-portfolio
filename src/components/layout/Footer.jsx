import Facebook from "./socialIcons/Facebook";
import Github from "./socialIcons/Github";
import Instagram from "./socialIcons/Instagram";
import ToTopButton from "./ToTopButton";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="footer" id="footer">
			<div className="flex  justify-center gap-4 text-center sm:hidden">
				<Facebook />
				<Github />
				<Instagram />
			</div>
			<div>
				<p className="text-lg text-white">Copyright &copy; 2022 - Designed & Developed by AnkSon</p>
			</div>
			<ToTopButton />
		</footer>
	);
}

export default Footer;
