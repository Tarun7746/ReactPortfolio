import React from "react";
import Header from "./Header";
import AboutPic from "../assets/imgs/man.png";

const IndexHome = () => {
  return (
    <div>
      <Header />
      <div className="AboutSectiOnn">
        <section class="section pt-0" id="about">
          <div class="container text-center">
            <div class="about">
              <div class="about-img-holder">
                <img src={AboutPic} class="about-img" alt="dss"></img>
              </div>
              <div class="about-caption">
                <p class="section-subtitle">Who Am I ?</p>
                <h2 class="section-title mb-3">About Me</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae aliquid ad provident aut fuga animi soluta quae
                  eos non cupiditate voluptates dolorem, doloremque quos dicta
                  quibusdam impedit iure nemo a iste culpl Quasi quibusdam hic
                  recusandae delectus velit officiis explicabo voluptatibus!
                  Nemo esse similique, voluptates labore distinctio, placeat
                  explicabo facilis molestias, blanditiis culpa iusto voluptatem
                  ratione eligendi a, quia temporibus velit vero ipsa sint ex
                  voluptatum expedita aliquid! Debitis, nam!
                </p>
                <button class="btn-rounded btn btn-outline-primary mt-4">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndexHome;
