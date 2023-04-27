import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { cartIcon, hamuberIcon, logo } from "../assets";
import HeaderContainer from "../styled-components/containers/HeaderContainer.styled";
import Cart from "./Cart";
import Products from "./Products";

export default function Header() {
  const context = useContext(MyContext);

  useEffect(() => {
    if (context?.menu == true) {
      context.setCart(false);
    }
  }, [context?.menu]);

  useEffect(() => {
    if (context?.cart == true) {
      context.setMenu(false);
    }
  }, [context?.cart]);

  return (
    <HeaderContainer>
      <div className="for-flex-header">
        <img
          src={hamuberIcon}
          className="hamburger"
          onClick={() => {
            context?.setMenu(!context?.menu);
          }}
        />
        <img src={logo} className="logo" />

        <div className="desktop-menu">
          <Link to={"/"}>HOME</Link>
          <Link to={"/headphones"}>HEADPHONES</Link>
          <Link to={"/speakers"}>SPEAKERS</Link>
          <Link to={"/earphones"}>EARPHONES</Link>
        </div>

        <div
          className="cart-logo"
          onClick={() => {
            context?.setCart(!context?.cart);
          }}
        >
          <img src={cartIcon} />
          <p
            style={
              context?.cartObject.length != 0
                ? { display: "flex" }
                : { display: "none" }
            }
            className="count"
          >
            {context?.cartObject.length}
          </p>
        </div>

        <div className="menu">{context?.menu && <Products />}</div>

        {context?.cart && <Cart />}
      </div>
    </HeaderContainer>
  );
}
