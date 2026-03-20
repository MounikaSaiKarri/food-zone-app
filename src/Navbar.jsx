import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
  faBars
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  const navigate = useNavigate();

  const items = useSelector((state) => state.cart);
  const totalQuantity = items.reduce((t, item) => t + item.quantity, 0);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    alert("Logged out successfully");
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

          <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}
                >
                <FontAwesomeIcon icon={faUser} style={{ color: "#ffc107" }} />

                <span
                    style={{
                    color: "#ffc107",
                    fontWeight: "600",
                    fontSize: "15px",
                    letterSpacing: "0.5px"
                    }}
                >
                    {loggedUser.fullname}
                </span>

                <button
                    onClick={handleLogout}
                    style={{
                    backgroundColor: "#dc3545",
                    border: "none",
                    padding: "4px 10px",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px"
                    }}
                >
                    Logout
                </button>
                </span>

        ) : (

          <>
           {loggedUser ? (

                <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}
                >

                <FontAwesomeIcon icon={faUser} style={{color:"#ffc107"}}/>

                <span
                style={{
                color:"#ffc107",
                fontWeight:"600"
                }}
                >
                {loggedUser.fullname}
                </span>

                <button
                onClick={handleLogout}
                style={{
                backgroundColor:"#dc3545",
                border:"none",
                padding:"4px 10px",
                color:"white",
                borderRadius:"4px",
                cursor:"pointer"
                }}
                >
                Logout
                </button>

                </span>

                ) : (

                <NavLink to="/login" className={({isActive})=>isActive?"active-link":""}>
                <FontAwesomeIcon icon={faUser}/> Login / Register
                </NavLink>

                )}
          </>

        )}

      </div>

    </nav>
  );
}

export default Navbar;