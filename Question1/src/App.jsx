// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "15px", background: "#0077cc", color: "white" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>
          🛒 My Online Store
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;


