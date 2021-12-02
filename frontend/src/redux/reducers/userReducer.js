import { LOGIN_USER, GET_CUSTOMER_PRODUCTS , SET_AUTHENTICATED, GET_CUSTOMER_KEYS} from '../types'

const initialState = {
    authenticatedUser : {},
    authenticated : false,
    keys : ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState , action){
    switch(action.type){

        case SET_AUTHENTICATED :
            return {
                ...state,
                authenticatedUser : action.payload,
                authenticated : true
            }

        case LOGIN_USER :
            return {
                ...state,
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

        case GET_CUSTOMER_KEYS:
            return {
                ...state,
                keys : action.payload,
            }
            
        default : 
            return {
                ...state
            }
    }
}