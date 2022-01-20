import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_item">
        <Image
          src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612"
          alt="image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="footer_item">
        <div className="footer_card">
          <h2 className="footer_card_motto">
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className="footer_card">
          <h1 className="footer_card_title">FIND OUR RESTAURANTS</h1>
          <p className="footer_card_address">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="footer_card_address">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="footer_card_address">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="footer_card_address">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
        </div>
        <div className="footer_card">
          <h1 className="footer_card_title">WORKING HOURS</h1>
          <p className="footer_card_address">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="footer_card_address">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
