import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

function cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart_container">
      <div className="cart_left">
        <table className="cart_table">
          <tr className="cart_tr_title">
            <th>Product</th>
            <th>Name</th>

            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.products.map((product) => (
            <tr className="cart_tr" key={product.id}>
              <td>
                <div className="cart_image">
                  <Image
                    src={product.img}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className="cart_product_name">{product.title}</span>
              </td>
              <td>
                <span className="cart_product_extras">
                  {product.extras.map((extra) => (
                    <span key={extra.id}>{extra.text}, </span>
                  ))}
                </span>
              </td>
              <td>
                <span className="cart_product_price">${product.price}</span>
              </td>
              <td>
                <span className="cart_product_quantity">
                  {product.quantity}
                </span>
              </td>
              <td>
                <span className="cart_product_total">
                  ${product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="cart_right" onClick={()=>console.log(cart)}>
        <div className="cart_wrapper">
          <h2 className="cart_product_title">CART TOTAL</h2>
          <div className="cart_total_text">
            <b className="cart_total_text_title">Subtotal:</b>${cart.total}
          </div>
          <div className="cart_total_text">
            <b className="cart_total_text_title">Discount:</b>$0.00
          </div>
          <div className="cart_total_text">
            <b className="cart_total_text_title">Total:</b>${cart.total}
          </div>
          <button className="cart_button">CHECK OUT NOW</button>
        </div>
      </div>
    </div>
  );
}

export default cart;
