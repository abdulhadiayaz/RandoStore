import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import AllProducts from "./components/Pages/AllProducts";
import AddProduct from "./components/Pages/AddProduct";
import Cart from "./components/Pages/Cart";


function App() {

  const [cart, setCart] = useState([]);

  // check if there"s data in cart
  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);

  const removeItemFromCart = (productToRemove) => {
    //console.log("removeItemFromCart triggered!", cart);
    const removeItem = cart.filter(product => product !== productToRemove)
    setCart(removeItem);
    localStorage.setItem("cart", JSON.stringify(removeItem));
  }

  const addToCart = (product) => {
    //console.log("addToCart triggered", product);
    let itemInCart = cart.find(item => product.name === item.name);
    let newCart = [...cart];

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const emptyCart = () => {
    console.log("emptyCart Triggered")
    setCart([])
    localStorage.removeItem("cart");
  }

  const itemsInCart = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <Fragment>
      <Header itemsInCart={itemsInCart()} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts addToCart={addToCart} />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/cart" element={<Cart removeItemFromCart={removeItemFromCart} emptyCart={emptyCart} cart={cart} />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
