// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/240x240?text=Image+Not+Found";
        }}
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>₹{product.price}</strong>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
