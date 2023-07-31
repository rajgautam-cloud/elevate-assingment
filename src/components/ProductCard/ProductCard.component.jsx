import React from "react";
import "./ProductCard.styles.css";
const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 col-sm-4 col-12 px-3 py-3">
      <div className="card">
        <img
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
          style={{ height: "40vh", padding: "20px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.title.length > 25
              ? product.title.slice(0, 25) + "..."
              : product.title}
          </h5>
          <p>
            {product.description.length > 60
              ? product.description.slice(0, 60) + "..."
              : product.description}
          </p>
          <a href="#" className="btn btn-secondary buy_now">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
