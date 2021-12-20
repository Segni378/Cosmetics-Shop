import * as api from '../../api/index';

export const asyncAddProduct = (productData) => async (dispatch) => {
    try {
        const product = await api.addProduct(productData);
        const {data} = product;
        dispatch({ type: "addproduct", payload: data});
        
    }catch(error) {
        console.log(error.response.data);
    }
}  