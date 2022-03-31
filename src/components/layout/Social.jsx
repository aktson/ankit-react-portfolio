import { FaGithub, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function Social() {
  return (
    <div className="hidden sm:block sm:fixed sm:top-20 sm:left-2 mb-5 ">
      <ul className=" w-16 flex flex-col justify-center items-center gap-3 cursor-pointer">
        <li>
          <a href="https://github.com/aktson?tab=repositories" target="_blank">
            <FaGithub className="social-icons " />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/ankitsoni86" target="_blank">
            <FaFacebookF className="social-icons" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ankt8soni" target="_blank">
            <FaInstagram className="social-icons" />
          </a>
        </li>
        <li>
          <a href="mailto:akt_soni@yahoo.co.in">
            <FaEnvelope className="social-icons" />
          </a>
        </li>
      </ul>
      <div className="line-after-icons"></div>
    </div>
  );
}

export default Social;
