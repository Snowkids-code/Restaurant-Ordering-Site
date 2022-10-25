import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetails from "../components/Modal/OrderDetails";

function cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  // This values are the props in the UI
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      //go to the next page after getting a 201 status code
      // res.status === 201 && router.push("/orders/" + res.data._id);
      //go to the next page after approval
      router.push("/orders/" + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
  return (
    <div className="cart_one_container">
      <div className="cart_one_wrapper">
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
          <div className="cart_right">
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
              {open ? (
                <div className="cart_payment_method">
                  <button
                    className="cart_cash_button"
                    onClick={() => setCash(true)}
                  >
                    CASH ON DELIVERY
                  </button>
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "ARIbV8OWgUm188KP1Y1FPpOUgybyEawZyUjUCJIhlLgjWSon-bLJXekI4rNleuE0giWhfnCBc_58-un_",
                      components: "buttons",
                      currency: "USD",
                      "disable-funding": "credit,card",
                    }}
                  >
                    <ButtonWrapper currency={currency} showSpinner={false} />
                  </PayPalScriptProvider>
                </div>
              ) : (
                <button className="cart_button" onClick={() => setOpen(true)}>
                  CHECK OUT NOW!
                </button>
              )}
              {/* <PayPalScriptProvider
            options={{
              "client-id": "test",
              components: "buttons",
              currency: "USD",
              "disable-funding": "credit,card",
            }}
          >
            <ButtonWrapper currency={currency} showSpinner={false} />
          </PayPalScriptProvider> */}
            </div>
          </div>
          {cash && (
            <OrderDetails total={cart.total} createOrder={createOrder} />
          )}
        </div>
      </div>
    </div>
  );
}

export default cart;
