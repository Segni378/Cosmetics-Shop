// eslint-disable-next-line import/no-anonymous-default-export
export default (state=[],action) =>{
    const {type,payload} = action
    switch (type) {
        case 'FETCH_LOOKS':
            return payload
    
        default:
            return state;
    }
}