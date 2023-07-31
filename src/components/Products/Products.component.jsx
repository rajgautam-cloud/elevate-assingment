import React, { useEffect, useState } from "react";
import "./Products.style.css";
import ProductCard from "../ProductCard/ProductCard.component";
const Products = (props) => {
  if (!props?.products) {
    return <h1 className="text-center">Loading...</h1>;
  }
  return (
    <div className="products">
      <div className="py-3">
        <h1 className="main_text">{props.category.toUpperCase()}</h1>
      </div>

      <div className="row mx-3">
        {props?.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
