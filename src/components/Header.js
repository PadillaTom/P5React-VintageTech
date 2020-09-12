import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CartLink from './Cart/CartLink';

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='logo' />
      <nav>
        <ul>
          <div>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </div>
          <div>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <CartLink></CartLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
