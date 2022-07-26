import React from "react";
import Chatapp from "./light.jpg";
import crypto from "./IMG4-min.png";
import estate from "./4682ba3bc6dc4eb89240caba148bc47a.jpeg";
import ark from "./pexels-mnz-1598505-min.jpg";
import { ArrowRightAlt } from "@material-ui/icons";
import "./recent.scss";
function RecentProjects() {
  return (
    <div data-scroll-section="" className="recentp_container">
      <div className="recentp_slide">
        <div className="recentp_wrapper">
          <div className="recentp_box">
            <div
              data-scroll=""
              data-scroll-call="p1"
              id="p2"
              className="recentp_img"
            >
              <div className="grid reverse">
                <figure className="effect-apollo">
                  <img src={Chatapp} alt="img22" />
                  <figcaption>
                    <h2>
                      Let's <span>Chat</span>
                    </h2>
                    <p>Inspired by whatsapp.</p>
                    <a
                      href="https://letschat115.netlify.app"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
                <div className="recentp_content">
                  <div className="recentp_text">
                    <h2>Let's Chat.</h2>
                    <p>
                      A dynamic responsive chat application built with material
                      ui, react, and nodejs. The project uses real-time,
                      event-based communication between the browser and the
                      server, with the help of the socket.io library. it also
                      uses mongodb for data manaagement allowing some features
                      like authentication, storing offline messages and so much
                      more.
                    </p>
                  </div>
                  <div className="recentp_description hide_cursor">
                    <p>
                      <a
                        href="https://letschat115.netlify.app"
                        rel="noreferrer"
                        target="_blank"
                      >
                        visit project
                      </a>
                    </p>
                    <ArrowRightAlt />
                  </div>
                </div>
              </div>
              <div className="name_recentp" style={{ textAlign: "center" }}>
                {" "}
                01. Let's Chat Web App
              </div>
            </div>
          </div>
        </div>
        <div className="recentp_wrapper">
          <div className="recentp_box">
            <div
              data-scroll=""
              data-scroll-call="p2"
              id="p1"
              className="recentp_img"
            >
              <div className="grid">
                <figure className="effect-apollo">
                  <img src={ark} alt="img22" />
                  <figcaption>
                    <h2>
                      Ark <span>Shop</span>
                    </h2>
                    <p>A great sneaker shopping experience</p>
                    <a
                      href="https://arkshop.netlify.app"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
                <div className="recentp_content">
                  <div className="recentp_text">
                    <h2>Ark Shop.</h2>
                    <p>
                      A simple fully responsive e-commerce website with an
                      amazing user interface built with react, nodejs and
                      mongodb for data management, it also contains some extra
                      features like full user authentication and payment method
                      using paypal.
                    </p>
                  </div>
                  <div className="recentp_description hide_cursor">
                    <p>
                      <a
                        href="https://arkshop.netlify.app"
                        rel="noreferrer"
                        target="_blank"
                      >
                        visit project
                      </a>
                    </p>
                    <ArrowRightAlt />
                  </div>
                </div>
              </div>
              <div className="name_recentp" style={{ textAlign: "center" }}>
                {" "}
                02. Ark Shop
              </div>
            </div>
          </div>
        </div>
        <div className="recentp_wrapper">
          <div className="recentp_box">
            <div
              data-scroll=""
              data-scroll-call="p3"
              id="p2"
              className="recentp_img"
            >
              <div className="grid reverse">
                <figure className="effect-apollo">
                  <img src={crypto} alt="img22" />
                  <figcaption>
                    <h2>
                      Horizon <span> the Forbidden West</span>
                    </h2>
                    <p>One of my favorite games</p>
                    <a
                      href="https://forbiddenwest.netlify.app"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
                <div className="recentp_content">
                  <div className="recentp_text">
                    <h2>Horizon the Forbidden West</h2>
                    <p>
                      This project was built from a figma design i found on
                      sketch-app-resources.com. This is the kind of projects
                      which pushes your Css skills to the limit.
                    </p>
                  </div>
                  <div className="recentp_description hide_cursor">
                    <p>
                      <a
                        href="https://forbiddenwest.netlify.app/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        visit project
                      </a>
                    </p>
                    <ArrowRightAlt />
                  </div>
                </div>
              </div>
              <div className="name_recentp" style={{ textAlign: "center" }}>
                {" "}
                03. Horizon The Forbidden West
              </div>
            </div>
          </div>
        </div>
        <div className="recentp_wrapper">
          <div className="recentp_box">
            <div
              data-scroll=""
              data-scroll-call="p4"
              id="p3"
              className="recentp_img"
            >
              <div className="grid">
                <figure className="effect-apollo">
                  <img src={estate} alt="img22" />
                  <figcaption>
                    <h2>
                      Estate Companion <span></span>
                    </h2>
                    <p>A companion for shopping apartment in Dubai</p>
                    <a
                      href="https://estate-companion.vercel.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View more
                    </a>
                  </figcaption>
                </figure>
                <div className="recentp_content">
                  <div className="recentp_text">
                    <h2>Estate Companion </h2>
                    <p>
                      A responsive wep app built with Next js, and Chakra ui,
                      connected to a rapid Api url Endpoint showing realtime
                      data of apartments available for buying or renting in
                      dubai.
                    </p>
                  </div>
                  <div className="recentp_description hide_cursor">
                    <p>
                      <a
                        href="https://estate-companion.vercel.app/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        visit project
                      </a>
                    </p>
                    <ArrowRightAlt />
                  </div>
                </div>
              </div>
              <div className="name_recentp" style={{ textAlign: "center" }}>
                04. Estate Companion
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
