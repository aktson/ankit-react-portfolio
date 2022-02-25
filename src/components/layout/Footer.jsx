import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import ToTopButton from "./ToTopButton";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" p-6 bg-neutral text-neutral-content relative flex justify-center flex-col text-center gap-4">
      <div className="flex  justify-center gap-4 text-center sm:hidden">
        <FaFacebook size={20} />
        <FaGithub size={20} />
        <FaInstagram size={20} />
      </div>
      <div>
        <p className="text-sm">Copyright &copy; {year}- Designed & Developed by AnkSon</p>
      </div>
      <ToTopButton />
    </footer>
  );
}

export default Footer;
