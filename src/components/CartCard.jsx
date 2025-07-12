// src/components/CartCard.jsx
import React from "react";
import './ProductCard.css'; // Reuse same card style

const CartCard = ({ product, onRemoveFromCart }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price.toLocaleString()}</p>
      <button 
        style={{ backgroundColor: "crimson" }} 
        onClick={() => onRemoveFromCart(product.id)}
      >
        Remove ❌
      </button>
    </div>
  );
};

export default CartCard;
    