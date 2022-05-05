import Image from "next/image";

function cart() {
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
          <tr className="cart_tr">
            <td>
              <div className="cart_image">
                <Image
                  src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className="cart_product_name">Pizza</span>
            </td>
            <td>
              <span className="cart_product_extras">
                Double Ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className="cart_product_price">$19.99</span>
            </td>
            <td>
              <span className="cart_product_quantity">2</span>
            </td>
            <td>
              <span className="cart_product_total">$39.01</span>
            </td>
          </tr>
          <tr className="cart_tr">
            <td>
              <div className="cart_image">
                <Image
                  src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className="cart_product_name">Pizza</span>
            </td>
            <td>
              <span className="cart_product_extras">
                Double Ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className="cart_product_price">$19.99</span>
            </td>
            <td>
              <span className="cart_product_quantity">2</span>
            </td>
            <td>
              <span className="cart_product_total">$39.01</span>
            </td>
          </tr>
        </table>
      </div>
      <div className="cart_right">
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
          <button className="cart_button">CHECK OUT NOW</button>
        </div>
      </div>
    </div>
  );
}

export default cart;
