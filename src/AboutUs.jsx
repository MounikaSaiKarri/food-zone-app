import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">

      <div className="about-content">

        <h1>About Sindhu's Restaurant</h1>

        <p className="about-intro">
          Welcome to <strong>Sindhu's Restaurant</strong>, where taste meets
          tradition. We bring you a delightful experience of authentic flavors,
          freshly prepared meals, and a warm dining atmosphere.
        </p>

        <div className="about-sections">

          <div className="about-card">
            <h2>🍽 Our Story</h2>
            <p>
              Sindhu's Restaurant started with a simple idea – to serve
              delicious food that feels like home. Our chefs use traditional
              recipes and fresh ingredients to create dishes that customers
              love.
            </p>
          </div>

          <div className="about-card">
            <h2>🌿 Fresh Ingredients</h2>
            <p>
              We believe great food begins with great ingredients. Every dish
              is prepared using high-quality vegetables, spices, and fresh
              produce to maintain authentic taste.
            </p>
          </div>

          <div className="about-card">
            <h2>⭐ Our Mission</h2>
            <p>
              Our mission is to deliver delicious meals with excellent service
              and create memorable dining experiences for every customer.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutUs;