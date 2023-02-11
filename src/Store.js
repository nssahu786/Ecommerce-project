import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductDetailReducers, ProductReducers } from './Redux/Reducers/ProductReducers';
import { authReducer } from './Redux/Reducers/UserReducers';



const Reducer = combineReducers({

    p : ProductReducers,
    pdetail : ProductDetailReducers,
    auth : authReducer
})

const InitialState = {};

const store = createStore(Reducer,InitialState,composeWithDevTools(applyMiddleware(thunk)))



export default store;