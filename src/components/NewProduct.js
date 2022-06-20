import React, {useState}  from 'react';
import { createNewProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewProduct = ({history}) => {
    let navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    // use useDispatch
    const dispatch = useDispatch();

    // access to store
    const loading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)

    // call the action from Product Actions
    const addProduct = (product) => dispatch(createNewProduct(product))

    const submitNewProduct = (e) => {
        e.preventDefault();
        // validate form
        if(name.trim() === '' || price <= 0){
            return;
        }
        // if no errors

        // create product
        addProduct({
            name,
            price
        });
        // redirect
        navigate('/')

    }
    return (
        <div className={" flex justify-between px-10 py-2"}>
            <div className={"w-full flex flex-col items-center py-14"}>
                <h1> New Product</h1>
                <form onSubmit={submitNewProduct} className={"border-2 rounded-md flex flex-col px-2 py-4"}>
                    <div>
                        <label>Product name</label>
                        <input
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            type={"text"} placeholder={"Product name"} className={"border-2 border-scale-100 ml-2"}/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input
                            value={price}
                            onChange={(e)=> setPrice(Number(e.target.value))}
                            type={"number"} placeholder={"Price product"} className={"border-2 border-scale-100 my-2 ml-2"}/>
                    </div>
                    <button type={"submit"} className={"border-2 rounded-md w-full"}>
                        Add
                    </button>

                </form>
                {error && <p className={"text-red-500"}>Something went wrong</p>}
            </div>
        </div>
    )
}
export default NewProduct