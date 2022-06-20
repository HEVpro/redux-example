

// Every reducer has his own state
import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESS, EDIT_PRODUCT_ERROR, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_DELETE, GET_PRODUCT_EDIT,
    START_DOWNLOAD_PRODUCTS
} from "../types/types";

const initialState = {
    products:  [],
    error: false,
    loading: false,
    deleteProduct: null,
    editProduct: null
}
export default function(state = initialState, action){
    switch (action.type){
        case START_DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                products: [...state.products, action.payload]
            };
        case EDIT_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading:false,
                error: action.payload
            };
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                error: false,
                products: action.payload
            }
        case DOWNLOAD_PRODUCTS_ERROR:
            return{
                ...state,
                loading:false,
                error:true,
            }
        case GET_PRODUCT_DELETE:
            return{
                ...state,
                deleteProduct: action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                products: state.products.filter(item => item.id !== state.deleteProduct),
                deleteProduct: null
            }
        case GET_PRODUCT_EDIT:
            return{
                ...state,
                editProduct:action.payload
            }
        case EDIT_PRODUCT_SUCCESS:
            return{
                ...state,
                editProduct: null,
                products: state.products.map(product =>
                    product.id === action.payload.id ? product = action.payload : product
                )
            }
        default:
            return state;
    }
}