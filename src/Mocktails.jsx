import React from "react";
import "./Veg.css"; // Import the CSS
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

function Mocktails() {

  const mocktails = [
    {
      id: 501,
      name: "Virgin Mojito",
      description: "Refreshing mint, lime, and soda with a hint of sugar.",
      price: 149,
      imageLoc: "/image/Virgin Mojito.jpg"
    },
    {
      id: 502,
      name: "Pineapple Punch",
      description: "Sweet and tangy pineapple blended with orange juice and soda.",
      price: 169,
      imageLoc: "/image/pineapple-punch.webp"
    },
    {
      id: 503,
      name: "Strawberry Lemonade",
      description: "Fresh strawberries mixed with zesty lemonade for a fruity twist.",
      price: 159,
      imageLoc: "/image/strawberry-lemonade.jpg"
    },
    {
      id: 504,
      name: "Blue Lagoon",
      description: "Tropical blue drink with lemon and soda, beautifully chilled.",
      price: 179,
      imageLoc: "/image/blue-lagoon.jpg"
    },
    {
      id: 505,
      name: "Mango Mule",
      description: "Mango juice, ginger beer, and lime for a tangy tropical flavor.",
      price: 189,
      imageLoc: "/image/mango-mule.jpg"
    },
    {
      id: 506,
      name: "Cucumber Cooler",
      description: "Light cucumber and mint blend, perfect to beat the heat.",
      price: 149,
      quantity: 1,
      imageLoc: "/image/cucumber-cooler.jpg"
    }
  ];

    let dispatch = useDispatch();

  const mocktailListItems = mocktails.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.imageLoc} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">₹{item.price}</p>
      <button onClick={()=>{(dispatch(addToCart(item))); toast.success("product "+ item.name + "added to cart successfully")}} className="order-btn">Add To Cart</button>
    </div>
  ));

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={2000}/>
      <h1 className="main-heading">Refreshing Mocktails  🍹</h1>
      <div className="card-row">
        {mocktailListItems}
      </div>
    </div>
  );
}

export default Mocktails;
