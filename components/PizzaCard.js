import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className="pizza_card_container">
      <Image
        src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
        alt="pizza"
        width={500}
        height={500}
        objectFit="contain"
      />
      <h1 className="pizza_card_title">FIORI DI ZUCCA</h1>
      <span className="pizza_card_price">$19.90</span>
      <p className="pizza_card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
