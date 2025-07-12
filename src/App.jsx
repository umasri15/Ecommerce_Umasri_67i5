// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  return (
    <BrowserRouter>
      <NavBar cartCount={cartItems.length} />

      {/* Optional styling here for padding & background */}
      <div style={{ padding: "30px", backgroundColor: "#baa0dfff", minHeight: "100vh" }}>
        <Routes>
          <Route
            path="/"
            element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegister />} />
          <Route
  path="/cart"
  element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
/>

          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
            
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
