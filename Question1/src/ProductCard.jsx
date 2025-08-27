import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
      <h3 style={{ fontSize: '1.1em', margin: '10px 0' }}>{product.title}</h3>
      <p style={{ fontWeight: 'bold', color: '#0077cc' }}>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
