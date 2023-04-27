import styled from "styled-components";

const CartContainer = styled.div`
  position: absolute;
  right: 50;
  background-color: white;
  width: calc(90% - 57px);
  max-width: 377px;
  top: 99px;
  padding: 32px 29px 31px 28px;
  border-radius: 8px;

  @media (min-width: 768px) {
    right: 0;
    margin-right: 46px;
  }

  p {
    font-size: 15px;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .remove {
      opacity: 0.5;
      text-decoration: underline;
      cursor: pointer;

      @media (min-width: 1440px) {
        &:hover {
          color: #d87d4a;
          transition: 0.3s;
        }
      }
    }
  }

  .products {
    margin-top: 31px;
    max-height: 300px;
    overflow-y: auto;
    border-top: 1px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;

    @media (min-width: 1440px) {
      ::-webkit-scrollbar {
        width: 10px;
      }
    }

    .prod {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 24px;

      img {
        width: 64px;
        border-radius: 8px;
      }

      .for-flex {
        display: flex;
        align-items: center;

        .for-flex-inner {
          margin-left: 16px;
          font-size: 15px;
          font-weight: 700;

          .name {
            line-height: 25px;
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
        justify-content: space-around;
        background-color: #f1f1f1;
        width: 96px;
        height: 32px;

        p {
          font-size: 13px;
          font-weight: 700;
          opacity: 0.7;
          cursor: pointer;
          width: 20%;
          line-height: 30px;
          text-align: center;
        }

        .for-hover {
          @media (min-width: 1440px) {
            &:hover {
              filter: invert(56%) sepia(39%) saturate(834%) hue-rotate(336deg)
                brightness(95%) contrast(77%);
              transition: 0.3s;
            }
          }
        }

        .num {
          opacity: 1;
          cursor: text;
        }
      }
    }
  }

  .total {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 15px;
      opacity: 0.5;
    }

    .number {
      font-size: 18px;
      font-weight: 700;
      opacity: 1;
    }
  }

  button {
    width: 100%;
    margin-top: 24px;
  }
`;

export default CartContainer;
