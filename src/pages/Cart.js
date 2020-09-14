import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
// import { useContext } from '../context/user';
//
//
export default function Cart() {
  // Check user log in:
  // let user = false;
  // Hooks:
  const { cart, total } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);
  // console.log({ cart, total }); // Vemos el Array de Objects
  if (cart.length === 0) {
    return <EmptyCart></EmptyCart>;
  }
  return (
    <section className='cart-items section'>
      <h2> Your Cart </h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>;
      })}
      <h2>Total: ${total}</h2>
      {user.token ? (
        <Link to='/checkout' className=' btn btn-primary btn-block'>
          Checkout
        </Link>
      ) : (
        <Link to='/login' className=' btn btn-primary btn-block'>
          Login
        </Link>
      )}
    </section>
  );
}
