import { Fragment } from "react";

const Home = (props) => {
    return <Fragment>

    <div className="container">

        <div className="row text-center pt-5">
            <h1 className="display-5">Welcome to Rando Store</h1>
            <p className="h5 pb-5 pt-4"> Where you can put any item up for sale!</p>

            <p className="display-6"> You may want to visit: </p>
            <div className="d-inline">
                <span className="btn btn-outline-danger m-2"><a className="text-decoration-none text-reset" href="/addProduct">Put Items up for Sale</a></span>
                <span className="btn btn-outline-danger m-2"><a className="text-decoration-none text-reset" href="/products">Browse Products in Store</a></span>
                <span className="btn btn-outline-danger m-2"><a className="text-decoration-none text-reset" href="/cart">Checkout Page</a></span>
            </div>
        </div>
    </div>
    </Fragment>
}

export default Home;