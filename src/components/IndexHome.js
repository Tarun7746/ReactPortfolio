import React from "react";
import Header from "./Header";
import AboutPic from "../assets/imgs/man.png";

import { saveAs } from "file-saver";
import "./css/service.scss";
import Service from "./Service";
import { useEffect } from "react";
import FooterHome from "./FooterHome";
import ResumePDF from "../assets/imgs/first resume.pdf";
import EducatinMobile from "../components/EducatinMobile";

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

      <div className="mobileEdu">
        <EducatinMobile />
      </div>

      <div className="CenterSection">
        {" "}
        <div className="SerViceTXt">
          <h2 class="section-title QEX">Qualification | Experience </h2>
        </div>
        <section class="timeline">
          <ul>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Software Developer</time>
                  <label>2023 Triosoft Technology Pvt. Ltd.</label> <br />
                  <h7>
                    While currently employed as a software developer, I've
                    actively participated in live projects, gaining valuable
                    insights and knowledge through hands-on experience. This
                    practical exposure has deepened my understanding of software
                    development methodologies and refined my technical skills.
                  </h7>
                </p>
              </div>
            </li>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Master of Technology </time>{" "}
                  <label>2023 - Pursuing</label> <br />
                  <h7>
                    Throughout my pursuit of a Master of Technology degree in
                    Computer Science, I have delved deep into various aspects of
                    the field, acquiring in-depth knowledge and expertise. I am
                    eager to leverage this depth of knowledge to make
                    significant contributions in the field of computer science."
                  </h7>
                </p>
              </div>
            </li>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Salesforce Developer -Intern </time>{" "}
                  <label>2023 Agnito Technology Private Limited</label>
                  <br />{" "}
                  <h7>
                    "During my internship, I actively engaged in projects that
                    enhanced my understanding of cloud computing, particularly
                    on the Salesforce Cloud platform. I gained valuable
                    knowledge and expertise in utilizing cloud technologies.
                    Enriching my skill set for future endeavors in this field."
                  </h7>
                </p>
              </div>
            </li>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Bachelors Of Technology</time>{" "}
                  <label>2019 -2023 SIRTE Bhopal</label>
                  <br />
                  <h7>
                    Obtained a Bachelor of Technology (B.Tech) degree in
                    Computer Science, completing a range of projects to
                    reinforce my understanding of computer science principles,
                    algorithms, and programming languages.
                  </h7>
                </p>
              </div>
            </li>
            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>Mp Police Cyber Security -intern</time>{" "}
                  <label>2022 MP Police</label>
                  <br />
                  <h7>
                    Successfully completed a 3-month internship with MP Police
                    in Cyber Security, gaining valuable knowledge and practical
                    experience in the field. Acquired skills in cyber security
                    practices and procedures, contributing effectively to the
                    team's objectives.
                  </h7>
                </p>
              </div>
            </li>

            <li>
              <div className="Educa">
                <p>
                  {" "}
                  <time>10th & 12th </time> <label>Nalanda Public School</label>
                  <br />
                  <h7>
                    High School Graduate (PCM Stream) Completed high school with
                    a focus on Physics, Chemistry, and Mathematics (PCM).
                    Equipped with a strong foundation in science and
                    mathematics.
                  </h7>
                </p>
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
