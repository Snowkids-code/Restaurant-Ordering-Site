import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className="pizza_list_container">
      <h1 className="pizza_list_title">THE BEST PIZZA IN TOWN</h1>
      <p className="pizza_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="pizza_list_wrapper">
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;
