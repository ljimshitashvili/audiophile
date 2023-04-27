import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0px 39px;
    align-items: flex-start;
  }

  @media (min-width: 1440px) {
    padding: 0px 165px;
  }

  .for-flex {
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    img {
      margin-top: 52px;
      margin-top: 48px;
      width: 143px;
      height: 25px;

      @media (min-width: 768px) {
        margin-top: 56px;
      }
    }

    .pages {
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 160px;
      color: white;
      font-weight: 700;

      @media (min-width: 768px) {
        flex-direction: row;
        width: 460px;
        height: 30px;
      }

      a {
        color: white;

        @media (min-width: 1440px) {
          &:hover {
            color: #d87d4a;
            transition: 0.3s;
          }
        }
      }
    }
  }

  .text,
  .copyright {
    margin-top: 48px;
    width: 90%;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
    margin: 48px auto 0px;

    @media (min-width: 768px) {
      margin-left: 0px;
      text-align: start;
    }

    @media (min-width: 1440px) {
      width: 540px;
    }
  }

  .for-flex2 {
    width: 100%;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    @media (min-width: 1440px) {
      margin-bottom: 48px;
    }

    .icons {
      width: 100px;
      display: flex;
      justify-content: space-between;
      margin: 50px auto 38px;

      @media (min-width: 1440px) {
        margin-top: -50px;

        img {
          width: 24px;
          height: 24px;
          cursor: pointer;

          &:hover {
            filter: invert(56%) sepia(39%) saturate(834%) hue-rotate(336deg)
              brightness(95%) contrast(77%);
            transition: 0.3s;
          }
        }
      }
    }
  }
`;

export default FooterContainer;
