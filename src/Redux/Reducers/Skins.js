// eslint-disable-next-line import/no-anonymous-default-export
export default (state=[],action) =>{
    const {type,payload} = action
    switch (type) {
        case 'FETCH_SKIN':
            return payload
        default:
            return state;
    }
}