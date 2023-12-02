import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
      <button className="scroll-to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    );
  };
  