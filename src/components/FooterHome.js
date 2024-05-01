import React from "react";
import "./css/foooter.css";
import GitIcn from "../assets/imgs/gitHubPng.png";

const FooterHome = () => {
  return (
    <div>
      <footer class="new_footer_area bg_color">
        <div class="new_footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>

                  <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    method="post"
                    noValidate={true}
                    _lpchecked="1"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control memail"
                      placeholder="Email"
                    />
                    <button className="btn btn_get btn_get_two" type="submit">
                      Subscribe
                    </button>
                    <p
                      className="mchimp-errmessage"
                      style={{ display: "none" }}
                    ></p>
                    <p
                      className="mchimp-sucmessage"
                      style={{ display: "none" }}
                    ></p>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                ></div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                ></div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 class="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div class="f_social_icon">
                    <a
                      href="https://www.linkedin.com/in/tarun-mandal-541a6b237/"
                      class="fab fa-linkedin"
                    ></a>
                    <a href="#" class="fab fa-github"></a>
                    <a
                      href="https://www.instagram.com/_.txrun___/?next=%2F&hl=en"
                      class="fab fa-instagram"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterHome;
