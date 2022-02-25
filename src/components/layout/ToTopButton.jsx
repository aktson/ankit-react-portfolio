import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function ToTopButton() {
  return (
    <div id="to-top-btn" onClick={() => scroll.scrollToTop()}>
      <FaArrowUp />
    </div>
  );
}

export default ToTopButton;
