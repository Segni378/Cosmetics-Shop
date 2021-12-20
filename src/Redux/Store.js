import {createStore,applyMiddleware} from 'redux'
import { 
    composeWithDevTools
 } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

const searchResultFromLocalStorage = localStorage.getItem("searchProducts") ? JSON.parse(localStorage.getItem("searchProducts")):[]
const initialState = {
    searchProducts : searchResultFromLocalStorage
};
const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store