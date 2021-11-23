import React, { useRef } from "react";

const Navbar = () => {
  return (
    <section className="navbar flex">
      <h1>emmertjie velddrif</h1>
      <ul>
        <li className="nav-item">
          <a href="#menu">HOME</a>
        </li>
        <li className="nav-item">
          <a href="#story">OUR STORY</a>
        </li>
        <li className="nav-item">
          <a href="#contact">CONTACT US</a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
