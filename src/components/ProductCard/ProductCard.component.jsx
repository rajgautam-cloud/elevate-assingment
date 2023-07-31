import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 col-sm-4 col-12 px-3 py-3">
      <div class="card">
        <img
          class="card-img-top"
          src={product.image}
          alt="Card image cap"
          style={{ height: "40vh", padding: "20px" }}
        />
        <div class="card-body">
          <h5 class="card-title">
            {product.title.length > 25
              ? product.title.slice(0, 25) + "..."
              : product.title}
          </h5>
          <p>
            {product.description.length > 60
              ? product.description.slice(0, 60) + "..."
              : product.description}
          </p>
          <a
            href="#"
            class="btn btn-secondary"
            style={{ backgroundColor: "#f26522", border: "none" }}
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
