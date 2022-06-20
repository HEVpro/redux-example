import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getProductEdit} from "../actions/productActions";
import Swal from "sweetalert2";

const Product = ({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const confirmDeleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(id));
            }
        })

    }
    const redirectEdit = (product) => {
        dispatch(getProductEdit(product))
        navigate(`/products/edit/${product.id}`)
    }
    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price} €</td>
            <td>
                <button onClick={() => redirectEdit(product)} >
                    Edit
                </button>
                <button onClick={() => confirmDeleteProduct(product.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default Product