// :::::::::::::: Products CONTEXT ::::::::::::::
import React from 'react';

// Creating Context:
export const ProductContext = React.createContext();
// Provider - Consumer - useContext() --> We don't need anymore the CONSUMER.
// We set it up directly on the Return.
//
// -----> Enviar los CHILDREN as Prop
// -----> Value Prop = Seleccionamos que queremos enviar: Object
export default function ProductProvider({ children }) {
  // Ejemplo para usar el Context: //
  // const greeting = 'Hello';
  // const product = { id: 1, title: 'Product Name' };
  // End Ejemplo para usar el context //
  //
  //  React UseState() --> [value, Function to use them]
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
