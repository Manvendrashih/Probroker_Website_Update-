import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchInput.css";
import Cookies from "js-cookie"; // Import js-cookie if not already imported
import gsap from "gsap";

const SearchInput = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const isLoggedIn = Cookies.get("userId");
    const isPremium = Cookies.get("isPremium");
    if (isPremium === "1") {
      navigate("/filter");
    } else if (isLoggedIn && isPremium === "0") {
      alert("Please Buy Premium");
    } else {
      navigate("/signup");
    }
    // if (isLoggedIn) {
    //   navigate("/filter");
    // } else {
    //   navigate("/signup");
    // }
  };

  useEffect(() => {
    const container = document.querySelector(".search-input-container");

    const handleMouseEnter = () => {
      gsap.to(container, { scale: 1.05, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(container, { scale: 1, duration: 0.3 });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove event listeners
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="search-input-container left-[-40px] relative "  onClick={handleClick}>
      <input
        type="text"
        className="search-input bg-[#5f3dc4] h-11 text-center   placeholder:text-white "
        placeholder=" Get Started  >"
        readOnly // Prevents typing, making it clear that it's a clickable field
      />
      {/* <button className="custom-button">{"Search"}</button> */}
    </div>
  );
};

export default SearchInput;
