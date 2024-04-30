import { useState, useEffect } from "react";
import "./css/Header.scss";

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

  const currentText = txt[i] || "";
  return (
    <div>
      <div className="MobileNavbar">
        <nav class="layer">
          <ul>
            <li>
              <label for="pageOne">Home</label>
            </li>
            <li>
              <label for="pageTwo">About</label>
            </li>
            <li>
              <label for="pageThree">Blog</label>
            </li>
            <li>
              <label for="pageFour">Portfolio</label>
            </li>
            <li>
              <label for="pageFive">Contact</label>
            </li>
          </ul>
        </nav>

        <input type="checkbox" name="hamburger" id="hamburger" />
        <label for="hamburger">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </label>
        <div class="front layer home   HeaderContent">
          <section>
            <div class="header">
              <div class="overlay"></div>
              <div class="header-content container m-0 p-0">
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
                {/* <img src={AvterV} alt="Avatar GIF" /> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
