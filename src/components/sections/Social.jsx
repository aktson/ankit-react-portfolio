import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div className="hidden sm:block sm:fixed sm:bottom-20 sm:right-2 mb-5 shadow-lg ">
      <ul className="menu w-16 py-2 rounded-box bg-primary text-yellow-50">
        <li>
          <a>
            <FaGithub className="social-icons" />
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
      </ul>
    </div>
  );
}

export default Social;
