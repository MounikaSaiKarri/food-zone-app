import React from "react";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Desserts from "./Desserts";
import Mocktails from "./Mocktails";
import Soups from "./Soups";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Profile from "./Profile";
// import BlogPost from "./BlogPost";

import { BrowserRouter, NavLink, Route, Routes, Navigate, useNavigate } from "react-router-dom";
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

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./Orders";
import Register from "./Register";
import Checkout from "./Checkout";
import ContactUs from "./ContactUs";


function App() {

  const items = useSelector((globalState) => globalState.cart);
  let totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Sindhu’s Restaurant</div>

        <div className="nav-links">
          <NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faHouse} /> Home
          </NavLink>

          <NavLink to="/soups" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faBowlFood} /> Soups
          </NavLink>

          <NavLink to="/veg" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faCarrot} /> Veg
          </NavLink>

          <NavLink to="/nonveg" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faDrumstickBite} /> Non-Veg
          </NavLink>

          <NavLink to="/dessert" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faIceCream} /> Desserts
          </NavLink>

          <NavLink to="/mocktails" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faMartiniGlassCitrus} /> Mocktails
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faCartShopping} /> Cart ({totalQuantity})
          </NavLink>

          <NavLink to="/orders" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faBars} /> Orders
          </NavLink>

           <NavLink to="/register" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faUser} /> Register
          </NavLink>

            <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faUsers} /> About Us
          </NavLink>

          <NavLink to="/contactus" className={({ isActive }) => isActive ? "active-link" : ""}>
            <FontAwesomeIcon icon={faPhone} /> Contact Us
          </NavLink>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/dessert" element={<Desserts />} />
          <Route path="/mocktails" element={<Mocktails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/orders" element={<Orders />} />
         <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;