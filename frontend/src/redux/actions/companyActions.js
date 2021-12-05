import {LOGIN_COMPANY, GET_PRODUCTS, ADD_PRODUCT, GET_COMPANY_KEYS, SELL_PRODUCT, SET_COMPANY_ERROR} from '../types'
import axios from 'axios'

//signup a company
export const signupCompany = (newCompany, history) => (dispatch) => {
  console.log("signup data " +JSON.stringify(newCompany))
  axios.post('http://54.172.120.22:8080/signup/company', newCompany)
    .then(res => {
        history.push('/companyLogin')
        console.log("company signup message"+ res.message)
      })
    .catch(err => {
        console.log(err)
      })
}

export const loginCompany = (company, history) => (dispatch) => {
  axios.post('http://54.172.120.22:8080/signin/company', company)
    .then(res => {
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      dispatch({
          type : LOGIN_COMPANY,
          payload : { username : company.username}  
      })
      document.cookie = "company="+company.username
      history.push(`/products/${company.username}`)
      console.log("company login successful")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProducts = (username) => (dispatch) => {
  axios.get(`http://54.172.120.22:8080/company/${username}`)
    .then(res => {
      // console.log("getProducts result ; "+ res.data)
      dispatch({
          type : GET_PRODUCTS,
          payload : res.data
      })
      console.log("get products successful")
    })
    .catch(err => {
      console.log(err)
    })
}

export const sellProduct = (productSellDetails) => (dispatch) => {
  axios.post(`http://54.172.120.22:8080/sell/product`, productSellDetails)
    .then(res => {
      console.log("sellProduct result ; "+ res.data)
      dispatch({
          type : SELL_PRODUCT,
          payload : productSellDetails.product_id
      })
      console.log("sell Product successful")
    })
    .catch(err => {
      if(err.message === "Request failed with status code 400"){
        alert("User not available")
      }
      console.log(JSON.stringify("user not available"))
    })
}

export const addProduct = (productDetails) => (dispatch) => {
  axios.post(`http://54.172.120.22:8080/company/add/product`, productDetails)
    .then(res => {
      console.log("addProduct result ; "+ res.data)
      dispatch({
          type : ADD_PRODUCT,
          payload : productDetails
      })
      console.log("add Product successful")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getKeysCompany = (username) => (dispatch) => {
  axios.get(`http://54.172.120.22:8080/company/${username}/keys`)
    .then(res => {
      dispatch({
          type : GET_COMPANY_KEYS,
          payload : res.data
      })
      console.log("get Keys company successful")
    })
    .catch(err => {
      console.log(err)
    })
}