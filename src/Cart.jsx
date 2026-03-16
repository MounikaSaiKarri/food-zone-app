import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuant, decreaseQuant, removeCart, clearCart } from "./CartSlice";
import { applyCoupon, resetCoupon } from "./couponSlice";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const { code, discount, applied } = useSelector((state) => state.coupon);

  const [discountPer, setDiscountPer] = useState(0);
  const [input, setInput] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountAmount = (discountPer / 100) * totalAmount;
  const couponDiscount = (discount / 100) * totalAmount;
  const finalAmount = totalAmount - discountAmount - couponDiscount;

  // Generate unique order ID
  const generateOrderId = () => {
    const timestamp = Date.now(); // milliseconds since 1970
    const random = Math.floor(Math.random() * 1000); // random 0-999
    return `ORD-${timestamp}-${random}`;
  };

  /* COUPON RESULT TOAST */
  useEffect(() => {
    if (input) {
      if (applied) {
        toast.success("🎉 Coupon applied hurray");
      } else {
        toast.error("Invalid coupon");
      }
    }
  }, [applied]);

  /* CHECKOUT */
  const handleCheckout = () => {
    if (!customerEmail) {
      toast.warning("⚠️ Please enter your email first");
      return;
    }

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
      alert("Please Login to Continue");
      navigate("/login");
      return;
    }

    const orderId = generateOrderId();

    const orderData = {
      orderId,
      date: new Date().toISOString(),
      items: cartItems.map((item) => ({
        name: item.name,
        price: item.price * item.quantity,
        units: item.quantity,
        image: item.imageLoc,
      })),
      totalAmount: finalAmount.toFixed(2),
      email: customerEmail,
    };

    // Store in localStorage under loggedUser
    if (!loggedUser.orders) loggedUser.orders = [];
    loggedUser.orders.push(orderData);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    // Send email
    emailjs
      .send(
        "service_51t75ub",
        "template_yesfx9a",
        orderData,
        "EQ7h92Oh4-oLx3dIw"
      )
      .then((result) => {
        console.log("Email Sent:", result);
        alert(`Order ${orderId} placed successfully!`);
      })
      .catch((error) => {
        console.error("Email Failed:", error);
        alert("Email failed");
      });

    // Navigate to checkout page
    navigate("/checkout", {
      state: { cartItems, finalAmount, customerEmail, orderId },
    });

    // Clear cart after order
    dispatch(clearCart());
  };

  /* APPLY COUPON */
  const handleApplyCoupon = () => {
    if (!input.trim()) return;
    const couponCode = input.trim().toUpperCase();
    dispatch(applyCoupon(couponCode));
    setInput(couponCode);
  };

  return (
    <div className="cart-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <h1 className="cart-title">🛒 Your Cart</h1>

      {/* CLEAR CART */}
      {cartItems.length > 0 && (
        <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
          🗑 Clear Cart
        </button>
      )}

      {/* EMPTY CART */}
      {cartItems.length === 0 && (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Add delicious food from the menu 🍽️</p>
        </div>
      )}

      {/* CART ITEMS */}
      {cartItems.length > 0 &&
        cartItems.map((item, index) => (
          <div key={item.id + "-" + index} className="cart-item">
            <img src={item.imageLoc} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
            <div className="cart-btns">
              <button
                onClick={() => {
                  dispatch(increaseQuant(item));
                  toast.success(`➕ ${item.name} quantity increased`);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  dispatch(decreaseQuant(item));
                  toast.info(`➖ ${item.name} quantity decreased`);
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  dispatch(removeCart(item));
                  toast.error(`🗑️ ${item.name} removed from cart`);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

      {/* SUMMARY */}
      {cartItems.length > 0 && (
        <>
          <div className="total-box">
            <div className="price-row">
              <span>Total Amount</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
            {discountPer > 0 && (
              <div className="price-row">
                <span>Discount</span>
                <span>- ₹{discountAmount.toFixed(2)}</span>
              </div>
            )}
            {applied && (
              <div className="price-row">
                <span>Coupon</span>
                <span>- ₹{couponDiscount.toFixed(2)}</span>
              </div>
            )}
            <hr />
            <div className="final-price">
              <span>Final Amount</span>
              <span>₹{finalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* DISCOUNT BUTTONS */}
          {totalAmount > 1000 && (
            <div className="discount-box">
              <h3>Special Discount</h3>
              <button onClick={() => setDiscountPer(10)}>10%</button>
              <button onClick={() => setDiscountPer(20)}>20%</button>
              <button onClick={() => setDiscountPer(30)}>30%</button>
              <button onClick={() => setDiscountPer(0)}>Reset</button>
            </div>
          )}

          {/* COUPON */}
          {totalAmount > 1000 && (
            <div className="coupon-box">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={handleApplyCoupon}>Apply</button>
              <button onClick={() => dispatch(resetCoupon())}>Reset</button>
            </div>
          )}

          {/* EMAIL */}
          <div className="email-box">
            <label>Enter email for order confirmation</label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </div>

          {/* CHECKOUT */}
          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Pay
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;