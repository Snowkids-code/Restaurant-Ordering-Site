import { useState } from "react";

const OrderDetails = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState('')
    const [address, setAddress] = useState('')

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0})
    }
  return (
    <div className="cash_modal_container">
      <div className="cash_modal_wrapper">
        <h1 className="title">You will pay $12 after delivery.</h1>
        <div className="item">
          <lable className='label'>Name Surname</lable>
          <input
            placeholder="John Doe"
            type="text"
            className='input'
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className='item'>
          <label className='label'>Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className='input'
          />
        </div>
        <div className='item'>
          <label className='label'>Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className='text_area'
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className='button' onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
