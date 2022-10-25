import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizza }) => {
  return (
    <div className="pizza_list_container">
      <h1 className="pizza_list_title">EXPERIENCE A DIFFERENT FEELING</h1>
      <p className="pizza_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h1>BEST SELLERS</h1>
      <div className="pizza_list_wrapper">
        {pizza.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza._id} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
