import {LOGIN_COMPANY, GET_PRODUCTS, ADD_PRODUCT, GET_COMPANY_KEYS} from '../types'

const initialState = { 
  authenticatedCompany : {},
  authenticated : false,
  productsDescription : '',
  keys: ''
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
        return {
          ...state,
          productsDescription : {
            ...state.productsDescription,
            products : [
              ...state.productsDescription.products,
              action.payload
            ]
          }
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