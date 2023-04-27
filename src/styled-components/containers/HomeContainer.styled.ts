import styled from "styled-components";
import {
  circlePattern,
  imageHeaderMobile,
  speakerZX7Mobile,
  imageHeaderTablet,
  speakerZX7Tablet,
  imageHeaderDesktop,
  speakerZX7Desktop,
} from "../../assets";

const HomeContainer = styled.div`
  .section1 {
    width: 100%;
    height: 600px;
    background-image: url(${imageHeaderMobile}),
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-blend-mode: multiply;
    background-size: 100% 100%;
    background-position: center -90px;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      background-image: url(${imageHeaderTablet}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }

    @media (min-width: 1440px) {
      height: 729px;
      background-image: url(${imageHeaderDesktop});
    }
  }

  .content {
    width: 100%;
    margin: auto;
    padding-top: 110px;

    @media (min-width: 1440px) {
      margin: 0px;
      width: 396px;
      margin-left: 165px;
    }

    .head {
      color: white;
      margin-bottom: -20px;
      width: 100%;
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 10px;
      opacity: 0.5;

      @media (min-width: 1440px) {
        text-align: start;
      }
    }

    h1 {
      color: white;
      width: 100%;
      text-align: center;
      font-size: 36px;
      margin-top: 50px;
      letter-spacing: 1.28571px;
      line-height: 40px;

      @media (min-width: 768px) {
        font-size: 56px;
        width: 400px;
        letter-spacing: 2px;
        line-height: 58px;
        margin: 30px auto;
      }

      @media (min-width: 1440px) {
        text-align: start;
      }
    }

    .text {
      width: 328px;
      margin: 24px auto;
      text-align: center;
      font-size: 15px;
      color: white;
      opacity: 0.75;

      @media (min-width: 768px) {
        width: 349px;
      }

      @media (min-width: 1440px) {
        text-align: start;
        margin: 0px;
      }
    }

    a {
      width: 160px;
      height: 48px;
      display: block;
      margin: 40px auto;

      @media (min-width: 1440px) {
        margin: 40px 0px;
      }
    }
  }

  .section2 {
    margin-top: -70px;

    @media (min-width: 768px) {
      margin-top: -20px;
      width: 90%;
      margin: auto;
    }

    @media (min-width: 1440px) {
      width: 80%;
      margin: auto;
    }
  }

  .section3 {
    width: 90%;
    margin: auto;

    @media (min-width: 1440px) {
      width: 80%;
    }

    .speaker9 {
      background-color: #d87d4a;
      background-image: url(${circlePattern});
      background-size: 620px;
      background-position: center -130px;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      overflow-y: hidden;

      @media (min-width: 768px) {
        background-size: 1100px;
        background-position: center -330px;
      }

      @media (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
      }

      img {
        width: 172px;
        height: 207px;
        padding-top: 57px;
      }

      .tablet,
      .desktop {
        display: none;
      }

      @media (min-width: 768px) {
        .mobile {
          display: none;
        }

        .tablet {
          display: block;
        }
      }

      @media (min-width: 1440px) {
        .tablet {
          display: none;
        }

        .desktop {
          width: 410px;
          height: 493px;
          display: block;
          margin-bottom: -10px;
        }
      }

      .for-flex {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1440px) {
          align-items: start;
        }

        h2 {
          font-size: 36px;
          font-weight: 700;
          color: white;
          width: 200px;
          text-align: center;
          margin-top: 32px;

          @media (min-width: 768px) {
            font-size: 58px;
            width: 261px;
          }

          @media (min-width: 1440px) {
            text-align: start;
          }
        }

        p {
          width: 280px;
          text-align: center;
          color: white;
          opacity: 0.75;
          font-weight: 500;
          line-height: 25px;
          margin-top: 25px;

          @media (min-width: 1440px) {
            text-align: start;
            width: 349px;
          }
        }

        button {
          display: block;
          margin: 24px auto 55px;

          @media (min-width: 1440px) {
            margin-left: 0px;
          }
        }
      }
    }

    .speaker7 {
      height: 340px;
      background-image: url(${speakerZX7Mobile});
      background-size: 100% 340px;
      background-repeat: no-repeat;
      border-radius: 8px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (min-width: 768px) {
        background-image: url(${speakerZX7Tablet});
      }

      @media (min-width: 1440px) {
        background-image: url(${speakerZX7Desktop});
      }

      h2 {
        font-size: 28px;
        letter-spacing: 2px;
        margin-left: 20px;
        margin-bottom: 35px;
        
        @media (min-width: 1440px) {
          margin-left: 110px;
        }
      }

      a {
        width: 160px;
        height: 48px;
        display: block;
        margin-left: 20px;

        @media (min-width: 1440px) {
          margin-left: 110px;
        }
      }
    }

    .earphones {
      margin-top: 20px;
      .tablet,
      .desktop {
        display: none;
      }

      @media (min-width: 768px) {
        display: flex;
        max-height: 220px;
        justify-content: space-between;

        .mobile {
          display: none;
        }

        .tablet {
          display: block;
        }
      }

      @media (min-width: 1440px) {
        .tablet {
          display: none;
        }

        .desktop {
          display: block;
          height: 320px;
        }
      }

      img {
        width: 100%;
        border-radius: 8px;

        @media (min-width: 768px) {
          width: 48%;
        }
      }

      div {
        margin-top: 20px;
        width: 100%;
        height: 200px;
        background-color: #f1f1f1;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        @media (min-width: 768px) {
          width: 48%;
          height: 220px;
          margin: 0px;
        }

        @media (min-width: 1440px) {
          height: 320px;
          justify-content: center;
        }

        h2,
        button {
          margin-left: 20px;
          margin: 20px 95px;
        }
      }
    }
  }

  .section4 {
    width: 100%;
    margin: 120px auto 96px;
  }
`;

export default HomeContainer;
