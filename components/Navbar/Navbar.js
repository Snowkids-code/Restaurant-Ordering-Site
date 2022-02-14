import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_item}>
          <div className={styles.call_button}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/telephone.png"
              alt="call_img"
              width="32"
              height="32"
            />
          </div>
          <div className={styles.navbar_texts}>
            <div className={styles.navbar_text}>ORDER NOW!</div>
            <div className={styles.navbar_text}>012 345 678</div>
          </div>
        </div>
        <div className={styles.navbar_item}>
          <div className={styles.iDrop} style={{ overflow: "hidden" }}>
            <button className={styles.dropdownBtn}>Home</button>
            <div className={styles.dropdownContent}>
              <a className={styles.drop}>Link 1</a>
              <a className={styles.drop}>Link 2</a>
              <a className={styles.drop}>Link 3</a>
            </div>
          </div>
          <ul className={styles.navbar_center_list}>
            <li className={styles.navbar_center_listItem}>HomePage</li>
            <li className={styles.navbar_center_listItem}>Products</li>
            <li className={styles.navbar_center_listItem}>Menu</li>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/logo.png"
              alt="logo"
              width="160"
              height="69"
            />
            <li className={styles.navbar_center_listItem}>Events</li>
            <li className={styles.navbar_center_listItem}>Blogs</li>
            <li className={styles.navbar_center_listItem}>Contact Us</li>
          </ul>
        </div>
        <div className={styles.navbar_item}>
          <div className={styles.navbar_cart}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/cart.png"
              alt="logo"
              width="30px"
              height="30px"
            />
            <div className={styles.navbar_cart_counter}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
