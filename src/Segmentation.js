import "./App.css";
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

function Segmentation() {
  const webcamReference = useRef(null);
  const canvasReference = useRef(null);

  const loadBodyPixModel = async () => {
    const network = await bodyPix.load();
    console.log("Body-Pix model loaded.");
    setInterval(() => {
      detectBodySegments(network);
    }, 100);
  };

  const detectBodySegments = async (network) => {
    if (
      typeof webcamReference.current !== "undefined" &&
      webcamReference.current !== null &&
      webcamReference.current.video.readyState === 4
    ) {
      const video = webcamReference.current.video;
      const videoWidth = webcamReference.current.video.videoWidth;
      const videoHeight = webcamReference.current.video.videoHeight;

      webcamReference.current.video.width = videoWidth;
      webcamReference.current.video.height = videoHeight;

      canvasReference.current.width = videoWidth;
      canvasReference.current.height = videoHeight;

      const body = await network.segmentPersonParts(video);
      console.log(body);

      const coloredBodyParts = bodyPix.toColoredPartMask(body);
      const opacityValue = 0.7;
      const flipHorizontal = false;
      const maskBlurDensity = 0;
      const canvas = canvasReference.current;

      bodyPix.drawMask(
        canvas,
        video,
        coloredBodyParts,
        opacityValue,
        maskBlurDensity,
        flipHorizontal
      );
    }
  };

  loadBodyPixModel();
  return (
    <div className="App">
      <Webcam
        ref={webcamReference}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 720,
          height: 500,
        }}
      />
      <canvas
        ref={canvasReference}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 720,
          height: 500,
        }}
      />
      <div class="base">
        The BodyPix model can estimate which pixels in an image are part of a
        person, and which pixels are part of each of 24 body parts. It works for
        multiple people in an input image or video. The internal resolution,
        output stride and model have the largest effects on accuracy/speed. A
        higher internal resolution results in higher accuracy but lower the
        speed. A higher output stride results in lower accuracy but higher
        speed. A larger model, indicated by both architecture and multiplier
        dropdown, results in higher accuracy but lower speed.
      </div>
    </div>
  );
}

export default Segmentation;
