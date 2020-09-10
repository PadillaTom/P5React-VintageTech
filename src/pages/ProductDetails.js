import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  // ID URL:
  // console.log(useParams()); // Vemos que si entramos a la page, nos devulve el ID (Object, with a STR)
  const { id } = useParams();
  return <h1>hello from product details page WITH ID: {id}</h1>;
}
