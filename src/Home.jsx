import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    alert("Logged out successfully");
    navigate("/login");
  };

  useEffect(() => {

    // Disable scroll only for Home
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };

  }, []);

  return (

    <div className="home-container">


      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/image/res.mp4" type="video/mp4" />
      </video>

      {/* Content */}

      <div className="content">

        <h1>Welcome to Sindhu's Restaurant</h1>

        <p className="tagline">
          Where Taste Meets Tradition & Every Meal Tells a Story
        </p>

        <div className="menu-section">

          <h2 className="menu-title">Menu</h2>

          <div className="menu-grid">

            <button 
            className="menu-btn"
            onClick={() => navigate("/soups")}
            >
            🥣 Soups
            </button>

            <button 
            className="menu-btn"
            onClick={() => navigate("/veg")}
            >
            🍛 Veg Main Course
            </button>

            <button 
            className="menu-btn highlight"
            onClick={() => navigate("/nonveg")}
            >
            🍗 Non-Veg Main Course
            </button>

            <button 
            className="menu-btn"
            onClick={() => navigate("/desserts")}
            >
            🍰 Desserts
            </button>

            <button 
            className="menu-btn"
            onClick={() => navigate("/mocktails")}
            >
            🍹 Mocktails
            </button>

            <button 
            className="menu-btn"
            onClick={() => navigate("/orders")}
            >
            ⏬ Orders
            </button>

            </div>

        </div>

      </div>

    </div>
  );
}

export default Home;