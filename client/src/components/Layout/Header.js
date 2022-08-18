import { Fragment } from "react";

import HeaderCart from "./HeaderCart";

const Header = (props) => {
    const itemsInCart = props.itemsInCart;
    console.log(itemsInCart);
    return <Fragment>
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand text-white ms-5 fw-light fs-2" href="/">RandoStore</a>
                <ul className="nav justify-content-center">

                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/products">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/cart">Checkout</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/addProduct">Add Product</a>
                    </li>

                </ul>
                <HeaderCart itemsInCart={props.itemsInCart} />
            </div>
        </nav>

    </Fragment>
};

export default Header;