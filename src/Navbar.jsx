import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  faHouse,
  faBowlFood,
  faMartiniGlassCitrus,
  faUsers,
  faUser,
  faPhone,
  faCartShopping,
  faIceCream,
  faDrumstickBite,
  faBars,
  faUserPlus   // 👈 Added for Register
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart);
  const totalQuantity = items.reduce((t, item) => t + item.quantity, 0);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    toast.success("Logged out successfully"); // 👈 toast instead of alert
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">Sindhu’s Restaurant</div>

      <div className="nav-links">
        <NavLink to="/home">
          <FontAwesomeIcon icon={faHouse} /> Home
        </NavLink>

        <NavLink to="/soups">
          <FontAwesomeIcon icon={faBowlFood} /> Soups
        </NavLink>

        <NavLink to="/veg">
          <FontAwesomeIcon icon={faCarrot} /> Veg
        </NavLink>

        <NavLink to="/nonveg">
          <FontAwesomeIcon icon={faDrumstickBite} /> Non-Veg
        </NavLink>

        <NavLink to="/dessert">
          <FontAwesomeIcon icon={faIceCream} /> Desserts
        </NavLink>

        <NavLink to="/mocktails">
          <FontAwesomeIcon icon={faMartiniGlassCitrus} /> Mocktails
        </NavLink>

        <NavLink to="/cart">
          <FontAwesomeIcon icon={faCartShopping} /> Cart ({totalQuantity})
        </NavLink>

        <NavLink to="/orders">
          <FontAwesomeIcon icon={faBars} /> Orders
        </NavLink>

        <NavLink to="/aboutus">
          <FontAwesomeIcon icon={faUsers} /> About Us
        </NavLink>

        <NavLink to="/contactus">
          <FontAwesomeIcon icon={faPhone} /> Contact Us
        </NavLink>

        {/* 👇 LOGIN / USER SECTION */}
        {loggedUser ? (
          <span className="user-section">
            <span className="welcome-text">Welcome, {loggedUser.fullname}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </span>
        ) : (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              maxHeight: "40px"
            }}
          >
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FontAwesomeIcon icon={faUser} /> Login
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FontAwesomeIcon icon={faUserPlus} /> Register
            </NavLink>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
