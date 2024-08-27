import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../services/api';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log('Fetched products:', response.data); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getCategories();
    getProducts();
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <h1>Product Categories</h1>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category">
            {category.name}
          </div>
        ))}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-link" style={{ textDecoration: 'none' }}>
            <div className="product-card">
              <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p style={{color:'black'}}>{product.price} AZN</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Home;
