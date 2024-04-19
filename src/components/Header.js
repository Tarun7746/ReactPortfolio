import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 100; // Typing speed in milliseconds (slower)
  const backspaceSpeed = 5; // Backspace speed in milliseconds (faster)

  useEffect(() => {
    let typingTimeout;
    let backspaceTimeout;

    const typeWriter = () => {
      if (isTyping) {
        typingTimeout = setTimeout(() => {
          if (text.length < "I am Tarun".length) {
            setText((prevText) => prevText + "I am Tarun"[text.length]);
            typeWriter();
          } else {
            setIsTyping(false);
            backspaceTimeout = setTimeout(backspaceWriter, typingSpeed * 2);
          }
        }, typingSpeed);
      }
    };

    const backspaceWriter = () => {
      backspaceTimeout = setTimeout(() => {
        if (!isTyping && text.length > 0) {
          setText((prevText) => prevText.slice(0, -1));
          backspaceWriter();
        } else {
          setIsTyping(true);
          setText(""); // Reset text after backspace deletion
          typeWriter();
        }
      }, backspaceSpeed);
    };

    typeWriter();

    // Clean-up function to clear timeouts on unmount
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(backspaceTimeout);
    };
  }, [text, isTyping]);

  return (
    <>
      {/*page header */}
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
      </header>
    </>
  );
};

export default Header;
