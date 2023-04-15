
import "./about.css";
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import Footer from "./footer";
import Button from "./button";
import Team from "./team";

function About() {
  return (
    <>
      <div class="head">About</div>
      <div class="contain">
        BodyPix can be used to segment an image into pixels that are and are not
        part of a person, and into pixels that belong to each of twenty-four
        body parts. It works for multiple people in an input image or video.
        Enhanced with multi-person support and improved accuracy (based on
        ResNet50), a new API, weight quantization, and support for different
        image sizes.
      </div>
      <br/>
      <div class="image">
      <img src="https://1.bp.blogspot.com/-96qG-uqTaxQ/Xc7dxCaYZhI/AAAAAAAAA5U/LX-6HnwfTXghgUV1MVs6z3J3nkmil0XcACLcBGAsYHQ/s1600/bodypix2-twitter.gif" />
      </div>
    </>
  );
}

export default About;
