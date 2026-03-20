import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCode } from "react-qr-code";
import { useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";
import { addOrder } from "./orderSlice";
import "./Checkout.css";

// ✅ Toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, finalAmount, customerEmail, orderId } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!cartItems || cartItems.length === 0) {
    return <h2>No order found!</h2>;
  }

  const handlePayment = () => {
    // Prepare purchase details
    const purchaseDetails = {
      date: new Date().toLocaleString(),
      items: [...cartItems],
      totalPrice: finalAmount.toFixed(2),
      orderId: orderId,
      email: customerEmail,
    };

    // Info toast before placing order
    toast.info(`🛒 Your Order ${orderId} is about to be placed!`, {
      position: "top-center",
      autoClose: 3000,
    });

    // Dispatch order
    dispatch(addOrder(purchaseDetails));

    // Success toast
    toast.success(`✅ Order ${orderId} has been placed successfully!`, {
      position: "top-center",
      autoClose: 3000,
    });

    // Clear cart + navigate
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Toast container */}
        <ToastContainer position="top-center" autoClose={3000} />

        <h1 className="checkout-title">🧾 Secure Checkout</h1>

        {/* Order Summary */}
        <div className="summary-box">
          <h2>Order Summary</h2>
          {cartItems.map((item, index) => (
            <div key={item.id + "-" + index} className="checkout-item">
              <span>{item.name}</span>
              <span>
                {item.quantity} x ₹{item.price}
              </span>
            </div>
          ))}
          <hr />
          <div className="total-payable">
            <span>Total Payable</span>
            <span>₹{finalAmount.toFixed(2)}</span>
          </div>
          <p className="email-display">📧 {customerEmail}</p>
          <p className="order-id">🆔 Order ID: {orderId}</p>
        </div>

        {/* Payment Selection */}
        <div className="payment-section">
          <h2>Select Payment Method</h2>
          <div className="payment-buttons">
            <button
              onClick={() => setPaymentMethod("qr")}
              className="pay-btn"
            >
              📱 QR Payment
            </button>
            <button
              onClick={() => setPaymentMethod("card")}
              className="pay-btn"
            >
              💳 Card Payment
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        {paymentMethod === "qr" && (
          <div className="qr-section">
            <h3>Scan QR to Pay ₹{finalAmount.toFixed(2)}</h3>
            <QRCode
              value={`upi://pay?pa=mounikasaikarri@ybl&pn=SindhuRestaurant&am=${finalAmount}&cu=INR`}
            />
            <button className="confirm-pay-btn" onClick={handlePayment}>
              ✅ Confirm Payment
            </button>
          </div>
        )}

        {paymentMethod === "card" && (
          <div className="card-disabled">
            💳 Card Payment Currently Not Available
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
