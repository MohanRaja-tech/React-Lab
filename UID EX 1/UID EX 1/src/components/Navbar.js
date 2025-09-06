import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">GADGET</div>
        <div className="nav-menu">
          <a href="#products">Products</a>
          <a href="#deals">Today's Deal</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="nav-actions">
          <button className="cart-btn">🛒</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
