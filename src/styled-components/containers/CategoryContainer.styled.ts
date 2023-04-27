import styled from "styled-components";
import { imageHeaderDesktop } from "../../assets";

const CategoryContainer = styled.div`
  .heading {
    width: 100vw;
    background-color: black;

    @media (min-width: 1440px) {
      background-image: url(${imageHeaderDesktop});
      background-size: 500%;
    }

    h1 {
      text-transform: uppercase;
      color: white;
      font-size: 28px;
      font-weight: 700;
      padding: 32px;
      text-align: center;

      @media (min-width: 768px) {
        font-size: 40px;
        padding: 105px 0px 97px;
      }
    }
  }

  .section1 {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: -56px;

    div {
      width: 90%;
      display: flex;

      @media (min-width: 1440px) {
        width: 80%;
      }

      align-items: center;
      margin-top: 120px;

      img {
        max-width: 100%;
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
          display: block;
          width: 540px;
          height: 560px;
        }
      }

      .for-flex {
        margin: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1440px) {
          width: 450px;
          align-items: start;
        }

        .new {
          text-align: center;
          margin-top: 32px;
          color: #d87d4a;
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 10px;

          @media (min-width: 768px) {
            margin-top: 52px;
          }

          @media (min-width: 1440px) {
            text-align: start;
          }
        }

        h2 {
          text-align: center;
          margin-top: 24px;
          width: 327px;
          font-weight: 700;
          font-size: 28px;
          line-height: 38px;
          letter-spacing: 1px;

          @media (min-width: 768px) {
            font-size: 40px;
          }

          @media (min-width: 1440px) {
            text-align: start;
          }
        }

        .description {
          text-align: center;
          width: 327px;
          font-weight: 500;
          font-size: 15px;
          line-height: 25px;
          opacity: 0.5;
          margin-top: 24px;

          @media (min-width: 768px) {
            width: 572px;
          }

          @media (min-width: 1440px) {
            width: 445px;
            text-align: start;
          }
        }

        button {
          margin-top: 24px;
        }
      }
    }
  }

  .section2 {
    margin-top: 135px;

    @media (min-width: 768px) {
      width: 90%;
      margin: 100px auto 0px;
    }
  }

  .section3 {
    margin: 120px 0px;
  }
`;

export default CategoryContainer;
