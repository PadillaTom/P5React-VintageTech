import React from 'react';
import localCart from '../utils/localCart';

// Creamos Context
const CartContext = React.createContext();

function CartProvider({ children }) {
  //State Variables:
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState();
  const [cartItems, setCartItems] = React.useState();
  //
  // React Use Effect -->  To update easier the CART
  React.useEffect(() => {
    // Local Storage:
    //
    // Iterate Array ---->
    // ---> Cart Items Amount:
    let newCartItems = cart.reduce((acc, curr) => {
      // console.log(acc, curr); // Vemos los Objects dentro del Array
      return (acc += curr.amount); // Suma el TOTAL + Amount de items
    }, 0); // Starting from 0
    // console.log(newCartItems); // Comprobamos el AMOUNT TOTAL
    setCartItems(newCartItems);
    //
    // ---> Cart Total Price:
    let newTotal = cart.reduce((acc, curr) => {
      return (acc += curr.amount * curr.price); // Total = Amount * Price
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2)); // Pasamos a FLOAT, 2 Decimals
    setTotal(newTotal);
  }, [cart]); // Only Update when something in CART STATE Changes

  //Remove item: Filtramos el Array y pasasmos los que NO MATCH el id, del item Removed
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };

  //
  // Increase Amount: SI MATCH --> Return Array and amount+1 // si NO MATCH --> Return the Array
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };
  //
  // Decrease Amount:
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      // And then click decrease --> Remove item completlys
      removeItem(id);
      return;
    } else {
      // When clicked, reduce the amount by 1
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };
  //
  // Add to cart
  const addToCart = (product) => {
    const {
      id,
      image: { url },
      title,
      price,
    } = product;
    // Buscamos el ITEM a partir de su ID, dentro del Array
    const item = [...cart].find((item) => item.id === id);
    // If the selected ITEM IS on the Cary, Increase such amount
    if (item) {
      increaseAmount(id);
      return;
    } else {
      // Tomamos dichos datos para crear un NEW ITEM --> SI NO ESTA ALREADY EN EL ARRAY
      const newItem = { id, image: url, title, price, amount: 1 };
      // Creamos un New ARRAY donde meteremos lo que ya tenemos + el nuevo item creado
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  //
  // Clear Cart
  const clearCart = () => {
    //
  };
  //
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
