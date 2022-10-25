import React from "react";
import PizzaLists from "../../components/product/PizzaLists";
import Product from "../../models/Product";
import dbConnect from "../../util/mongo";

export default function Products({ pizza }) {
  return (
    <div className="products_container">
      <div className="products_wrapper">
        <h1>All the pizza you can get</h1>
        <PizzaLists pizza={pizza} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  await dbConnect();
  const res = await Product.find();
  return {
    props: {
      pizza: JSON.parse(JSON.stringify(res)),
    },
  };
};
