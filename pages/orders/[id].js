import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) {
      return "order_done";
    }
    if (index - status === 1) {
      return "order_progress";
    }
    if (index - status > 1) {
      return "order_undone";
    }
  };

  return (
    <div className="order_container">
      <div className="order_left">
        <div className="order_row">
          <table className="cart_table">
            <tr className="cart_tr_title">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className="cart_tr">
              <td>
                <span className="order_id">125646sd85</span>
              </td>
              <td>
                <span className="customer_name">John Doe</span>
              </td>
              <td>
                <span className="customer_address">Elton st. 212-33 LA</span>
              </td>
              <td>
                <span className="cart_product_total">$39.01</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="order_row">
          <div className={statusClass(0)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/paid.png"
              alt="image"
              width={30}
              height={30}
              objectFit="contain"
            />
            <span>Payment</span>
            <div className="order_checked_icon">
              <Image
                className="order_checked_btn"
                src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png"
                alt="image"
                width={20}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/bake.png"
              alt="image"
              width={30}
              height={30}
              objectFit="contain"
            />
            <span>Preparing</span>
            <div className="order_checked_icon">
              <Image
                className="order_checked_btn"
                src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png"
                alt="image"
                width={20}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/bike.png"
              alt="image"
              width={30}
              height={30}
              objectFit="contain"
            />
            <span>On the way</span>
            <div className="order_checked_icon">
              <Image
                className="order_checked_btn"
                src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png"
                alt="image"
                width={20}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/delivered.png"
              alt="image"
              width={30}
              height={30}
              objectFit="contain"
            />
            <span>Deliver</span>
            <div className="order_checked_icon">
              <Image
                className="order_checked_btn"
                src="https://raw.githubusercontent.com/safak/youtube/next-pizza-ui/public/img/checked.png"
                alt="image"
                width={20}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="order_right">
        <div className="cart_wrapper">
          <h2 className="cart_product_title">CART TOTAL</h2>
          <div className="cart_total_text">
            <b className="cart_total_text_title">Subtotal:</b>$79.60
          </div>
          <div className="cart_total_text">
            <b className="cart_total_text_title">Discount:</b>$0.00
          </div>
          <div className="cart_total_text">
            <b className="cart_total_text_title">Total:</b>$79.60
          </div>
          <button disabled className="order_button">
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
