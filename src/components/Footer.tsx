import React from "react";
import { Link } from "react-router-dom";
import { facebookIcon, instagramIcon, logo, twitterIcon } from "../assets";
import { FooterContainer } from "../styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="for-flex">
        <img src={logo} />
        <div className="pages">
          <Link to="/">
            <p>HOME</p>
          </Link>
          <Link to="/headphones">
            <p> HEADPHONES</p>
          </Link>

          <Link to="/speakers">
            <p>SPEAKERS</p>
          </Link>
          <Link to="/earphones">
            <p>EARPHONES</p>
          </Link>
        </div>
      </div>
      <p className="text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div className="for-flex2">
        <p className="copyright">Copyright 2021. All Rights Reserved</p>

        <div className="icons">
          <img src={facebookIcon} />
          <img src={twitterIcon} />
          <img src={instagramIcon} />
        </div>
      </div>
    </FooterContainer>
  );
}
