import React, {useEffect}  from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getProducts, getProductEdit} from "../actions/productActions";
import Product from "./Product";

const Products = () => {

    // use useDispatch
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products)
    const error = useSelector((state) => state.products.error)
    const loading = useSelector((state) => state.products.loading)

    useEffect(() => {
        const loadProducts = () => dispatch(getProducts());
        loadProducts();
    }, [])
    return (
        <div className={"flex flex-col items-center justify-between px-10 py-2"}>
            <h2 className={"text-2xl"}>Products list</h2>
            {error && <p>There are an error</p>}
            {loading && <p>Loading...</p>}
            <table className={"table-fixed border-2 mt-4"}>
                <thead>
                    <tr>
                        <th scope={"col"} className={"w-64 bg-gray-500 text-white"}>Name</th>
                        <th scope={"col"} className={"w-64 bg-gray-500 text-white"}>Price</th>
                        <th scope={"col"} className={"w-64 bg-gray-500 text-white"}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                {products.length === 0 ? (<span>There are no products</span>) : (
                    products.map((item) => (
                        <Product key={item.id} product={item} />
                        )
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}
export default Products