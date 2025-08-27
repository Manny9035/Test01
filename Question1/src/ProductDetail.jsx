
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Products</Link>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p style={{ marginTop: "10px" }}>{product.description}</p>
      <p><em>Category: {product.category}</em></p>
    </div>
  );
}

export default ProductDetail;
