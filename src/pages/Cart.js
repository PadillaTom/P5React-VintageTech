import React from 'react';
import { CartContext } from '../context/cart';

export default function Cart() {
  // Hooks:
  const { cart, total } = React.useContext(CartContext);
  console.log({ cart, total }); // Vemos el Array de Objects
  return <h1>hello from cart page</h1>;
}
