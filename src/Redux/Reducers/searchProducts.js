export default (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case 'SEARCH_PRODUCTS':
            return payload
        // case 'CREATE_REVIEWS':
        //     return payload
        default:
            return state;
    }
}