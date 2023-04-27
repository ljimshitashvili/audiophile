import React from "react";
import {
  HomeContainer,
  OrangeButton,
  BlackButton,
  TransparentButton,
} from "../styled-components";
import { Products, Advert } from "../components";
import {
  earphonesyx1Desktop,
  earphonesyx1Mobile,
  earphonesyx1Tablet,
  speakerZX9Desktop,
  speakerZX9Mobile,
  speakerZX9Tablet,
} from "../assets";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeContainer>
      <section className="section1">
        <div className="content">
          <p className="head">NEW PRODUCT</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p className="text">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/headphones/xx99-mark-two-headphones">
            <OrangeButton>SEE PRODUCT</OrangeButton>
          </Link>
        </div>
      </section>
      <section className="section2">
        <Products />
      </section>
      <section className="section3">
        <div className="speaker9">
          <img className="mobile" src={speakerZX9Mobile} />
          <img className="tablet" src={speakerZX9Tablet} />
          <img className="desktop" src={speakerZX9Desktop} />
          <div className="for-flex">
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/speakers/zx9-speaker">
              <BlackButton>SEE PRODUCT</BlackButton>
            </Link>
          </div>
        </div>
        <div className="speaker7">
          <h2>ZX7 SPEAKER</h2>
          <Link to="/speakers/zx7-speaker">
            <TransparentButton>SEE PRODUCT</TransparentButton>
          </Link>
        </div>
        <div className="earphones">
          <img className="mobile" src={earphonesyx1Mobile} />
          <img className="tablet" src={earphonesyx1Tablet} />
          <img className="desktop" src={earphonesyx1Desktop} />
          <div>
            <h2>YX1 EARPHONES</h2>
            <Link to="/earphones/yx1-earphones">
              <TransparentButton>SEE PRODUCT</TransparentButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="section4">
        <Advert />
      </section>
    </HomeContainer>
  );
}
