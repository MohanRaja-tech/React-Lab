import React from "react";

const Content = () => {
  return (
    <section className="content" id="about">
      <div className="text-section">
        <h1>Welcome to GadgetShop ⚡</h1>
        <p>
          Explore the latest and greatest gadgets at unbeatable prices. From
          smart devices to accessories, we bring technology closer to you.
        </p>
        <button className="btn">Shop Now</button>
      </div>
      <div className="image-section">
        <img
          src="/gadget3.jpg"
          alt="Featured Gadget"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            border: "1px solid #ccc",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/200?text=No+Image";
          }}
        />
      </div>
    </section>
  );
};

export default Content;
