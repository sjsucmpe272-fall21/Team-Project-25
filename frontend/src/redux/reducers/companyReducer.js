import {LOGIN_COMPANY, GET_PRODUCTS, ADD_PRODUCT, GET_COMPANY_KEYS} from '../types'

const initialState = { 
  authenticatedCompany : {},
  authenticated : false,
  productsDescription : '',
  keys: '',
  error : ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
  switch(action.type){

      case LOGIN_COMPANY :
        return {
          ...state,
          authenticatedCompany : {
            ...state.authenticatedCompany,
            username : action.payload.username,
          },
          authenticated : true
        }
       
      case GET_PRODUCTS:
        return {
          ...state,
          productsDescription : action.payload,
        }

      case ADD_PRODUCT:

      console.log("action.payload"+action.payload)
        return {
          ...state,
        }

        
      case GET_COMPANY_KEYS:
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