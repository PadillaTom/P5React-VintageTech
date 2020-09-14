import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';
//
// React Stripe Elements:

//
import submitOrder from '../strapi/submitOrder';
//
//
export default function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();
  // State:
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  // When to show:
  const isEmpty = !name || alert.show;
  //  Async to Submit:
  async function handleSubmit(e) {
    e.preventDefault();
  }
  // Si no hay Elementos ---> Mostrar Component de EMPTY!
  if (cart.length < 1) return <EmptyCart></EmptyCart>;
  // Else:
  return (
    <section className='section form'>
      <h2 className='section-title'>checkout</h2>
      <form className='checkout-form'>
        <h3>
          order total: <span>${total}</span>
        </h3>
        {/* Single Input */}
        <div className='form-control'>
          <label htmlFor='name'>Your name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* End Single Input */}
        {/* Card Element */}
        <div className='stripe-input'>
          <label htmlFor='card-element'>Credit or Debit card</label>
          <p className='stripe-info'>
            Test Using this Credit card: <span>4242 4242 4242 4242</span>
            <br />
            enter any 5 digits for Zip Code
            <br />
            enter any 3 digits for CVC
          </p>
        </div>
        {/* End of Card Element */}
        {/* STRIPE ELEMENTS */}
        {/* Errors */}
        {error && <p className='form-empty'>{error}</p>}
        {/* Empty Value */}
        {isEmpty ? (
          <p className='form-empty'>please fill out name field</p>
        ) : (
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary btn-block'
          >
            Checkout!
          </button>
        )}
      </form>
    </section>
  );
}
