import React, { Fragment } from "react"

const Cart = ({ cart, emptyCart, removeItemFromCart }) => {

    let isCartEmpty = true;

    const checkCart = () => {
        if (localStorage.getItem("cart") && localStorage.getItem("cart").length > 2) {
            //console.log("cart is not empty");
        } else {
            //console.log("cart is empty");
            isCartEmpty = false;
        }
    }
    checkCart();

    // * calculate total amount
    const totalAmount = () => {
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    };


    return (
        <Fragment>
            <div className="container">

                <h1 className="display-4 text-center font-weight-bold mb-5 mt-4">Cart</h1>

                {!isCartEmpty && <p className="h3 fw-light text-danger text-center">OOPS! Your Cart is empty</p>}

                <div className="w-75 mx-auto mb-5">
                    {cart.map((product, id) => (
                        <div className="row shadow-sm border-0" key={id}>
                            <div className="d-flex justify-content-between align-items-center p-2" >
                                <div className="d-inline-flex align-items-center" >
                                    <img src={product.img} width="150px" className="img-fluid  mb-3" alt={product.name} ></img>
                                    <h5 className="title">{product.name}</h5>
                                </div>
                                <p className="text">Price: {product.price} Rs.</p>
                                <p className="text">Quantity: {product.quantity}</p>
                                <button onClick={() => removeItemFromCart(product)} className="btn btn-danger">Remove</button>

                            </div>
                            <p><br /></p>
                        </div>
                    ))}
                </div>
                <div className="float-end">
                    <p className="h4">Total Amount: Rs.{totalAmount()}</p>
                    {cart.length > 0 &&
                        <button onClick={emptyCart} className="btn btn-danger">Empty Cart</button>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;