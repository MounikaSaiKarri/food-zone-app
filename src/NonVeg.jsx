import React, { useState } from "react";
import "./NonVeg.css"; // Use the common CSS
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

function NonVeg() {

  const nonVegItems = [
    {
      id: 301,
      name: "Mutton Rogan Josh",
      price: 499,
      description: "Rich mutton curry with aromatic spices.",
      imageLoc: "/image/muttonshourba.jpg"
    },
    {
      id: 302,
      name: "Prawn Fried Rice",
      price: 349,
      description: "Rice tossed with prawns and veggies.",
      imageLoc: "/image/prawn-fried.webp"
    },
    {
      id: 303,
      name: "Egg Curry",
      price: 199,
      description: "Boiled eggs in spicy gravy.",
      imageLoc: "/image/eggcurry.jpg"
    },
    {
      id: 304,
      name: "Chicken Curry",
      price: 399,
      description: "Tender chicken pieces simmered in spicy curry gravy.",
      imageLoc: "/image/Chickencurry.jpg"
    },
    {
      id: 305,
      name: "Mutton Biryani",
      price: 499,
      description: "Aromatic basmati rice cooked with juicy mutton pieces and spices.",
      imageLoc: "/image/Mutton-Biryani.jpg"
    },
    {
      id: 306,
      name: "Fish Pulusu",
      price: 449,
      description: "Fresh fish cooked in traditional Indian curry with coconut flavor.",
      imageLoc: "/image/Fishpulusu.jpg"
    },
    {
      id: 307,
    name: "Chicken Tikka",
    description: "Tender chicken pieces marinated in spiced yogurt and grilled to perfection.",
    price: 299,
    imageLoc: "/image/ChickenTikka.jpg"
  },
  {
    id: 308,
    name: "Chicken Lollipop",
    description: "Crispy fried chicken wings tossed in spicy Indo-Chinese sauce.",
    price: 279,
    imageLoc: "/image/chicken-lollipop.jpg"
  },
  {
    id: 309,
    name: "Mutton Seekh Kebab",
    description: "Juicy minced mutton kebabs blended with aromatic Indian spices.",
    price: 349,
    imageLoc: "/image/Mutton-Seekh-Kebab.jpg"
  },
  {
    id: 310,
    name: "Fish Fingers",
    description: "Golden fried fish strips served with tartar sauce.",
    price: 319,
    imageLoc: "/image/Fish-Fingers.webp"
  },
  {
    id: 311,
    name: "Prawn Tempura",
    description: "Crispy battered prawns served with spicy dipping sauce.",
    price: 399,
    imageLoc: "/image/shrimp-tempura.jpg"
  },
  {
    id: 312,
    name: "Chicken 65",
    description: "Spicy deep-fried chicken tossed with curry leaves.",
    price: 289,
    imageLoc: "/image/chicken-65.jpg"
  }
  ];

   const dispatch = useDispatch();
  const itemPerPage = 3;
  const totalPages = Math.ceil(nonVegItems.length / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = nonVegItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={1000} />

      <h1>🍗 Non Veg Menu</h1>

      <br/>
      <br/>

      <div className="card-row">
  {currentItems.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.imageLoc} alt={item.name} className="card-img" />
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h4 className="price">
          {item.price.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
        </h4>
        <button
          className="order-btn"
          onClick={() => {
            dispatch(addToCart(item));
            toast.success("Product " + item.name + " added to cart");
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  ))}
</div>

      {/* Pagination buttons with arrows */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{ margin: "0 5px", padding: "5px 10px", border: "none", cursor: "pointer" }}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              margin: "0 5px",
              backgroundColor: currentPage === index + 1 ? "#f90" : "#eee",
              padding: "5px 10px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{ margin: "0 5px", padding: "5px 10px", border: "none", cursor: "pointer" }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default NonVeg;