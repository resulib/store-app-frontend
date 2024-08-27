import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/v1/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <Link to="/" className="back-button">Back to products</Link>
      <div className="product-image" style={{ marginTop: '100px', marginRight:'50px' }}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info" style={{ marginTop: '10px' }}>
        <h1 className='product-text'>{product.name}</h1>
        <p className='product-text'>{product.price}</p>
        <p className='product-text'>{product.specifications}</p>
        <a href="https://wa.me/994775165916" target="_blank" rel="noopener noreferrer">
      <button className="contact-button">WhatsApp</button>
    </a>
      </div>
    </div>
  );
}

export default ProductDetail;
