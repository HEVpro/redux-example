import React, {useEffect, useState}  from 'react';
import {useSelector, useDispatch} from "react-redux";
import {editProductAction} from "../actions/productActions";
import {useNavigate} from "react-router-dom";

const EditProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editProduct = useSelector((state) => state.products.editProduct)
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: ""
    })
    const { name, price} = newProduct;

    useEffect(() => {
        setNewProduct(editProduct)
    }, [editProduct])

    const onChangeForm = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value

        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(editProductAction(newProduct));
        navigate("/")
    }

    return (
        <div className={" flex justify-between px-10 py-2"}>
            <div className={"w-full flex flex-col items-center py-14"}>
                <h1> Edit Product</h1>
                <form
                    onSubmit={onSubmit}
                    className={"border-2 rounded-md flex flex-col px-2 py-4"}
                >
                    <div>
                        <label>Product name</label>
                        <input type={"text"}
                               name={"name"}
                               value={name}
                               onChange={onChangeForm}
                               placeholder={"Product name"}
                               className={"border-2 border-scale-100 ml-2"}/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type={"number"}
                               name={"price"}
                               value={price}
                               onChange={onChangeForm}
                               placeholder={"Price product"} className={"border-2 border-scale-100 my-2 ml-2"}/>
                    </div>
                    <button type={"submit"} className={"border-2 rounded-md w-full"}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}
export default EditProduct