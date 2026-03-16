import React from "react";
import "./Veg.css"; // Import the CSS file
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

function Desserts() {

const desserts = [
  {
    id: 401,
    name: "Gulab Jamun",
    description: "Soft deep-fried milk dumplings soaked in warm sugar syrup.",
    price: 129,
    imageLoc: "/image/gulab-jamuns.jpg"
  },
  {
    id: 402,
    name: "Rasmalai",
    description: "Spongy paneer discs soaked in sweetened thick milk flavored with saffron.",
    price: 149,
    imageLoc: "/image/Rasmalai.webp"
  },
  {
    id: 403,
    name: "Chocolate Brownie",
    description: "Rich and moist chocolate brownie served warm.",
    price: 179,
    imageLoc: "/image/chocolate.jpg"
  },
  {
    id: 404,
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream topped with chocolate syrup and nuts.",
    price: 159,
    imageLoc: "/image/ice-cream.jpg"
  },
  {
    id: 405,
    name: "Kunafa",
    description:  "Crispy shredded filo pastry layered with creamy cheese and soaked in fragrant sugar syrup.",
    price: 249,
    imageLoc: "/image/kunafa.webp"
  },
  {
    id: 406,
    name: "Cheesecake",
    description: "Creamy baked cheesecake with a buttery biscuit base.",
    price: 219,
    imageLoc: "/image/cheesecake.jpg"
  }
];

let dispatch = useDispatch();


const dessertListItems = desserts.map((item) => (
  <div className="card" key={item.id}>
    <img src={item.imageLoc} alt={item.name} />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <p className="price">₹{item.price}</p>
    <button onClick={()=>{(dispatch(addToCart(item))); toast.success("product "+ item.name +" added to cart Successfully")}} className="order-btn">Add To Cart</button>
  </div>
));



return (
  <div className="container">
    <ToastContainer position="top-right" autoClose={2000} />
    <h1 className="main-heading">Delicious Desserts 🍨</h1>
    <div className="card-row">
      {dessertListItems}
    </div>
  </div>
);
}

export default Desserts;
