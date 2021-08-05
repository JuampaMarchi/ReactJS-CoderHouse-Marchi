import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from '@chakra-ui/react'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductCategory from './pages/ProductCategory';
import Cart from './pages/Cart';
//components
import NavBar from './components/NavBar';
//context
import {CartContextProvider} from './context/CartContext';

function App() {

  return (
  <Container maxW='container.lg' centerContent>
    <CartContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/category/:categoryId">
            <ProductCategory />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  </Container>
  );
}

export default App;
