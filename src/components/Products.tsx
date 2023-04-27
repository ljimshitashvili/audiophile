import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import {
  arrowIcon,
  earphonesMobile,
  earphonesTablet,
  headphonesDesktop,
  headphonesMobile,
  headphonesTablet,
  speakersMobile,
  speakersTablet,
  speakersDesktop,
  earphonesDesktop,
} from "../assets";
import { ProductsContainer } from "../styled-components";

export default function Products() {
  const context = useContext(MyContext);
  const productsArr = [
    {
      imgMobile: headphonesMobile,
      imgTablet: headphonesTablet,
      imgDesktop: headphonesDesktop,
      name: "HEADPHONES",
      link: "/headphones",
    },
    {
      imgMobile: speakersMobile,
      imgTablet: speakersTablet,
      imgDesktop: speakersDesktop,
      name: "SPEAKERS",
      link: "/speakers",
    },
    {
      imgMobile: earphonesMobile,
      imgTablet: earphonesTablet,
      imgDesktop: earphonesDesktop,
      name: "EARPHONES",
      link: "/earphones",
    },
  ];

  return (
    <ProductsContainer>
      {productsArr.map((product) => {
        return (
          <Link to={product.link} key={Math.random()}>
            <div
              className="wrapper"
              onClick={() => {
                context?.setMenu(false);
              }}
            >
              <img className="mobile" src={product.imgMobile} />
              <img className="tablet" src={product.imgTablet} />
              <img className="desktop" src={product.imgDesktop} />

              <p style={{ color: "black" }}>{product.name}</p>

              <div className="forflex">
                <p className="for-hover">SHOP</p>
                <img src={arrowIcon} />
              </div>
            </div>
          </Link>
        );
      })}
    </ProductsContainer>
  );
}
