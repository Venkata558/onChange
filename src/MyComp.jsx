import React, { useState } from "react";
function MyComp() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  function handleCommentChange(e) {
    setComment(e.target.value);
  }
  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }
  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div className="container">
      <input className="inputClass" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input
        className="inputClass"
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      />
      <p>Quantity: {quantity}</p>
      <textarea className="inputClass" 
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Giftcard">Giftcard</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick-up"
          checked={shipping === "Pick-up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default MyComp;
