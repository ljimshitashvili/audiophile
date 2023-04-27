import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { DetailsContainer, OrangeButton } from "../styled-components";
import data from "../data.json";
import { Advert, Products } from "../components";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

export default function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const [productNum, setProductNum] = useState(0);
  const context = useContext(MyContext);

  const addCart = (productNum: number) => {
    if (context?.cartObject.some((element) => element.name == product?.model)) {
      const index = context?.cartObject.findIndex(
        (element) => element.name == product?.model
      );
      context.cartObject[index].quantity = productNum;
      context.setCartObject(context.cartObject);
    } else {
      context?.setCartObject([
        {
          name: product?.model,
          quantity: productNum,
          price: product?.price,
          img: "/assets/cart/image-" + product?.slug + ".jpg",
        },
        ...context?.cartObject,
      ]);
    }
  };

  const product: Product | undefined = data.find(
    (product) =>
      product.slug == params.product && product.category == params.category
  );
  return product !== undefined ? (
    <DetailsContainer>
      <section className="section1">
        <p
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          Go Back
        </p>

        <div className="for-flex">
          <img
            className="product-image mobile"
            src={"." + product?.image.mobile}
          />
          <img
            className="product-image tablet"
            src={"." + product?.image.tablet}
          />
          <img
            className="product-image desktop"
            src={"." + product?.image.desktop}
          />

          <div className="for-flex-inner">
            <p className="new">{product?.new == true ? "NEW PRODUCT" : null}</p>
            <h2 className="product-name">{product?.name}</h2>
            <p className="description">{product?.description}</p>
            <p className="price">{"$ " + product?.price}</p>
            <div className="add-cart">
              <div className="quantity">
                <p
                  onClick={() => {
                    productNum >= 1 && setProductNum(productNum - 1);
                  }}
                  className="for-hover"
                >
                  -
                </p>
                <p className="num">{productNum}</p>
                <p
                  onClick={() => {
                    setProductNum(productNum + 1);
                  }}
                  className="for-hover"
                >
                  +
                </p>
              </div>
              <OrangeButton
                onClick={() => {
                  if (productNum >= 1) {
                    addCart(productNum);
                    setProductNum(0);
                  }
                }}
              >
                ADD TO CART
              </OrangeButton>
            </div>
          </div>
        </div>

        <div className="for-flex2">
          <div className="features">
            <h2>FEATURES</h2>
            <p>{product?.features}</p>
          </div>
          <div className="equipments">
            <h2>IN THE BOX</h2>
            <div>
              {product?.includes.map((include) => {
                return (
                  <div className="includes" key={Math.random()}>
                    <p className="quantity">{include.quantity + "x"}</p>
                    <p className="item">{include.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="gallery">
          <img className="mobile" src={"." + product?.gallery.first.mobile} />
          <img className="mobile" src={"." + product?.gallery.second.mobile} />
          <img className="mobile" src={"." + product?.gallery.third.mobile} />

          <div>
            <img className="tablet" src={"." + product?.gallery.first.tablet} />
            <img
              className="desktop"
              src={"." + product?.gallery.first.desktop}
            />

            <img
              className="tablet"
              src={"." + product?.gallery.second.tablet}
            />
            <img
              className="desktop"
              src={"." + product?.gallery.second.desktop}
            />
          </div>
          <img className="tablet" src={"." + product?.gallery.third.tablet} />
          <img className="desktop" src={"." + product?.gallery.third.desktop} />
        </div>
        <div className="others">
          <h2>YOU MAY ALSO LIKE</h2>

          <div className="for-flex">
            {product?.others.map((other) => {
              const category = data.find((prod) => prod.slug == other.slug);

              return (
                <div key={Math.random()}>
                  <img className="mobile" src={"." + other.image.mobile} />
                  <img className="tablet" src={"." + other.image.tablet} />
                  <img className="desktop" src={"." + other.image.desktop} />
                  <h2>{other.name}</h2>

                  <Link to={"/" + category?.category + "/" + other.slug}>
                    <OrangeButton>SEE PRODUCT</OrangeButton>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section2">
        <Products />
      </section>
      <section className="section3">
        <Advert />
      </section>
    </DetailsContainer>
  ) : (
    <div style={{ height: "100vw", fontSize: "30px", fontWeight: "700" }}>
      404<br></br> PAGE NOT FOUND
    </div>
  );
}
