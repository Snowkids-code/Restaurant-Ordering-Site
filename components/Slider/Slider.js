import Image from "next/image";
import React from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg",
    "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612",
    "https://media.istockphoto.com/photos/mini-salami-pizza-on-a-dark-wooden-background-top-view-picture-id639963606?k=20&m=639963606&s=612x612&w=0&h=LSevcUTvX3N-F2Suj000a-s1qF4uaocsr4RcG5d0aS0=",
  ];

  return (
    <div className={styles.slider_container}>
      <div className={styles.arrow_container} style={{ left: 0 }}>
        <Image
          src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/arrowl.png"
          alt="arrowLeft"
          layout="fill"
        />
      </div>

      <div className={styles.slider_wrapper}>
        {images.map((img, i) => (
          <div key={i} className={styles.img_container}>
            <Image src={img} alt="pizza" layout="fill"objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrow_container} style={{ right: 0 }}>
        <Image
          src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/arrowr.png"
          alt="arrowRight"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Slider;
