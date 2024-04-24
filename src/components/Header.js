import React from "react";
import { Link } from "react-router-dom";
import AvterV from "../assets/imgs/bgRmveVideo.gif";
import { useState, useEffect } from "react";

import NavbarHead from "./NavbarHead";

const Header = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 100; // Speed at which characters are typed
  const backspaceSpeed = 50; // Backspace speed in milliseconds (faster)

  useEffect(() => {
    let timeout;

    const typeWriter = () => {
      if (isTyping) {
        timeout = setTimeout(() => {
          if (text.length < "I am Tarun".length) {
            setText((prevText) => prevText + "I am Tarun"[text.length]);
            typeWriter();
          } else {
            setIsTyping(false);
          }
        }, typingSpeed);
      }
    };

    const backspaceWriter = () => {
      if (!isTyping && text.length > 0) {
        timeout = setTimeout(() => {
          setText((prevText) => prevText.slice(0, -1));
          backspaceWriter(); // Continue backspacing until text is empty
        }, backspaceSpeed);
      } else if (!isTyping && text.length === 0) {
        setIsTyping(true); // Set typing state to true when backspacing is complete
        typeWriter(); // Start typing again
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    typeWriter();

    // Clean-up function to clear timeout and remove event listener on unmount
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [text, isTyping]);

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className="HeadNavv">
        <div className="NavBR">
          <NavbarHead />
        </div>
        <header class="header">
          <div class="overlay"></div>
          <div class="header-content container">
            <h1 class="header-title">
              <span class="up">HI!</span>
              <span class="down" id="text-animation">
                {text}
              </span>
            </h1>
            <p class="header-subtitle">FRONTEND WEB DESIGNER</p>

            <button class="btn btn-primary">Visit My Works</button>
          </div>
          <div className="videoAvter">
            <img src={AvterV} alt="Avatar GIF" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
