import "./team.css";
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import Footer from "./footer";

function Team() {
  return (
    <>
    <div class="head">Team</div>
      <div class="container">
        <div class="row">
            <div></div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://media.licdn.com/dms/image/C4D03AQESMjezOmcpbQ/profile-displayphoto-shrink_800_800/0/1654083359116?e=1676505600&v=beta&t=G2rEvfqQsZeZYwVcczA9fIF8LXvqWj598WuATZBPA2k"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Akshit Rana</h3>
                <h4 class="title">CSE | 201000002</h4>
              </div>
              <ul class="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-github"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://media.licdn.com/dms/image/C5603AQE8HkmcqleU-A/profile-displayphoto-shrink_800_800/0/1649783632191?e=1676505600&v=beta&t=XmUjLRrPrivnnatFAfbLCd2hLPqPcr5o7VIZA6KFAXw"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Kshitij Kumar Singh Chauhan</h3>
                <h4 class="title">CSE | 201000022</h4>
              </div>
              <ul class="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-github"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://media.licdn.com/dms/image/C5603AQH5ufEbuh_73w/profile-displayphoto-shrink_800_800/0/1637495034196?e=1676505600&v=beta&t=HhT4mkiRrHAXV7c7cA7gPHdJ9RPKfuIYjX_jpknPyg4"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Suyash Sinha</h3>
                <h4 class="title">CSE | 201000053</h4>
              </div>
              <ul class="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-github"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
