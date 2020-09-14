import React from 'react';
//
// Router Router DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages:
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
// Components:
import Header from './components/Header';
// Main Function:
export default function App() {
  return (
    <Router>
      <Header></Header>
      <Alert></Alert>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/cart'>
          <Cart></Cart>
        </Route>
        <PrivateRoute path='/checkout'>
          <Checkout></Checkout>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/products'>
          <Products></Products>
        </Route>
        <Route
          path='/products/:id'
          children={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}
