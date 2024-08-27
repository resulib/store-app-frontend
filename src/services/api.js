import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8090/api/v1', 
});

export const fetchProducts = () => api.get('/products');
export const fetchProductById = (id) => api.get(`/products/${id}`);
export const fetchCategories = () => api.get('/categories'); 
