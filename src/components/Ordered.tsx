import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { orderIcon } from "../assets";
import { OrangeButton, OrderedContainer } from "../styled-components";

export default function Ordered() {
  const context = useContext(MyContext);

  return context?.cartObject.length != 0 ? (
    <OrderedContainer>
      <img src={orderIcon} />
      <h1>THANK YOU FOR YOUR ORDER</h1>
      <p className="text">You will receive an email confirmation shortly.</p>
      <div className="ordered-products">
        <div className="product-info">
          <div className="first">
            <div className="for-flex">
              <img src={context?.cartObject[0]?.img} />
              <div className="for-flex-inner">
                <p className="name">{context?.cartObject[0].name}</p>
                <p className="price">{"$ " + context?.cartObject[0].price}</p>
              </div>
              <div className="quantity">
                <p>{"x" + context?.cartObject[0].quantity}</p>
              </div>
            </div>
          </div>
          <p
            className="other"
            style={
              context?.cartObject.length != 1
                ? { borderTop: "1px solid rgba(0, 0, 0, 0.08)" }
                : { border: "none" }
            }
          >
            {context?.cartObject.length != 1
              ? "add " +
                (context?.cartObject && context?.cartObject.length - 1) +
                " other item(s)"
              : null}
          </p>
        </div>
        <div className="grand">
          <p>GRAND TOTAL</p>
          <p className="number">{"$ " + context?.total?.toLocaleString()}</p>
        </div>
      </div>
      <Link to="/">
        <OrangeButton
          onClick={() => {
            context?.setSubmit(false);
            if (context?.total) {
              context.total = 0;
            }
            context?.setCartObject([]);
          }}
        >
          BACK TO HOME
        </OrangeButton>
      </Link>
    </OrderedContainer>
  ) : (
    <div></div>
  );
}
