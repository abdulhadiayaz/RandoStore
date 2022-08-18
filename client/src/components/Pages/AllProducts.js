import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const AllProducts = ({ addToCart }) => {
    const [products, setProduct] = useState([{}]);

    useEffect(() => {
        const result = async () => {
            const response = await axios.get("http://localhost:3000/items");
            //console.log(response.data);
            setProduct(response.data);
        }
        result();
    }, []);

    return <Fragment>
        <div className="container">
            <h1 className="text-center p-3">Products List</h1>
            <div className="w-75 mx-auto mb-5">

                {products.map((product, id) => (
                    <div className="row shadow-sm border-0" key={id}>
                        <div className="d-flex justify-content-between align-items-center p-2" >
                            <div className="d-inline-flex align-items-center">
                                <img src={product.img} width="200px" className="img-fluid mb-3 " alt={product.name} ></img>
                                <h5 className="title p-5">{product.name}</h5>
                            </div>
                            <p className="text">Rs.{product.price} </p>
                            <button onClick={() => addToCart(product)} className="btn btn-danger">Add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </Fragment>
}

export default AllProducts;