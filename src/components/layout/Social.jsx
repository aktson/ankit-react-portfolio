import { FaGithub, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

function Social() {
  return (
    <div className="hidden sm:block sm:fixed sm:bottom-20 sm:left-2 mb-5 ">
      <ul className="menu w-16 rounded-box text-slate-600">
        <li>
          <a>
            <FaGithub className="social-icons " />
          </a>
        </li>
        <li>
          <a>
            <FaFacebook className="social-icons" />
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
