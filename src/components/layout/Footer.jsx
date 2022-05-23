import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import ToTopButton from "./ToTopButton";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="footer" id="footer">
			<div className="flex  justify-center gap-4 text-center sm:hidden">
				<a href="https://www.facebook.com/ankitsoni86" target="_blank">
					<FaFacebookF size={20} />
				</a>
				<a href="https://github.com/aktson?tab=repositories" target="_blank">
					<FaGithub size={20} />
				</a>
				<a href="https://www.instagram.com/ankt8soni" target="_blank">
					<FaInstagram size={20} />
				</a>
			</div>
			<div>
				<p className="text-sm">Copyright &copy; {year}- Designed & Developed by AnkSon</p>
			</div>
			<ToTopButton />
		</footer>
	);
}

export default Footer;
