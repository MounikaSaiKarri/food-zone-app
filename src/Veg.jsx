import React, { useState } from "react";
import "./Veg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

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
      imageLoc: "/image/vegkofta.jpg",
      price: 240,
      description: "Soft vegetable dumplings cooked in rich creamy gravy."
    },
    {
      id: 206,
      name: "Dal Makhani",
      imageLoc: "/image/dalmakani.jpg",
      price: 190,
      description: "Slow cooked black lentils in creamy buttery gravy."
    },
    {
      id: 207,
      name: "Paneer Tikka",
      description: "Paneer cubes marinated in yogurt and grilled.",
      price: 249,
      imageLoc: "/image/paneer-tikka.jpg"
    },
    {
      id: 208,
      name: "Veg Spring Rolls",
      description: "Crispy rolls stuffed with vegetables.",
      price: 199,
      imageLoc: "/image/Vegspring.jpg"
    },
    {
      id: 209,
      name: "Hara Bhara Kabab",
      description: "Spinach and green pea patties shallow fried.",
      price: 189,
      imageLoc: "/image/Hara-Bhara.webp"
    },
    {
      id: 210,
      name: "Crispy Corn",
      description: "Golden fried sweet corn tossed with spices.",
      price: 179,
      imageLoc: "/image/crispy-corn.jpg"
    },
    {
      id: 211,
      name: "Veg Manchurian",
      description: "Vegetable dumplings in spicy Indo-Chinese sauce.",
      price: 219,
      imageLoc: "/image/veg-manchurian.jpg"
    },
    {
      id: 212,
      name: "Cheese Balls",
      description: "Crispy fried cheese balls served with dip.",
      price: 229,
      imageLoc: "/image/veg-cheese-balls.jpg"
    }
  ];

  const dispatch = useDispatch();

  const itemsPerPage = 3;
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentItems = vegItems.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">

      <ToastContainer position="top-right" autoClose={2000} />
      <br/>
      

      <h1 className="page-title">🌱 Signature Vegetarian Delights</h1>
      <br/>
      <br/>

      <div className="card-row">

        {currentItems.map((vegItem) => (

          <div className="card" key={vegItem.id}>

            <img src={vegItem.imageLoc} alt={vegItem.name} />

            <div className="card-body">

              <h3>{vegItem.name}</h3>

              <p className="description">{vegItem.description}</p>

              <h4 className="price">
                {vegItem.price.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR"
                })}
              </h4>

              <button
                className="order-btn"
                onClick={() => {
                  dispatch(addToCart(vegItem));
                  toast.success("Product " + vegItem.name + " added to cart");
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

export default Veg;