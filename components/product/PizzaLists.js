import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PizzaLists({ pizza }) {
  return (
    <div className="pizza_lists_container">
      {pizza.map((pizza, i) => (
        <Link href={`/product/${pizza._id}`} key={i}>
          <div className="pizza_products_wrapper">
            <div className="pizza_img">
              <Image
                alt=""
                src={pizza.img}
                height="300"
                width="320"
                objectFit="contain"
              />
            </div>
            <div className="pizza_details">
              <p className="title">{pizza.title}</p>
              <p className="price">${pizza.prices[0]}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
