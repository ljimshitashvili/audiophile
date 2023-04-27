import styled from "styled-components";

const AdvertContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1440px) {
    width: 80%;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
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
    flex-direction: row-reverse;
    justify-content: space-between;

    .tablet {
      display: none;
    }

    .desktop {
      display: block;
    }
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 1px;
    width: 300px;
    text-align: center;
    margin-top: 30px;

    @media (min-width: 768px) {
      font-size: 40px;
      width: 573px;
      line-height: 44px;
    }

    @media (min-width: 1440px) {
      text-align: start;
    }
  }

  p {
    margin-top: 30px;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
    text-align: center;

    @media (min-width: 768px) {
      width: 573px;
    }

    @media (min-width: 1440px) {
      text-align: start;
    }
  }
`;

export default AdvertContainer;
