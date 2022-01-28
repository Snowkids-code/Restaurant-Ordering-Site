import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);

  const [size, setSize] = useState(0);

  //push extras to cart
  const [extras, setExtras] = useState([]);

  //quantity
  const [quantity, setQuantity] = useState(1)

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id != option._id));
    }
  };

  return (
    <div className="product_container">
      <div className="product_left">
        <div className="product_image_container">
          <Image
            src={pizza.img}
            alt="image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="product_right">
        <h1 className="product_title">{pizza.title}</h1>
        <span className="product_price">${price}</span>
        <p className="product_description">{pizza.desc}</p>
        <h3>Chose your size</h3>
        <div className="product_sizes">
          <div className="product_size" onClick={() => handleSize(0)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
              layout="fill"
              alt="image"
              objectFit="contain"
            />
            <span className="product_number">Small</span>
          </div>
          <div className="product_size" onClick={() => handleSize(1)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
              layout="fill"
              alt="image"
              objectFit="contain"
            />
            <span className="product_number">Medium</span>
          </div>
          <div className="product_size" onClick={() => handleSize(2)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
              layout="fill"
              alt="image"
              objectFit="contain"
            />
            <span className="product_number">Large</span>
          </div>
        </div>
        <h3>Chose additional ingredients</h3>
        <div className="product_ingredients">
          {pizza.extraOptions.map((option) => (
            <div className="product_option" key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className="product_ingredients_checkbox"
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className="product_add">
          <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className="product_quantity" />
          <button className="product_cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
