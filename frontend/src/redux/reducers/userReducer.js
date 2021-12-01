import { LOGIN_USER, GET_CUSTOMER_PRODUCTS } from '../types'

const initialState = {
    authenticatedUser : {},
    authenticated : false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState , action){
    switch(action.type){

        case LOGIN_USER :
            return {
                authenticatedUser : {
                    username : action.payload
                },
                authenticated : true
            } 

        case GET_CUSTOMER_PRODUCTS:
            return {
                ...state,
                productsDescription : action.payload,
            }

        default : 
            return {
                ...state
            }
    }
}