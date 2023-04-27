import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Advert, Products } from "../components";
import data from "../data.json";
import { CategoryContainer, OrangeButton, Product } from "../styled-components";

export default function Category() {
  const params = useParams();
  const products: Product[] | undefined = data.filter(
    (product) => product.category == params.category
  );

  return (
    <CategoryContainer>
      <div className="heading">
        <h1>{params.category}</h1>
      </div>
      <section className="section1">
        {products?.map((product: Product) => {
          return (
            <Product num={product.id} key={product.id}>
              <img className="mobile" src={product.categoryImage.mobile} />
              <img className="tablet" src={product.categoryImage.tablet} />
              <img className="desktop" src={product.categoryImage.desktop} />
              <div className="for-flex">
                <p className="new">
                  {product.new == true ? "NEW PRODUCT" : null}
                </p>
                <h2>{product.name}</h2>
                <p className="description">{product.description}</p>
                <Link to={"/" + product.category + "/" + product.slug}>
                  <OrangeButton>SEE PRODUCT</OrangeButton>
                </Link>
              </div>
            </Product>
          );
        })}
      </section>
      <section className="section2">
        <Products />
      </section>
      <section className="section3">
        <Advert />
      </section>
    </CategoryContainer>
  );
}
