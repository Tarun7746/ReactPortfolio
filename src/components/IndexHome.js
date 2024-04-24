import React from "react";
import Header from "./Header";
import AboutPic from "../assets/imgs/man.png";

import { saveAs } from "file-saver";
import "./css/service.scss";
import Service from "./Service";
import { useEffect } from "react";
import FooterHome from "./FooterHome";
import ResumePDF from "../assets/imgs/first resume.pdf";

const IndexHome = () => {
  //resume Download
  const handleDownloadCV = () => {
    const pdfUrl = ResumePDF;
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "Tarun Mandal.pdf"))
      .catch((error) => console.error("Error downloading PDF:", error));
  };

  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    };

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);
  return (
    <div>
      <Header />
      <div className="AboutSectiOnn">
        <section class="section pt-0" id="about">
          <div class="container text-center">
            <div class="about">
              <div class="about-img-holder">
                <img src={AboutPic} class="about-img" alt="img"></img>
              </div>
              <div class="about-caption">
                <p class="section-subtitle">Who Am I ?</p>
                <h2 class="section-title mb-3">About Me</h2>
                <p>
                  As a web developer with a B.Tech in Computer Science and
                  ongoing M.Tech studies, I've gained diverse experience through
                  internships and professional roles. My tenure at MP Police
                  Cyber Security provided insights into cyber attack mitigation,
                  while at Agnito Technology, I specialized in Salesforce Cloud
                  platform. Currently, at Triosoft Technology, I'm engaged in
                  live project development as a software developer. My journey
                  reflects a versatile skill set encompassing cybersecurity,
                  cloud computing, and software development, poised to tackle
                  complex challenges in the tech industry. As a diligent
                  learner, I continually seek opportunities to enhance my
                  expertise and stay abreast of emerging technologies. With a
                  strong foundation in computer science, I approach projects
                  with analytical precision and a passion for innovation. My
                  collaborative spirit and effective communication skills
                  facilitate seamless teamwork and project delivery. Committed
                  to excellence, I thrive in dynamic environments, adapting
                  quickly to evolving industry trends. Leveraging my experiences
                  and skills, I aim to make impactful contributions to the
                  ever-evolving landscape of technology.
                </p>
                <button
                  class="btn-rounded btn btn-outline-primary mt-4"
                  onClick={handleDownloadCV}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*---Service----*/}

      <div className="CenterSection">
        <section class="timeline">
          <ul>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Education</time> <label>2023 -Current</label>{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Education</time> <label>2023 -Current</label>{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Education</time> <label>2023 -Current</label>{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Education</time> <label>2023 -Current</label>{" "}
                </p>
              </div>
            </li>
            <li>
              <div>
                <time>1946</time> In mattis elit vitae odio posuere, nec maximus
                massa varius. Suspendisse varius volutpat mattis. Vestibulum id
                magna est.
              </div>
            </li>
            <li>
              <div>
                <time>1956</time> In mattis elit vitae odio posuere, nec maximus
                massa varius. Suspendisse varius volutpat mattis. Vestibulum id
                magna est.
              </div>
            </li>
            <li>
              <div>
                <time>1957</time> In mattis elit vitae odio posuere, nec maximus
                massa varius. Suspendisse varius volutpat mattis. Vestibulum id
                magna est.
              </div>
            </li>
            <li>
              <div>
                <time>1967</time> Aenean condimentum odio a bibendum rhoncus. Ut
                mauris felis, volutpat eget porta faucibus, euismod quis ante.
              </div>
            </li>
            <li>
              <div>
                <time>1977</time> Vestibulum porttitor lorem sed pharetra
                dignissim. Nulla maximus, dui a tristique iaculis, quam dolor
                convallis enim, non dignissim ligula ipsum a turpis.
              </div>
            </li>
            <li>
              <div>
                <time>1985</time> In mattis elit vitae odio posuere, nec maximus
                massa varius. Suspendisse varius volutpat mattis. Vestibulum id
                magna est.
              </div>
            </li>
            <li>
              <div>
                <time>2000</time> In mattis elit vitae odio posuere, nec maximus
                massa varius. Suspendisse varius volutpat mattis. Vestibulum id
                magna est.
              </div>
            </li>
            <li>
              <div>
                <time>2005</time> In mattis elit vitae odio posuere, nec maximus
                massa varius. Suspendisse varius volutpat mattis. Vestibulum id
                magna est.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className="row m-0">
        <Service />
      </div>

      <FooterHome />
    </div>
  );
};

export default IndexHome;
