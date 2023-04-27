import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { CartContainer, OrangeButton } from "../styled-components";

export default function Cart() {
  const context = useContext(MyContext);

  const zero = context?.cartObject.findIndex(
    (element) => element.quantity == 0
  );

  if (zero != undefined) {
    context?.cartObject.splice(zero, zero + 1);
  }

  return (
    <CartContainer>
      <div className="head">
        <h2>CART ({context?.cartObject.length})</h2>
        <p
          onClick={() => {
            context?.setCartObject([]);
          }}
          className="remove"
        >
          Remove all
        </p>
      </div>

      <div className="products">
        {context?.cartObject.map((element) => {
          if (element.price != undefined) {
            context.total = context.total + element.price * element.quantity;
          }
          return (
            <div className="prod" key={Math.random()}>
              <div className="for-flex">
                <img src={element.img} />
                <div className="for-flex-inner">
                  <p className="name">{element.name}</p>
                  <p className="price">{"$ " + element.price}</p>
                </div>
              </div>
              <div className="quantity">
                <p
                  onClick={() => {
                    if (element.quantity >= 1) {
                      element.quantity--;
                      const copied = [...context.cartObject];
                      context.setCartObject(copied);
                    }
                  }}
                  className="for-hover"
                >
                  -
                </p>
                <p style={{ opacity: "1" }}>{element.quantity}</p>
                <p
                  onClick={() => {
                    element.quantity++;
                    const copied = [...context.cartObject];
                    context.setCartObject(copied);
                  }}
                  className="for-hover"
                >
                  +
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <p>TOTAL</p>
        <p className="number">{"$ " + context?.total.toLocaleString()}</p>
      </div>
      <Link to="/checkout">
        <OrangeButton
          onClick={() => {
            context?.setCart(false);
          }}
        >
          CHECKOUT
        </OrangeButton>
      </Link>
    </CartContainer>
  );
}
