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
    <link rel="stylesheet" href="css.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
    
    <div class="container2">
    <div class="head">
        Team Grotesque
    </div>
    <div class="content">
    <br/>
    <h3>ZEMOS</h3>
    <br/>
	
    </div>
    <br/>
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="https://media.licdn.com/dms/image/C4D03AQFCwn1sOVzYWg/profile-displayphoto-shrink_800_800/0/1655621859304?e=1686787200&v=beta&t=zNLhrZyXwP5Na0crkzSqfsU6a5RDOHY4qNeZF1BakG8"/>
                    </div>
                    <h3 class="title">Aaditya Kumar</h3>
                    <span class="post">UI/UX Designer</span>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="mailto:aaditya20101@iiitnr.edu.in" class="fa fa-google-plus"></a></li>
                        <li><a href="https://www.linkedin.com/in/aaditya-kumar-560952217/" class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
     
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="https://media.licdn.com/dms/image/C5603AQH5ufEbuh_73w/profile-displayphoto-shrink_800_800/0/1637495034196?e=1686787200&v=beta&t=9vktXn0woCQAGWdGCYrSpdzrhG1as-x4C4r3_q6y8eM"/>
                    </div>
                    <h3 class="title">Suyash Sinha</h3>
                    <span class="post">Web & Unity Developer</span>
                    <ul class="social">
                        <li><a href="https://www.twitch.tv/settings/profile" class="fa fa-twitch"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="mailto:suyash20100@iiitnr.edu.in" class="fa fa-google-plus"></a></li>
                        <li><a href="https://www.linkedin.com/in/sinha-suyash/" class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
    
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="https://media.licdn.com/dms/image/C4E03AQG-af6KZGvwBA/profile-displayphoto-shrink_800_800/0/1641415729955?e=1686787200&v=beta&t=M2HJiOYr008bL66WndfF2B4DkY0tkM1-j9C6-sds7X4"/>
                    </div>
                    <h3 class="title">Kishan G. Mishra</h3>
                    <span class="post">Web Designer</span>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="mailto:kishan20100@iiitnr.edu.in" class="fa fa-google-plus"></a></li>
                        <li><a href="https://www.linkedin.com/in/kishan-mishra-245b16206/" class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="https://media.licdn.com/dms/image/D4D03AQEeHG_Ct1ONQw/profile-displayphoto-shrink_800_800/0/1681566579744?e=1686787200&v=beta&t=9oZn0P1t_akMeg_RF6SNRnprR0-XNluxGq35NDgsAzc"/>
                    </div>
                    <h3 class="title">Amaan A. Kazi</h3>
                    <span class="post">Web Designer</span>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="mailto:amaan20100@iiitnr.edu.in" class="fa fa-google-plus"></a></li>
                        <li><a href="https://www.linkedin.com/in/amaan-a-kazi-7b4960201/" class="fab fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
    
        </div>
    </div>
    </>
  );
}

export default Team;
