import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" p-4 footer bg-info text-neutral-content">
      <div>
        <p className="text-sm">Copyright &copy; {year}- Developed by Ankson</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end sm:hidden">
        <FaFacebook size={20} />
        <FaGithub size={20} />
        <FaInstagram size={20} />
      </div>
    </footer>
  );
}

export default Footer;
