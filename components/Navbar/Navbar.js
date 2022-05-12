import { List, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_menu_button" style={{ overflow: "hidden" }} >
          <p onClick={()=>setMenu(!menu)}>Menu</p>
          {menu && (
            <ul className="navbar_center_list_menu">
              <Link href="/">
                <li className="navbar_center_listItem_menu">HomePage</li>
              </Link>
              <li className="navbar_center_listItem_menu">Products</li>
              <li className="navbar_center_listItem_menu">Menu</li>
              <li className="navbar_center_listItem_menu">Events</li>
              <li className="navbar_center_listItem_menu">Blogs</li>
              <li className="navbar_center_listItem_menu">Contact Us</li>
            </ul>
          )}
          <h1 className='navbar_menu_title'>Phoenix</h1>
        </div>
        <div className="navbar_item">
          <div className="call_button">
            <Image
              src="/img/Phoenix.jpeg"
              alt="call_img"
              width="52"
              height="52"
            />
          </div>
          <div className="nav_texts">
            <div className="navbar_text">ORDER NOW!</div>
            <div className="navbar_text">+012 345 678</div>
          </div>
        </div>
        <div className="navbar_item">
          {/* <div className={styles.iDrop} style={{ overflow: "hidden" }}>
            <button className={styles.dropdownBtn}>Home</button>
            <div className={styles.dropdownContent}>
              <a className={styles.drop}>Link 1</a>
              <a className={styles.drop}>Link 2</a>
              <a className={styles.drop}>Link 3</a>
            </div>
          </div> */}
          <ul className="navbar_center_list">
            <Link href="/">
              <li className="navbar_center_listItem">HomePage</li>
            </Link>
            <li className="navbar_center_listItem">Products</li>
            <li className="navbar_center_listItem">Menu</li>
            <h1 className="nav_title">Phoenix</h1>
            <li className="navbar_center_listItem">Events</li>
            <li className="navbar_center_listItem">Blogs</li>
            <li className="navbar_center_listItem">Contact Us</li>
          </ul>
        </div>
        <Link href="/cart" passHref>
          <div className="navbar_item">
            <div className="navbar_cart">
              <Image
                src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/cart.png"
                alt="logo"
                width="30px"
                height="30px"
              />
              <div className="navbar_cart_counter">{quantity}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
