import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
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
        <h1 className="product_title">{pizza.name}</h1>
        <span className="product_price">${pizza.price[size]}</span>
        <p className="product_description">{pizza.desc}</p>
        <h3>Chose your size</h3>
        <div className="product_sizes">
          <div className="product_size" onClick={()=>setSize(0)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
              layout="fill"
              alt="image"
              objectFit="contain"
            />
            <span className="product_number">Small</span>
          </div>
          <div className="product_size" onClick={()=>setSize(1)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/size.png"
              layout="fill"
              alt="image"
              objectFit="contain"
            />
            <span className="product_number">Medium</span>
          </div>
          <div className="product_size" onClick={()=>setSize(2)}>
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
            <div className="product_option">
                <input type="checkbox" id="double" name="double" className="product_ingredients_checkbox"/>
                <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className="product_option">
                <input type="checkbox" id="cheese" name="cheese" className="product_ingredients_checkbox"/>
                <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className="product_option">
                <input type="checkbox" id="spicy" name="spicy" className="product_ingredients_checkbox"/>
                <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div className="product_option">
                <input type="checkbox" id="garlic" name="garlic" className="product_ingredients_checkbox"/>
                <label htmlFor="garlic">Garlic Sauce</label>
            </div>
        </div>
        <div className="product_add">
            <input type="number" defaultValue={1} className="product_quantity"/>
            <button className="product_cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
