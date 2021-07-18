import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
import {CartContext} from './context/CartContext';

function App() {
  const [cartContent, setCartContent] = useState([])
  return (
  <CartContext.Provider value={{cartContent, setCartContent}}>
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
  </CartContext.Provider>
  );
}

export default App;
