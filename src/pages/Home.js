import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Link to='/products' className='btn btn-primary btn-hero'>
          Our Products
        </Link>
      </Hero>
    </React.Fragment>
  );
}
