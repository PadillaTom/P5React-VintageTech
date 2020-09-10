import React from 'react';
import localCart from '../utils/localCart';

// Creamos Context
const CartContext = React.createContext();

function CartProvider({ children }) {
  //State Variables:
  const [cart, setcart] = React.useState(localCart);
  const [total, setTotal] = React.useState();
  const [cartItems, setCartItems] = React.useState();
  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
