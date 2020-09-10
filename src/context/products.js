// :::::::::::::: Products CONTEXT ::::::::::::::
import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts } from '../utils/helpers';
// Creating Context:
export const ProductContext = React.createContext();
// Provider - Consumer - useContext() --> We don't need anymore the CONSUMER.
// We set it up directly on the Return.
//
// -----> Enviar los CHILDREN as Prop
// -----> Value Prop = Seleccionamos que queremos enviar: Object
export default function ProductProvider({ children }) {
  //  React UseState() --> [value, Function to use them]
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  //
  // UseEffect and Axios:
  React.useEffect(() => {
    // Set Loading:
    setLoading(true);
    // --> Data Fetching Here:
    axios.get(`${url}/products`).then((response) => {
      const featuredP = featuredProducts(response.data);
      setProducts(response.data);
      setFeatured(featuredP);
      setLoading(false);
    });
    return () => {
      // --> Cleanup Function Here
    };
  }, []); // --> [] = Reload only ONCE. When the pages refreshes.

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
