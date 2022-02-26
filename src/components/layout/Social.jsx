import { FaGithub, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function Social() {
  return (
    <div className="hidden sm:block sm:fixed sm:bottom-20 sm:left-2 mb-5 ">
      <ul className=" w-16 menu  ">
        <li>
          <a>
            <FaGithub className="social-icons " />
          </a>
        </li>
        <li>
          <a>
            <FaFacebookF className="social-icons" />
          </a>
        </li>
        <li>
          <a>
            <FaInstagram className="social-icons" />
          </a>
        </li>
        <li>
          <a>
            <FaEnvelope className="social-icons" />
          </a>
        </li>
      </ul>
      <div className="line-after-icons"></div>
    </div>
  );
}

export default Social;
