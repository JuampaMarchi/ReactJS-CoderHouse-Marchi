import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductCategory from './pages/ProductCategory';
//components
import NavBar from './components/NavBar';
//context
import {CartContext} from './context/cartContext';

function App() {
  return (
  <CartContext.Provider value={[1,2,3]}>
  <div>
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
      </Switch>
    </Router>
  </div>
  </CartContext.Provider>
  );
}

export default App;
