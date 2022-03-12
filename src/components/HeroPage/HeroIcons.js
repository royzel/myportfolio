import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {GoMarkGithub} from 'react-icons/go'
import './heroPage.css'
const HeroIcons = () => {
  return (
    <div className="header-social">
      <a href="#"><BsFacebook/></a>
      <a href="#"><AiFillInstagram/></a>
      <a href="#"><GoMarkGithub/></a>
    </div>
  );
};

export default HeroIcons;
