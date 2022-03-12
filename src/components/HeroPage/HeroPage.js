import React from "react";
import CTA from "./CTA";
import {MdFace} from 'react-icons/md'

import HeroIcons from "./HeroIcons";
import './heroPage.css'

const HeroPage = () => {
  return (
    <section className="container">
      <div className="nav-container">
        <div className="logo">Royce</div>
        <nav className="nav">
          <a href="">About</a>
          <a href="">Work</a>
          <a href="">Contact</a>
          <CTA />
        </nav>
      </div>
      <div className="hero-container">
        <div className="container-left">
          <h4>Hello, my name is</h4>
          <h1>
            Royce
            <br />
            Evangelista
          </h1>
          <h4>
            Ux Designer | Front End Developer 
            <br />
            Graphic Designer | Logo Designer
          </h4>
        </div>
        <div className="container-right">
          <div className="my-face"><MdFace/></div>
        </div>
      </div>
      <div className="hero-social">
        <HeroIcons />
        <h4>evangelistaroyce@gmail.com</h4>
      </div>
    </section>
  );
};
export default HeroPage;
