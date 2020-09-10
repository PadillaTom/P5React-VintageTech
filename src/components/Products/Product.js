import React from 'react';
import { Link } from 'react-router-dom';
// Que queremos Display??
// Img, title, price --> We need an ID to display every unique Product

export default function Product({ image, title, id, price }) {
  const url = image.url;
  return (
    <article className='product'>
      <div className='img-container'>
        <img src={url} alt={title} />
        <Link to={`products/${id}`} className='btn btn-primary product-link'>
          Detailed Info
        </Link>
      </div>
      <div className='product-footer'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>${price}</p>
      </div>
    </article>
  );
}
