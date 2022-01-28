import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="pizza_card_container">
      <Link href={`/product/${pizza._id}`}>
        <Image
          src={pizza.img}
          alt="pizza"
          width={500}
          height={500}
          objectFit="contain"
        />
      </Link>
      <h1 className="pizza_card_title">{pizza.title}</h1>
      <span className="pizza_card_price">${pizza.prices[0]}</span>
      <p className="pizza_card_description">{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
