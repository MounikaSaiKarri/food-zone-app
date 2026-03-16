import React from "react";
import { useSelector } from "react-redux";
import "./Orders.css";

function Orders() {
  const orderHistory = useSelector((state) => state.orders);

  if (!orderHistory || orderHistory.length === 0) {
    return (
      <div className="orders-page">
        <h2 className="orders-title">Order History</h2>
        <p className="no-orders">No orders placed yet.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h2 className="orders-title">Order History</h2>

      <div className="orders-container">
        {orderHistory.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <span className="order-date">
                {order.date}
              </span>
              <span className="order-total">
                ₹{order.totalPrice}
              </span>
            </div>

            <ul className="order-items">
              {order.items.map((item) => (
                <li key={item.id} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-details">
                    ₹{item.price} × {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;