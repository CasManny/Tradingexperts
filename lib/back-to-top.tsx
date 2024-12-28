"use client";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "5rem",
          right: "2rem",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          padding: "0.8rem",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    )
  );
};

export default BackToTop;
