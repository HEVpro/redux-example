// add new product
import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESS, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_DELETE, GET_PRODUCT_EDIT,
    START_DOWNLOAD_PRODUCTS, START_EDIT_PRODUCT
} from "../types/types";
import axios from "axios";
import Swal from "sweetalert2";


export function createNewProduct(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            await axios.post(process.env.REACT_APP_AXIOS_BASE_URL + '/products', product)
            dispatch(addProductSuccess(product))
            Swal.fire(
                'Correct',
                'The product was added successfully',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch(addProductError(true))
            Swal.fire(
                'Error',
                'Something went wrong',
                'error'
            )
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
})

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})
const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})

export function getProducts() {
    return async (dispatch) => {
        dispatch(downloadProducts())
        try {
            const response = await axios.get(process.env.REACT_APP_AXIOS_BASE_URL + '/products')
            dispatch(downloadProductsSucess(response.data))
        } catch (error) {
            console.log(error)
            dispatch(downloadProductsError())
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
})
const downloadProductsSucess = (products) => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
})
const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
})
export const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch(getDeletedProduct(id));
        try{
            await axios.delete(process.env.REACT_APP_AXIOS_BASE_URL + `/products/${id}`)
            dispatch(deleteProductSuccess())
            await Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        }catch(error){
            console.log(error)
            dispatch(deleteProductError())
            await Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        }
    }
}
const getDeletedProduct= (id) => ({
    type: GET_PRODUCT_DELETE,
    payload: id
})

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS
})
const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
})
export function getProductEdit(product){
    return (dispatch) => {
        dispatch(getProductAction(product))
    }
}
const getProductAction = (product) => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})

export function editProductAction(product){
    return async (dispatch) => {
        dispatch(editProduct())

        try {
            await axios.put(process.env.REACT_APP_AXIOS_BASE_URL + `/products/${product.id}`, product)
            dispatch(editProductSuccess(product))
        }catch(error){
            dispatch(editProductError())
            console.log(error);
        }
    }
}
const editProduct = () => ({
    type: START_EDIT_PRODUCT
})
const editProductSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})
const editProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
})
