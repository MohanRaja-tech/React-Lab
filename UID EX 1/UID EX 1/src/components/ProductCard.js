import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/200x200?text=Product+Image";
        }}
      />
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
};

export default ProductCard;

