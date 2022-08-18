import { Fragment } from "react";
import { Link } from 'react-router-dom';

import HeaderCart from "./HeaderCart";

const Header = (props) => {
    const itemsInCart = props.itemsInCart;
    //console.log(itemsInCart);
    return <Fragment>
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand text-white ms-5 fw-light fs-2" to="/">RandoStore</Link>
                <ul className="nav justify-content-center">

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/products">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/cart">Checkout</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/addProduct">Add Product</Link>
                    </li>

                </ul>
                <HeaderCart itemsInCart={props.itemsInCart} />
            </div>
        </nav>

    </Fragment>
};

export default Header;