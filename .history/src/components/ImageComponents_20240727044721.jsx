// src/components/ImageComponents.js
import React from "react";

export const Image1 = ({ isVisible, currentIndex }) => (
    <img
        src="../../../public/car.png"
        alt="Image 1"
        style={{
            position: "absolute",
            width: currentIndex === 0 ? "450px" : "450px",
            height: "500px",
            top: currentIndex === 0 ? '30%' : '42.7%',
            left: currentIndex === 0 ? '20%' : '70%',
            zIndex: currentIndex === 0 ? 1 : 0,
            transition: "transform 0.5s ease-in-out",
            transform: currentIndex === 0 ? "scale(1.1)" : "scale(1)",
        }}
    />
);

export const Image2 = ({ isVisible, currentIndex }) => (
    <img
        src="../../../public/productShip2.png"
        alt="Image 2"
        style={{
            position: "absolute",
            width: currentIndex === 1 ? "450px" : "450px",
            height: "500px",
            top: currentIndex === 1 ? '30%' : '44%',
            left: currentIndex === 1 ? '20%' : '70%',
            zIndex: currentIndex === 1 ? 1 : 0,
            transition: "transform 0.5s ease-in-out",
            transform: currentIndex === 1 ? "scale(1.1)" : "scale(1)",
        }}
    />
);

export const Image3 = ({ isVisible, currentIndex }) => (
    <img
        src="../../../public/product3.png"
        alt="Image 3"
        style={{
            position: "absolute",
            width: currentIndex === 2 ? "450px" : "450px",
            height: "500px",
            top: currentIndex === 2 ? '35%' : '38%',
            left: currentIndex === 2 ? '20%' : '45%',
            zIndex: currentIndex === 2 ? 1 : 0,
            transition: "transform 0.5s ease-in-out",
            transform: currentIndex === 2 ? "scale(1.1)" : "scale(1)",
        }}
    />
);
