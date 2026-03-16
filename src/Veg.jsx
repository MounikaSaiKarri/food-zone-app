import React from "react";
import "./Veg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from 'react-toastify';

function Veg() {
  const vegItems = [
    {
      id: 201,
      name: "Paneer Butter Masala",
      imageLoc: "/image/PannerButterMasala.jpg",
      price: 220,
      description: "Rich and creamy tomato gravy cooked with soft paneer cubes."
    },
    {
      id: 202,
      name: "Veg Biryani",
      imageLoc: "/image/vegetableBiriyani.jpg",
      price: 180,
      description: "Aromatic basmati rice cooked with fresh vegetables and spices."
    },
    {
      id: 203,
      name: "Chole Bhature",
      imageLoc: "/image/chole.jpg",
      price: 150,
      description: "Spicy chickpea curry served with fluffy fried bhature."
    },
    {
      id: 204,
      name: "Vegetable Pulao",
      imageLoc: "/image/Vegetable.pulav.jpg",
      price: 160,
      description: "Flavorful rice dish mixed with seasonal vegetables and herbs."
    },
    {
      id: 205,
      name: "Veg Kofta Curry",
      imageLoc: "/image/vegkofta.jpg", // can reuse same image
      price: 240,
      description: "Soft vegetable dumplings cooked in rich and creamy tomato-based gravy."
    },
    {
      id: 206,
      name: "Dal Makhani",
      imageLoc: "/image/dalmakani.jpg", // add a dal image in public/images
      price: 190,
      description: "Slow-cooked black lentils in a creamy buttery gravy with spices."
    }, 
    {
    id: 207,
    name: "Paneer Tikka",
    description: "Cubes of paneer marinated in spiced yogurt and grilled to perfection.",
    price: 249,
    imageLoc: "/image/paneer-tikka.jpg"
  },
  {
    id: 208,
    name: "Veg Spring Rolls",
    description: "Crispy rolls stuffed with vegetables served with sweet chili sauce.",
    price: 199,
    imageLoc: "/image/Vegspring.jpg"
  },
  {
    id: 209,
    name: "Hara Bhara Kabab",
    description: "Spinach and green pea patties shallow fried with Indian spices.",
    price: 189,
    imageLoc: "/image/Hara-Bhara.webp"
  },
  {
    id: 210,
    name: "Crispy Corn",
    description: "Golden fried sweet corn tossed with spices and herbs.",
    price: 179,
    imageLoc: "/image/crispy-corn.jpg"
  },
  {
    id: 211,
    name: "Veg Manchurian",
    description: "Vegetable dumplings tossed in spicy Indo-Chinese sauce.",
    price: 219,
    imageLoc: "/image/veg-manchurian.jpg"
  },
  {
    id: 212,
    name: "Cheese Balls",
    description: "Deep-fried crispy cheese balls served with mint dip.",
    price: 229,
    imageLoc: "/image/veg-cheese-balls.jpg"
  }
  ];

let dispatch = useDispatch();
<button onClick={()=>(toast('wow Ratan so easy'))}> Notify</button>

  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
      <h1 className="page-title">Our Delicious Veg Menu 🌱</h1>

      <div className="card-container">
        {vegItems.map((vegItem) => (
          <div className="card" key={vegItem.id}>
            <img src={vegItem.imageLoc} alt={vegItem.name} />
            <div className="card-body">
              <h3>{vegItem.name}</h3>
              <p className="price">₹{vegItem.price}</p>
              <p className="quantity">{vegItem.quantity}</p>
              <p className="description">{vegItem.description}</p>
              <button onClick={()=>{(dispatch(addToCart(vegItem))); toast.success("product "+ vegItem.name +" added to cart successfully");}} className="order-btn">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Veg;
