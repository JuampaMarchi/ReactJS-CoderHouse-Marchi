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

function App() {
  return (
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
  );
}

export default App;
