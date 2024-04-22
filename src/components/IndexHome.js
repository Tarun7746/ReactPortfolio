import React from "react";
import Header from "./Header";
import AboutPic from "../assets/imgs/man.png";
import ResponsiveIcn from "../assets/imgs/responsive.svg";
import pencilIcon from "../assets/imgs/pencil-case.svg";
import ToolBoxSvg from "../assets/imgs/toolbox.svg";
import AnaLaticSvg from "../assets/imgs/analytics.svg";
import { saveAs } from "file-saver";
import "./css/service.scss";
import Service from "./Service";
import { useEffect } from "react";

const IndexHome = () => {
  const services = [
    {
      title: "Adipisicing",
      subtitle:
        "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
      icon: pencilIcon,
    },
    {
      title: "Sapiente",
      subtitle:
        "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
      icon: ResponsiveIcn,
    },
    {
      title: "Placeat",
      subtitle:
        "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
      icon: ToolBoxSvg,
    },
    {
      title: "Iusto",
      subtitle:
        "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
      icon: AnaLaticSvg,
    },
  ];

  //resume Download
  const handleDownloadCV = () => {
    const pdfUrl = { AboutPic };
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "resume.pdf"))
      .catch((error) => console.error("Error downloading PDF:", error));
  };
  let services_text = [
    {
      icon: "computerIcon",
      // imgSrc: computerIcon,
      title: "Computer lab",
      description:
        "ICM Bhopal boasts a modern computer lab equipped with i5 and i7 computers, LAN, internet, multimedia projector, and latest software, facilitating practical training for Cooperative personnel. The lab, located in a separate cabin, accommodates 28 computers with comfortable seating.",
    },
    {
      icon: "LibIconIcon",
      // imgSrc: LibIcon,
      title: "Library",
      description:
        "The Institute has well structured library having more than 14 thousand books on different areas of Management, Law, Fiction, Literature, Commerce and Information technology. The Institute has A  exclusive collection of books on cooperative Management, Law, Accounts and Audit.",
    },
    {
      icon: "traningIcon",
      // imgSrc: traningIcon,
      title: "Classrooms",
      description:
        "Institute has an independent administrative block spread over 152 Sq Metrs. The institute has 134 sq Metres.(AC) conference hall with seating capacity of 80 persons, 5 AC class rooms, with  Enhanced video conference facility for administrative and training purpose.",
    },
    {
      icon: "computerIcon",
      // imgSrc: LeaningIcon,
      title: "Leaning Centre",
      description:
        "The Learning Center at ICM Bhopal has a modern computer lab with i5 and i7 computers, LAN and internet access, multimedia projectors, and advanced software for hands-on training. The lab, with 28 computers, is specially designed for Cooperative personnel.",
    },
    {
      icon: "LibIconIcon",
      // imgSrc: LibIcon,
      title: "Webinars",
      description:
        "The focal point of our webinar Rest highlight the Learning Center at ICM Bhopal, which houses an advanced computer lab equipped with i5 and i7 computers, LAN connectivity, Internet accessibility, Multimedia projectors, and state-of-the-art software.This setup helps us in facilitating interactive training sessions.",
    },
    {
      icon: "traningIcon",
      // imgSrc: traningIcon,
      title: "Seminar",
      description:
        "We regularly host seminars to showcase the Learning Hub at ICM Bhopal, a cutting-edge computer facility tailored for interactive training of Cooperative personnel. With 28 workstations, it provides ample resources for effective learning experiences.",
    },
    {
      icon: "traningIcon",
      // imgSrc: traningIcon,
      title: "Conferences",
      description:
        "The forthcoming conference offers a proficient platform for industry leaders to converge and exchange insights. Attendees can anticipate engaging discussions, informative sessions, and valuable networking opportunities. Join us as we collectively strive towards advancing our fields In fostering meaningful collaborations.",
    },
    {
      icon: "traningIcon",
      // imgSrc: StudyIcon,
      title: "Study Materia",
      description:
        "Study materials provide an effective way for gather and discuss vital insights. Attendees can anticipate thought-provoking conversations and chances to make valuable relationships. increase your knowledge. Reserve your spot right away to participate in group discovery and enhance your educational experience.",
    },
  ];

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
        {/* <div class="container pt-5">
          <div class="row">
            <div class="col-md-6 wow fadeInRight">
              <h2 class="fw-normal">Education</h2>
              <ul class="timeline mt-4 pr-md-5">
                <li>
                  <div class="title">2023 -Current</div>
                  <div class="details">
                    <h5>Masters of Technology</h5>
                    <small class="fg-theme"> Rgpv bhopal</small>
                    <small class="fg-theme2">
                      Computer Science & Engineering
                    </small>
                    <p>
                      M.Tech graduate with specialized knowledge & Proficient in
                      Programing. Dedicated to applying technical expertise for
                      innovative solutions.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">2019 -2023</div>
                  <div class="details">
                    <h5>Bachelor of Technology</h5>
                    <small class="fg-theme">Sirte Bhopal</small>
                    <small class="fg-theme2">
                      Computer Science & Engineering
                    </small>
                    <p>
                      With a high CGPA and a solid foundation in software
                      development, coding, and networking, coupled with
                      extensive knowledge in web development, I bring a
                      well-rounded skill set to my role at a web design company.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">2018 -12th</div>
                  <div class="details">
                    <h5>Physics Chemistry and Maths</h5>
                    <small class="fg-theme">Nalanda Public School</small>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <h2 class="fw-normal">Experience</h2>
              <ul class="timeline mt-4 pr-md-5">
                <li>
                  <div class="title">2024 - Current</div>
                  <div class="details">
                    <h5>Triosoft Technology Pvt. Ltd.</h5>
                    <small class="fg-theme">January 2024</small>
                    <small class="fg-theme2">Web developer</small>
                    <p>
                      As a web developer at Triosoft, I navigate through diverse
                      coding languages and frameworks, crafting innovative
                      solutions for optimal web development.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">2023</div>
                  <div class="details">
                    <h5>Umpteen Innovation Pvt. Ltd.</h5>
                    <small class="fg-theme"> November - december </small>
                    <small class="fg-theme2">Web developer</small>

                    <p>
                      In my role at a web design company, I specialize in
                      creating captivating web pages and engaging in the art of
                      web design to deliver visually and user-friendly online
                      experiences.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">2023</div>
                  <div class="details">
                    <h5>Agnito Technology Pvt. Ltd.</h5>
                    <small class="fg-theme">December 2023</small>
                    <small class="fg-theme2">Salesforce Developer </small>
                    <p>
                      As a Salesforce Developer at Agnito, I specialize in
                      crafting tailored solutions using Apex, Visualforce, and
                      Lightning components. I contribute to optimizing CRM
                      functionalities.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <section class="timeline">
          <ul>
            <li>
              <div>
                <time>1934</time> At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium
              </div>
            </li>
            <li>
              <div>
                <time>1937</time> Proin quam velit, efficitur vel neque vitae,
                rhoncus commodo mi. Suspendisse finibus mauris et bibendum
                molestie. Aenean ex augue, varius et pulvinar in, pretium non
                nisi.
              </div>
            </li>
            <li>
              <div>
                <time>1940</time> Proin iaculis, nibh eget efficitur varius,
                libero tellus porta dolor, at pulvinar tortor ex eget ligula.
                Integer eu dapibus arcu, sit amet sollicitudin eros.
              </div>
            </li>
            <li>
              <div>
                <time>1943</time> In mattis elit vitae odio posuere, nec maximus
                massa varius. Suspendisse varius volutpat mattis. Vestibulum id
                magna est.
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
    </div>
  );
};

export default IndexHome;
