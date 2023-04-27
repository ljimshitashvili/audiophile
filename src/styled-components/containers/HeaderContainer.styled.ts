import styled from "styled-components";
import { imageHeaderDesktop } from "../../assets";

const HeaderContainer = styled.header`
  background-color: black;
  position: relative;
  z-index: 2;

  @media (min-width: 1440px) {
    background-image: url(${imageHeaderDesktop}),
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .for-flex-header {
    position: relative;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .desktop-menu {
      display: none;
    }

    @media (min-width: 768px) {
      justify-content: start;
    }

    @media (min-width: 1440px) {
      background-image: url(${imageHeaderDesktop}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      background-color: transparent;
      margin: auto;
      width: 80%;

      .desktop-menu {
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin-left: 15%;

        a {
          color: white;
          cursor: pointer;
          font-weight: 700;
          font-size: 13px;

          &:hover {
            color: #d87d4a;
            transition: 0.3s;
          }
        }
      }
    }

    .hamburger {
      @media (min-width: 768px) {
        margin-left: 39px;
      }

      @media (min-width: 1440px) {
        display: none;
      }
    }

    .logo {
      @media (min-width: 768px) {
        margin-left: 42px;
      }

      @media (min-width: 1440px) {
        margin: 0px;
      }
    }

    .cart-logo {
      position: relative;
      cursor: pointer;

      @media (min-width: 768px) {
        position: absolute;
        right: 0;
        margin-right: 39px;
      }

      img {
        @media (min-width: 1440px) {
          &:hover {
            filter: invert(56%) sepia(39%) saturate(834%) hue-rotate(336deg)
              brightness(95%) contrast(77%);
            transition: 0.3s;
          }
        }
      }

      .count {
        position: absolute;
        top: -7px;
        right: -7px;
        background-color: #d87d4a;
        color: white;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        border-radius: 100%;
      }
    }

    .menu {
      position: absolute;
      background-color: white;
      width: 100%;
      top: 75px;
      cursor: pointer;
    }
  }
`;

export default HeaderContainer;
