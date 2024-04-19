import React from "react";
import Header from "./Header";
import AboutPic from "../assets/imgs/man.png";
import ResponsiveIcn from "../assets/imgs/responsive.svg";
import pencilIcon from "../assets/imgs/pencil-case.svg";
import ToolBoxSvg from "../assets/imgs/toolbox.svg";
import AnaLaticSvg from "../assets/imgs/analytics.svg";

const IndexHome = () => {
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
                <button class="btn-rounded btn btn-outline-primary mt-4">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*---Service----*/}
      <div className="service">
        <section class="section" id="service">
          <div class="container text-center">
            <p class="section-subtitle">What I Do ?</p>
            <h6 class="section-title mb-6">Service</h6>

            <div class="row">
              <div class="col-md-6 col-lg-3">
                <div class="service-card">
                  <div class="body">
                    <img src={pencilIcon} alt="pencilIcon" class="icon"></img>
                    <h6 class="title">Adipisicing</h6>
                    <p class="subtitle">
                      Labore velit culpa adipisci excepturi consequuntur itaque
                      in nam molestias dolorem iste quod.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="service-card">
                  <div class="body abtt">
                    <img src={ResponsiveIcn} alt="Img" class="icon"></img>
                    <h6 class="title">Sapiente</h6>
                    <p class="subtitle">
                      Labore velit culpa adipisci excepturi consequuntur itaque
                      in nam molestias dolorem iste quod.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="service-card">
                  <div class="body">
                    <img src={ToolBoxSvg} alt="toolImg" class="icon"></img>
                    <h6 class="title">Placeat</h6>
                    <p class="subtitle">
                      Labore velit culpa adipisci excepturi consequuntur itaque
                      in nam molestias dolorem iste quod.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="service-card">
                  <div class="body">
                    <img src={AnaLaticSvg} alt="toolImg" class="icon"></img>

                    <h6 class="title">Iusto</h6>
                    <p class="subtitle">
                      Labore velit culpa adipisci excepturi consequuntur itaque
                      in nam molestias dolorem iste quod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndexHome;
