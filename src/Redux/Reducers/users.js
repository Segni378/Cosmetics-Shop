
export default (state=[],action) =>{
    const {type,payload} = action
    switch (type) {
        case 'FETCH_ALL':
            return payload
        
        default:
            return state;
    }
}