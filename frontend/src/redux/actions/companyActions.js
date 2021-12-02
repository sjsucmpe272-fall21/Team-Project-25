import {LOGIN_COMPANY, GET_PRODUCTS, ADD_PRODUCT, GET_COMPANY_KEYS} from '../types'
import axios from 'axios'

//signup a company
export const signupCompany = (newCompany, history) => (dispatch) => {
  console.log("signup data " +JSON.stringify(newCompany))
  axios.post('http://localhost:5000/signup/company', newCompany)
    .then(res => {
        history.push('/companyLogin')
        console.log("company signup message"+ res.message)
      })
    .catch(err => {
        console.log(err)
      })
}

export const loginCompany = (company, history) => (dispatch) => {
  axios.post('http://localhost:5000/signin/company', company)
    .then(res => {
      dispatch({
          type : LOGIN_COMPANY,
          payload : { username : company.username}  
      })
      history.push(`/products/${company.username}`)
      console.log("company login successful")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProducts = (username) => (dispatch) => {
  axios.get(`http://localhost:5000/company/${username}`)
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
  axios.post(`http://localhost:5000/sell/product`, productSellDetails)
    .then(res => {
      console.log("sellProduct result ; "+ res.data)
      // dispatch({
      //     type : GET_PRODUCTS,
      //     payload : res.data
      // })
      console.log("sell Product successful")
    })
    .catch(err => {
      console.log(err)
    })
}

export const addProduct = (productDetails) => (dispatch) => {
  axios.post(`http://localhost:5000/company/add/product`, productDetails)
    .then(res => {
      console.log("addProduct result ; "+ res.data)
      dispatch({
          type : ADD_PRODUCT,
          payload : res.data
      })
      console.log("add Product successful")
    })
    .catch(err => {
      console.log(err)
    })
}

export const getKeysCompany = (username) => (dispatch) => {
  axios.get(`http://localhost:5000/company/${username}/keys`)
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