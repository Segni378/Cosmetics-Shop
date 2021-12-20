import axios from 'axios'
import * as api from '../../api'

export const createReviews = (formData) => 
    async dispatch =>{
       // review,rating,user,product
    try {
        const res = api.createReviews(formData)
        console.log(res)
        dispatch({
            type:'CREATE_REVIEWS',payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}
