import "./button.css";
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import Footer from "./footer";

function button() {
  return (
    <>
      <div class="container">
        <div class="center">
          <button class="btn">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>HOVER ME</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default button;
