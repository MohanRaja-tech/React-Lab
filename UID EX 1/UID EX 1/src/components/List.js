import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Smartphone X20",
    desc: "5G | 128GB | 48MP Camera",
    image: "/gadget1.jpg", // gadget1.jpg exists in public folder
  },
  {
    name: "Wireless Headphones",
    desc: "Noise Cancelling | 40hrs Battery",
    image: "/gadget2.jpg", // gadget2.jpg exists in public folder
  },
  {
    name: "Smartwatch Pro",
    desc: "Fitness Tracking | Waterproof",
    image: "/gadget3.jpg", // Changed to gadget3.jpg since it exists in public folder
  },
];

const List = () => {
  return (
    <section className="list" id="products">
      <h2>Our Top Gadgets</h2>
      <div
        className="products-grid"
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </section>
  );
};

export default List;

