import "./App.css";
import "./button.css";
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import Footer from "./footer";
import Button from "./button";
import Team from "./team";
import About from "./about";

function App() {
  return (
    <>
      <section class="header">
        <div class="overlay">
          <div class="row">
            <div class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <div class="navlogo col-lg-2">
                    <a class="navbar-brand" href="#">
                      BodyPix
                    </a>
                  </div>
                </div>

                <div
                  class="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <div class="col-lg-8">
                    <ul class="nav navbar-nav nav-links">
                      <li>
                        <Link to="/segmentation">Perform Segmentation</Link>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      
                      <li>
                        <a
                          href="https://github.com/Kshitij-Kumar-Singh-Chauhan/Minor-Project"
                          class="fa fa-github" 
                          aria-hidden="true"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="about">
        <About />
      </div>
      <div id="team">
        <Team />
      </div>

      <Footer />
    </>
  );
}

export default App;
