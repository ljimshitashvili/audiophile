import styled from "styled-components";

const OrderedContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: calc(90% - 64px);
  max-width: 377px;
  padding: 32px;
  border-radius: 8px;
  z-index: 2;

  @media (min-width: 768px) {
    max-width: 470px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-top: 23px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 32px;
      width: 284px;
      line-height: 36px;
    }
  }

  .text {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
  }

  .ordered-products {
    width: 100%;
    margin: 24px auto;
    background-color: #f1f1f1;
    border-radius: 8px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;

      .product-info {
        width: 55%;
      }
    }

    .first {
      padding: 32px 29px 31px 28px;

      img {
        width: 64px;
        border-radius: 8px;
      }

      .for-flex {
        display: flex;
        align-items: center;
        width: 100%;

        .for-flex-inner {
          margin-left: 16px;
          font-size: 15px;
          font-weight: 700;

          .name {
            line-height: 25px;
            width: 80px;
          }

          .price {
            opacity: 0.5;
            line-height: 25px;
          }
        }
      }
      .quantity {
        display: flex;
        align-items: center;
        justify-content: end;
        background-color: #f1f1f1;
        width: 90px;
        height: 32px;

        p {
          font-size: 13px;
          font-weight: 700;
          opacity: 0.7;
        }

        .num {
          opacity: 1;
        }
      }
    }

    .other {
      padding-top: 12px;
      margin-bottom: 25px;
      font-weight: 700;
      font-size: 12px;
      opacity: 0.5;
      text-align: center;
    }

    .grand {
      height: 92px;
      width: 100%;
      background-color: black;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      @media (min-width: 768px) {
        width: 40%;
        height: 182px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      p {
        color: white;
        margin-left: 24px;
        font-size: 15px;
        opacity: 0.5;
        padding-top: 15px;
      }

      .number {
        opacity: 1;
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
  button {
    width: 100%;
    margin-top: 24px;
  }
`;
export default OrderedContainer;
