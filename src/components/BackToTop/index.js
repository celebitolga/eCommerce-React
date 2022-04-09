import { useEffect, useState } from "react";

import "./index.scss";

import UpArrowSVG from "../Svg/upArrow";

function BackToTop() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const windowScrollEvent = () => {
    if (document.documentElement.scrollTop > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (document.documentElement.scrollTop > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    
    window.addEventListener("scroll", windowScrollEvent, false);

    return () => {
      window.removeEventListener("scroll", windowScrollEvent, false);
    };
  }, []);
  return (
    <button
      className={`back-to-top ${isActive ? "-active" : ""}`}
      onClick={handleClick}
    >
      <UpArrowSVG />
    </button>
  );
}

export default BackToTop;
