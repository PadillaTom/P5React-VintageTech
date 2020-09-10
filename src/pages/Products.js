import React, { useContext } from 'react';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList';

// Main
export default function Products() {
  // Using the CONTEXT (ProductContext) creado en products.js
  // console.log(React.useContext(ProductContext)); // Vemos que nos muestra directamente el VALUE! (Data que pasamos en Value)
  const { loading, products } = React.useContext(ProductContext);
  // console.log(products);
  if (loading) {
    return <Loading></Loading>;
  }
  return <ProductList title='Our Products' products={products}></ProductList>;
}
