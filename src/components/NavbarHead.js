import React, { useState, useEffect } from "react";
import { gsap, TimelineMax, Expo } from "gsap";

const NavbarHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [circleWidth, setCircleWidth] = useState(0);

  const getVpdr = () => {
    const html = document.documentElement;
    const vph = Math.pow(html.offsetHeight, 2); // Height
    const vpw = Math.pow(html.offsetWidth, 2); // Width
    const vpd = Math.sqrt(vph + vpw);
    return (vpd * 2) / circleWidth;
  };

  const openNavbar = () => {
    const openTimeline = new TimelineMax();
    openTimeline.to(".navbar", 0, { display: "flex" });
    openTimeline.to("#bg-circle", 1.5, {
      scale: getVpdr(),
      ease: Expo.easeInOut,
    });
    openTimeline.staggerFromTo(
      ".navbar ul li",
      0.5,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1 },
      0.1,
      1
    );
  };

  const closeNavbar = () => {
    const closeTimeline = new TimelineMax();
    closeTimeline.staggerFromTo(
      ".navbar ul li",
      0.5,
      { y: 0, opacity: 1, delay: 0.5 },
      { y: 25, opacity: 0 },
      -0.1
    );
    closeTimeline.to("#bg-circle", 1, {
      scale: 0,
      ease: Expo.easeInOut,
      delay: -0.5,
    });
    closeTimeline.to(".navbar", 0, { display: "none" });
  };

  const handleToggle = () => {
    if (isOpen) {
      closeNavbar();
    } else {
      openNavbar();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const circle = document.getElementById("bg-circle");
    if (circle) {
      setCircleWidth(circle.clientWidth);
    }

    window.onresize = () => {
      if (isOpen) {
        gsap.to("#bg-circle", 1, { scale: getVpdr(), ease: Expo.easeInOut });
      }
    };
    return () => {
      window.onresize = null; // Cleanup function to remove resize event listener
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className={isOpen ? "navbar-toggle active" : "navbar-toggle"}
        onClick={handleToggle}
      ></button>
      <div id="wrapper">
        <div className="sideBrCenterTxt">
          {" "}
          <h1>Check this fancy Menu</h1>
        </div>

        <button className="navbar-toggle" type="button" onClick={handleToggle}>
          <svg viewBox="0 0 100 100" width="80">
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </button>

        <div className="navbar">
          <ul>
            <li>
              <a data-text="1" href="#">
                Home
              </a>
            </li>
            <li>
              <a data-text="2" href="#">
                About Us
              </a>
            </li>
            <li>
              <a data-text="3" href="#">
                Projects
              </a>
            </li>
            <li>
              <a data-text="4" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div id="bg-circle"></div>
      </div>
    </div>
  );
};

export default NavbarHead;
