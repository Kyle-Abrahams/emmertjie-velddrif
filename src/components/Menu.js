import React, { useState } from "react";
import data from "../data";

const Menu = () => {
  const [catagories, setCatagories] = useState("drinks");
  return (
    <section className="menu-container" id="menu">
      <h2 className="section-header">Menu</h2>
      <ul className="menu-names-list">
        <li
          className={`${catagories === "drinks" ? "active" : ""} menu-names`}
          onClick={() => setCatagories("drinks")}
        >
          <p className="menu-name">Drinks</p>
        </li>
        <li
          className={`${catagories === "breakfast" ? "active" : ""} menu-names`}
          onClick={() => setCatagories("breakfast")}
        >
          <p className="menu-name">Breakfast</p>
        </li>
        <li
          className={`${
            catagories === "sandwiches" ? "active" : ""
          } menu-names`}
          onClick={() => setCatagories("sandwiches")}
        >
          <p className="menu-name">Sandwiches</p>
        </li>
        <li
          className={`${catagories === "salads" ? "active" : ""} menu-names`}
          onClick={() => setCatagories("salads")}
        >
          <p className="menu-name">Salads</p>
        </li>
        <li
          className={`${
            catagories === "light meals" ? "active" : ""
          } menu-names`}
          onClick={() => setCatagories("light meals")}
        >
          <p className="menu-name">Light Meals</p>
        </li>
        <li
          className={`${catagories === "desert" ? "active" : ""} menu-names`}
          onClick={() => setCatagories("desert")}
        >
          <p className="menu-name">Deserts</p>
        </li>
      </ul>

      <div className="menu">
        {data
          .filter((item) => item.catagory === catagories)
          .map((filteredItem) => {
            return (
              <div className="menu-item" key={filteredItem.id}>
                <div className="menu-item__details">
                  <h4 className="menu-item__name">{filteredItem.name}</h4>
                  <p className="menu-item__desciption">
                    {filteredItem.description}
                  </p>
                </div>
                <h3 className="menu-item__price">{filteredItem.price}</h3>
              </div>
            );
          })}
      </div>

      <div className="menu-text">
        <p>
          All food is prepared by <span>one</span> person, it may take a while,
          but it’s prepared specially for <span>you</span>.
        </p>
      </div>
    </section>
  );
};

export default Menu;
