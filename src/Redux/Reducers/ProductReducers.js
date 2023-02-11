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


// DISPLAY PRODUCT REDUCERS
export const ProductReducers = (state = {Products : []}, Actions) => {

        switch (Actions.type) {
            case All_PRODUCT_REQUEST :
                return{
                    loading : true,
                    Products : []
                };
            case All_PRODUCT_SUCCESS :
                return{
                    loading : false,
                    Products : Actions.payload.allproducts,
                    productCounts : Actions.payload.productCounts,
                    resultPerPage : Actions.payload.resultPerPage
                };

            case All_PRODUCT_FAILED :
                return{
                    loading : false,
                    error : Actions.payload
                };

            case CLEAR_ERRORS :
                return{
                    ...state,
                    error : null
                }
                
            default:
                return state;
        }
}

// DISPLAY PRODUCT DETAILS REDUCERS
export const ProductDetailReducers = (state = {ProductDetail : {}}, Actions) => {

    //console.log("ACTION : ", Actions);
    switch (Actions.type) {
        case PRODUCT_DETAIL_REQUEST :
            return{
                loading : true,
                ...state
            };
        case PRODUCT_DETAIL_SUCCESS :
            return{
                loading : false,
                ProductDetail : Actions.payload.productDetail
            };

        case PRODUCT_DETAIL_FAILED :
            return{
                loading : false,
                error : Actions.payload
            };

        case CLEAR_ERRORS :
            return{
                ...state,
                error : null
            }
            
        default:
            return state;
    }
}