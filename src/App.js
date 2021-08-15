import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Box } from '@chakra-ui/react'
import WebFont from 'webfontloader';

//pages
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProductCategory from './pages/ProductCategory';
import Cart from './pages/Cart';
//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//context
import {CartContextProvider} from './context/CartContext';

function App() {

  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Goldman', 'Oxanium', 'Coda']
      }
    })
  }, [])

  return (
  <Box w='100vw' bgGradient='linear(to-br, #8e8d90, #d8caf5)'>
    <Container maxW='container.xl' centerContent>
      <CartContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Products />
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
    <Footer/>
  </Box>
  );
}

export default App;
