import React, { useContext } from 'react';
import { ProductContext } from '../context/products';

// Main
export default function Products() {
  // Using the CONTEXT (ProductContext) creado en products.js
  // console.log(React.useContext(ProductContext)); // Vemos que nos muestra directamente el VALUE! (Data que pasamos en Value)
  // Ejemplo para usar el Context : //
  // const { greeting } = React.useContext(ProductContext);
  // console.log(greeting);
  // End Ejemplo para usar el context //
  const { loading, products } = React.useContext(ProductContext);

  return <h1>hello from products page</h1>;
}
