import React, { useState } from "react";
import "./NonVeg.css";
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
      description: "Fresh fish cooked in traditional Indian curry.",
      imageLoc: "/image/Fishpulusu.jpg"
    },
    {
      id: 307,
      name: "Chicken Tikka",
      description: "Tender chicken pieces marinated in yogurt and spices.",
      price: 299,
      imageLoc: "/image/ChickenTikka.jpg"
    },
    {
      id: 308,
      name: "Chicken Lollipop",
      description: "Crispy fried chicken wings tossed in spicy sauce.",
      price: 279,
      imageLoc: "/image/chicken-lollipop.jpg"
    },
    {
      id: 309,
      name: "Mutton Seekh Kebab",
      description: "Juicy minced mutton kebabs with aromatic spices.",
      price: 349,
      imageLoc: "/image/Mutton-Seekh-Kebab.jpg"
    },
    {
      id: 310,
      name: "Fish Fingers",
      description: "Golden fried fish strips served with sauce.",
      price: 319,
      imageLoc: "/image/Fish-Fingers.webp"
    },
    {
      id: 311,
      name: "Prawn Tempura",
      description: "Crispy battered prawns served with dipping sauce.",
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

  const itemsPerPage = 3;
  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = nonVegItems.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">

      <ToastContainer position="top-right" autoClose={1000} />
      <br/>

      <h1>🍗 Royal Non-Vegetarian Delicacies</h1>
      <br/>
      <br/>

      <div className="card-row">
        {currentItems.map((item) => (
          <div className="card" key={item.id}>

            <img src={item.imageLoc} alt={item.name} />

            <div className="card-body">

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <h4 className="price">
                {item.price.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR"
                })}
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

      {/* Pagination */}

      <div
        style={{
          marginTop: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

        {/* Previous Arrow */}

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "8px",
            background: "linear-gradient(135deg,#ff7a18,#ff5722)",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            marginRight: "15px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.15)"
          }}
        >
          ←
        </button>

        {/* Page Numbers */}

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              margin: "0 6px",
              padding: "7px 13px",
              borderRadius: "6px",
              border: "none",
              backgroundColor:
                currentPage === index + 1 ? "#ff5722" : "#eee",
              color: currentPage === index + 1 ? "white" : "#333",
              cursor: "pointer"
            }}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Arrow */}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "8px",
            background: "linear-gradient(135deg,#ff7a18,#ff5722)",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            marginLeft: "15px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.15)"
          }}
        >
          →
        </button>

      </div>

    </div>
  );
}

export default NonVeg;