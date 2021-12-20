const addproduct = (state = {productData: []}, action) => {
    switch(action.type) {
        case "addproduct": 
        return {
            productData: action.payload
        }
        default: return state
    }
}

export default addproduct;