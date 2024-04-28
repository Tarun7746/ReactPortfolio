import React from "react";
import { Link } from "react-router-dom";
import AvterV from "../assets/imgs/bgRmveVideo.gif";
import { useState, useEffect } from "react";

import NavbarHead from "./NavbarHead";

const Header = () => {
  const txt = ["i am Tarun"];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [end, setEnd] = useState(false);
  const [typingDirection, setTypingDirection] = useState("forward");

  useEffect(() => {
    const wait = (seconds) => {
      return new Promise((resolve) => setTimeout(resolve, seconds * 10));
    };

    const main = async () => {
      if (i < txt.length) {
        if (
          txt[i] &&
          typingDirection === "forward" &&
          end === false &&
          j <= txt[i].length
        ) {
          // Auto typing
          setJ((prevJ) => prevJ + 1);
        }

        if (typingDirection === "backward" && end === true && j >= 0) {
          // Backspacing
          setJ((prevJ) => prevJ - 1);
        }

        if (txt[i] && j === txt[i].length && typingDirection === "forward") {
          setEnd(true);
          await wait(2);
          setTypingDirection("backward");
        }

        if (j === 0 && typingDirection === "backward") {
          setI((prevI) => prevI + 1);
          setEnd(false);
          setTypingDirection("forward");
        }
      } else {
        setI(0);
      }
    };

    const intervalId = setInterval(() => {
      main();
    }, 200);

    return () => clearInterval(intervalId);
  }, [i, j, end, typingDirection]);

  // Ensure txt[i] is defined before accessing its properties
  const currentText = txt[i] || "";
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
              <span class="down">
                <div id="typed">
                  {txt[i] && txt[i].substring(0, j)}
                  <span style={{ opacity: end ? 0 : 1 }}>&nbsp;</span>
                </div>
              </span>
            </h1>
            <p class="header-subtitle">Web developer</p>

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
