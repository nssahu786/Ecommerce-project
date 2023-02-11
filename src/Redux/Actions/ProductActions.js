import {
    All_PRODUCT_REQUEST,
    All_PRODUCT_SUCCESS,
    All_PRODUCT_FAILED,

    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILED,
    CLEAR_ERRORS
}
from '../Constants/ProductConstants.js';

import axios from 'axios';

// DISPLAY PRODUCTS ACTIONS
export const getProduct = (currentPage = 1) => async(dispatch) => {
    
    try {
        
        dispatch({ type : All_PRODUCT_REQUEST })
        const { data } = await axios.get(`http://localhost:3008/api/ns/products/?page=${currentPage}`)
        //console.log(data)

        dispatch({
            type : All_PRODUCT_SUCCESS,
            payload : data
        })

    } catch (error) {
        
        dispatch({
            type : All_PRODUCT_FAILED,
            payload : error.response.data.message
        });
    }

}


// DISPLAY PRODUCTS DETAILS ACTIONS
export const getProductDetail = (id) => async(dispatch) => {
    
    try {
        
        dispatch({ type : PRODUCT_DETAIL_REQUEST })
        const { data } = await axios.get(`http://localhost:3008/api/ns/productdetail/${id}`)
        //console.log(data);

        dispatch({
            type : PRODUCT_DETAIL_SUCCESS,
            payload : data
        })

    } catch (error) {
        
        dispatch({
            type : PRODUCT_DETAIL_FAILED,
            payload : error.response.data.message
        });
    }

}



export const clearError = () => async(dispatch) => {
    dispatch({ type : CLEAR_ERRORS });
}