import { Fragment, useState } from "react";
import axios from "axios";


const AddProduct = () => {

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const [productNameIsValid, setProductNameIsValid] = useState(true);
    const [priceIsValid, setPriceIsValid] = useState(true);
    const [imgIsValid, setImgIsValid] = useState(true);
    const [formSubmitionStatus, setFormSubmitionStatus] = useState("notSubmitted");


    /* onInput Change Handlers */
    const nameInputChangeHandler = (event) => {
        setProductNameIsValid(true);
        setProductName(event.target.value)
    }

    const priceInputChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const imageInputChangeHandler = (event) => {
        setImg(event.target.value)
    }

    /* Submit button handler */
    const submitHandler = (event) => {
        event.preventDefault();

        const isFormValid = formValidation();
        console.log("here: ", isFormValid);
        if (isFormValid) {
            const formData = {
                name: productName,
                price: price,
                img: img
            };

            axios.post("http://localhost:3000/items/", formData)
                .then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.log(err);
                });

            setFormSubmitionStatus("submitted");
            setProductName("");
            setPrice("");
            setImg("");
        }
    }

    /* Form Validation */
    const formValidation = () => {
        let isValid = true;

        if (productName === "") {
            setProductNameIsValid(false);
            isValid = false;
        } else {
            setProductNameIsValid(true);
        }

        if (price === "") {
            setPriceIsValid(false);
            isValid = false;
        } else {
            setPriceIsValid(true);
        }

        if (img === "") {
            setImgIsValid(false);
            isValid = false;
        } else {
            setImgIsValid(true);
        }

        return isValid;
    }

    return <Fragment>
        <div className="container-fluid">
            <h1 className="display-5 text-center mt-4">Add Products</h1>
            <div className="row d-flex justify-content-center align-items-center">
                <form onSubmit={submitHandler} className="w-50">
                    <div className="form-group ">
                        <label>Product Name</label>
                        <input type="text" onChange={nameInputChangeHandler} value={productName} name="productName" className="form-control" placeholder="E.g Clock" />
                        {!productNameIsValid && <p className="text-danger">Please enter product name.</p>}
                    </div>

                    <div className="form-group pt-4">
                        <label>Product Price</label>
                        <input
                            type="text" onChange={priceInputChangeHandler} value={price} name="price" className="form-control" placeholder="Rs.123" />
                        {!priceIsValid && <p className="text-danger">Please enter product price.</p>}

                    </div>

                    <div className="form-group pt-4">
                        <label>Product Image</label>
                        <input type="text" onChange={imageInputChangeHandler} value={img} name="img" className="form-control" placeholder="Image Url" />
                        {!imgIsValid && <p className="text-danger">Please insert product image URL.</p>}
                    </div>
                    <div className="form-group pt-4">
                        <button type="submit" className="btn btn-danger btn-block">
                            Add Product
                        </button>
                    </div>
                </form>
                {formSubmitionStatus === 'submitted' && (
                        <p className="text-succes fw-light fs-5 text-center">Product added successfully! </p>
                )}
            </div>
        </div>
    </Fragment>

}

export default AddProduct;