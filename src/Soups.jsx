import React from "react";
import "./Soups.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

function Soups() {

  const soupItems = [
    { 
        id: 101, 
        name: "Tomato Basil Soup",
        description: "Creamy tomato soup with basil.",
        price: 149, 
        imageLoc: "/image/Tomato_Soup.jpg",
        category: "veg" 
      },

    { 
      id: 102, 
      name: "Sweet Corn Vegetable Soup", 
      description: "Light soup with sweet corn & vegetables.", 
      price: 169, 
      imageLoc: "/image/Sweetcorn.jpg", 
      category: "veg" 
    },
    { id: 103, 
      name: "Hot and Sour Vegetable Soup", 
      description: "Spicy Indo-Chinese vegetable soup.", 
      price: 179, 
      imageLoc: "/image/Hotsour.jpg", 
      category: "veg" 
    },

    { 
      id: 104, 
      name: "Chicken Manchow Soup", 
      description: "Chicken soup with crispy noodles.", 
      price: 199, 
      imageLoc: "/image/ChickenSoup.jpg", 
      category: "nonveg" 
    },

    { 
      id: 105, 
      name: "Chicken Sweet Corn Soup", 
      description: "Chicken and sweet corn comfort soup.", 
      price: 189, 
      imageLoc: "/image/Chickensweetcorn.jpg", 
      category: "nonveg" 
    },

    { 
      id: 106, 
      name: "Mutton Shorba", 
      description: "Traditional spicy mutton soup.", 
      price: 249, 
      imageLoc: "/image/muttonshourba.jpg", 
      category: "nonveg" 
    },

    {
  id: 107,
  name: "Creamy Mushroom Soup",
  description: "Rich and creamy mushroom soup blended with herbs and fresh cream.",
  price: 179,
  imageLoc: "/image/mushrromsoup.jpg",
  category: "veg" 
  }

  ];

  let dispatch = useDispatch();

  const vegSoups = soupItems.filter(item => item.category === "veg");
  const nonVegSoups = soupItems.filter(item => item.category === "nonveg");

  const renderSoups = (items) =>
    items.map(item => (
      <div className="card" key={item.id}>
        <img src={item.imageLoc} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="price">₹{item.price}</p>
        <button onClick={()=>{(dispatch(addToCart(item))); toast.success("product "+ item.name +" added to cart successfully")}} className="order-btn">Add To Cart</button>
      </div>
    ));

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
      <h1>🍲 Our Soups Menu</h1>
      <br/>
      <br/>

      <h2 className="veg-heading">Vegetarian Soups</h2>
      <br/>
      <div className="card-row">
        {renderSoups(vegSoups)}
      </div>
      <br/>
      <br/>

      <h2 className="nonveg-heading">Non-Vegetarian Soups</h2>
      <br/>
      <div className="card-row">
        {renderSoups(nonVegSoups)}
      </div>
    </div>
  );
}

export default Soups;