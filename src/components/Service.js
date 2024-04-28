import LookIcn from "../assets/imgs/LookCard.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const projectsData = [
    {
      title: "Gym management System",
      description:
        "Revolutionize gym management with our comprehensive system...",
      image: LookIcn,
    },
    {
      title: "Smart Pharma",
      description:
        "Pharmaceutical on Salesforce Cloud is a dynamic project revolutionizing hospital data management...",
      image: LookIcn,
    },
    {
      title: "Home Automation",
      description:
        "Pharmaceutical on Salesforce Cloud is a dynamic project revolutionizing hospital data management...",
      image: LookIcn,
    },
    {
      title: "ICM BHopal",
      description: "",
      image: LookIcn,
    },
  ];

  return (
    <div>
      <div className="CrdSerVice container">
        {projectsData.map((project, index) => (
          <div class="flip-card" tabIndex="0" key={index}>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="CardImg">
                  <div className="PrjctTitle">
                    <time>{project.title}</time>
                  </div>{" "}
                  <img src={project.image}></img>{" "}
                </div>
              </div>
              <div class="flip-card-back">
                <h3>{project.description}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
