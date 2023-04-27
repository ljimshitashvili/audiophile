import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../App";
import { cashIcon } from "../assets";
import Ordered from "../components/Ordered";
import { CheckoutContainer, OrangeButton } from "../styled-components";

export default function Checkout() {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [emoneyNumber, setEmoneyNumber] = useState<string>("");
  const [emoneyPin, setEmoneyPin] = useState<string>("");
  const [payment, setPayment] = useState<string>("");

  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [phoneVal, setPhoneVal] = useState(false);
  const [adressVal, setAdressVal] = useState(false);
  const [zipVal, setZipVal] = useState(false);
  const [cityVal, setCityVal] = useState(false);
  const [countryVal, setCountryVal] = useState(false);
  const [numberVal, setNumberVal] = useState(false);
  const [pinVal, setPinVal] = useState(false);
  const [paymentVal, setPaymentVal] = useState(false);

  const [checker, setChecker] = useState(true);

  if (context?.total != undefined) {
    context.total = 0;
  }

  useEffect(() => {
    if (context?.cartObject.length == 0) {
      navigate(-1);
    }
  }, [context?.cartObject.length]);

  return (
    <CheckoutContainer>
      <p
        className="back"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </p>
      <div className="for-flex">
        <form className="checkout">
          <h1>CHECKOUT</h1>
          <div className="billing-details">
            <p className="headname">BILLING DETAILS</p>
            <div className="for-flex">
              <div className="name">
                <p>Name</p>
                <input
                  placeholder="Alexei Ward"
                  required
                  value={name}
                  onChange={(e) => {
                    if (
                      /^[A-Z]+$/i.test(e.target.value) ||
                      e.target.value == ""
                    ) {
                      setName(e.target.value);
                    }

                    if (e.target.value.length > 0) {
                      setNameVal(true);
                    } else {
                      setNameVal(false);
                    }
                  }}
                />
              </div>
              <div className="email">
                <p>Email Address</p>
                <input
                  placeholder="alexei@mail.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value.length > 0) {
                      setEmailVal(true);
                    } else {
                      setEmailVal(false);
                    }
                  }}
                />
              </div>
              <div className="phone-number">
                <p>Phone Number</p>
                <input
                  placeholder="+1 202-555-0136"
                  value={phone}
                  required
                  onChange={(e) => {
                    if (/^\d+$/.test(e.target.value) || e.target.value == "") {
                      setPhone(e.target.value);
                    }
                    if (e.target.value.length > 0) {
                      setPhoneVal(true);
                    } else {
                      setPhoneVal(false);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="shipping-info">
            <p className="headname">SHIPPING INFO</p>
            <div className="for-flex">
              <div className="adress">
                <p>Your Address</p>
                <input
                  placeholder="1137 Williams Avenue"
                  required
                  value={adress}
                  onChange={(e) => {
                    setAdress(e.target.value);
                    if (e.target.value.length > 0) {
                      setAdressVal(true);
                    } else {
                      setAdressVal(false);
                    }
                  }}
                />
              </div>
              <div className="zip">
                <p>ZIP Code</p>
                <input
                  value={zip}
                  maxLength={5}
                  required
                  placeholder="10001"
                  onChange={(e) => {
                    if (/^\d+$/.test(e.target.value) || e.target.value == "") {
                      setZip(e.target.value);
                    }
                    if (e.target.value.length == 5) {
                      setZipVal(true);
                    } else {
                      setZipVal(false);
                    }
                  }}
                />
              </div>
              <div className="City">
                <p>City</p>
                <input
                  placeholder="New York"
                  required
                  value={city}
                  onChange={(e) => {
                    if (
                      /^[A-Z]+$/i.test(e.target.value) ||
                      e.target.value == ""
                    ) {
                      setCity(e.target.value);
                    }
                    if (e.target.value.length > 0) {
                      setCityVal(true);
                    } else {
                      setCityVal(false);
                    }
                  }}
                />
              </div>
              <div className="country">
                <p>Country</p>
                <input
                  placeholder="United States"
                  required
                  value={country}
                  onChange={(e) => {
                    if (
                      /^[A-Z]+$/i.test(e.target.value) ||
                      e.target.value == ""
                    ) {
                      setCountry(e.target.value);
                    }
                    if (e.target.value.length > 0) {
                      setCountryVal(true);
                    } else {
                      setCountryVal(false);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="payment-details">
            <p className="headname">PAYMENT DETAILS</p>
            <div className="for-flex special">
              <div className="method">
                <p>Payment Method</p>
                <div className="label">
                  <input
                    type="radio"
                    name="payment"
                    value="e-money"
                    className="radio-input"
                    onChange={(e) => {
                      setPayment(e.target.value);
                      setPaymentVal(true);
                    }}
                  />
                  <label>e-Money</label>
                </div>

                <div className="label">
                  <input
                    type="radio"
                    value="Cash on Delivery"
                    className="radio-input"
                    name="payment"
                    onChange={(e) => {
                      setPayment(e.target.value);
                      setPaymentVal(true);
                    }}
                  />
                  <label>Cash on Delivery</label>
                </div>
              </div>
              <div className="special-inner">
                <div className="e-money-number">
                  <p>e-Money Number</p>
                  <input
                    placeholder="238521993"
                    value={emoneyNumber}
                    maxLength={9}
                    required
                    onChange={(e) => {
                      if (
                        /^\d+$/.test(e.target.value) ||
                        e.target.value == ""
                      ) {
                        setEmoneyNumber(e.target.value);
                      }
                      if (e.target.value.length == 9) {
                        setNumberVal(true);
                      } else {
                        setNumberVal(false);
                      }
                    }}
                  />
                </div>
                <div className="e-money-pin">
                  <p>e-Money PIN</p>
                  <input
                    placeholder="6891"
                    value={emoneyPin}
                    maxLength={4}
                    required
                    onChange={(e) => {
                      if (
                        /^\d+$/.test(e.target.value) ||
                        e.target.value == ""
                      ) {
                        setEmoneyPin(e.target.value);
                      }

                      if (e.target.value.length == 4) {
                        setPinVal(true);
                      } else {
                        setPinVal(false);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="additional"
            style={
              payment == "Cash on Delivery"
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <img src={cashIcon} />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </form>
        <div className="summary">
          <h2>SUMMARY</h2>
          <div className="products">
            {context?.cartObject.map((element) => {
              if (element.price != undefined) {
                context.total =
                  context.total + element.price * element.quantity;
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
                    <p>{"x" + element.quantity}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total">
            <p>TOTAL</p>
            <p className="number">
              {"$ " +
                (context?.total != undefined &&
                  context?.total.toLocaleString())}
            </p>
          </div>
          <div className="shipping">
            <p>SHIPPING</p>
            <p className="number">{"$ " + 50}</p>
          </div>
          <div className="grand-total">
            <p>GRAND TOTAL</p>
            <p className="number">
              {"$ " +
                (
                  context?.cartObject != undefined &&
                  context.total != undefined &&
                  context.total + 50
                ).toLocaleString()}
            </p>
          </div>
          <OrangeButton
            onClick={(e) => {
              if (
                nameVal == true &&
                emailVal == true &&
                phoneVal == true &&
                adressVal == true &&
                zipVal == true &&
                cityVal == true &&
                countryVal == true &&
                numberVal == true &&
                pinVal == true &&
                paymentVal == true
              ) {
                context?.setSubmit(true);
                setChecker(true);
                setName("");
                setEmail("");
                setPhone("");
                setAdress("");
                setZip("");
                setCity("");
                setCountry("");
                setEmoneyNumber("");
                setEmoneyPin("");
              } else {
                setChecker(false);
              }
            }}
          >
            {payment == "Cash on Delivery" ? "CONTINUE" : "CONTINUE & PAY"}
          </OrangeButton>
          <p
            style={checker == true ? { display: "none" } : { display: "block" }}
            className="wrong"
          >
            Something wrong,<br></br> check forms and try again
          </p>
        </div>
      </div>
      {context?.submit && <Ordered />}
    </CheckoutContainer>
  );
}
