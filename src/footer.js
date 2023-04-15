import "./footer.css";
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { Link, NavLink, NavLinkProps } from "react-router-dom";

function footer() {
  return (
    <>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                {/* <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul> */}
              </div>
              <div class="col-sm-6 col-md-3 item">
                {/* <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul> */}
              </div>
              <div class="col-md-6 item text">
                <h3>BodyPix</h3>
                <p>
                  We’ve provided just a few examples and utility methods to help
                  you get started with the BodyPix model and hope that it
                  inspires you to tinker with the model. What will you create?
                  We’d love to hear about it, so don’t forget to share your
                  projects using #tensorflowjs, #bodypix, and #PoweredByTF.
                </p>
                <p class="copyright">BodyPix © 2022</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default footer;
