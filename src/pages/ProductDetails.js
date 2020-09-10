import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
// import { CartContext } from '../context/cart';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
//
export default function ProductDetails() {
  // ID URL:
  // console.log(useParams()); // Vemos que si entramos a la page, nos devulve el ID (Object, with a STR)
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  // Product = Iterar Array y return if Item Match ID(converted into INT)
  const product = products.find((item) => item.id === parseInt(id));
  // Si el Array es Empty, Show Loading -->
  // PORQUE? porque puede tardar en levantar los products y daría error si no ponemos algo hasta que levante
  if (products.length === 0) {
    return <Loading></Loading>;
  } else {
    // Destructure el PRODUCT--> Img:{} Entramos dentro del object y tomamos la data necesaria
    const {
      image: { url },
      title,
      price,
      description,
    } = product;
    return (
      <section className='single-product'>
        <img src={url} alt={title} className='single-product-image' />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            className='btn btn-primary btn-block'
            onClick={() => {
              // Add to Cart
              // Show Cart: Navigate to:
              history.push('/cart');
            }}
          >
            Add to Cart
          </button>
        </article>
      </section>
    );
  }
}
