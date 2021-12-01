import {LOGIN_COMPANY, GET_PRODUCTS} from '../types'
import axios from 'axios'

//signup a company
export const signupCompany = (newCompany, history) => (dispatch) => {
  console.log("signup data " +JSON.stringify(newCompany))
  axios.post('https://veritas-server.herokuapp.com/signup/company', newCompany)
    .then(res => {
        history.push('/companyLogin')
        console.log("company signup message"+ res.message)
      })
    .catch(err => {
        console.log(err)
      })
}

export const loginCompany = (company, history) => (dispatch) => {
  axios.post('https://veritas-server.herokuapp.com/signin/company', company)
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
  axios.get(`https://veritas-server.herokuapp.com/company/${username}`)
    .then(res => {
      console.log("getProducts result ; "+ res.data)
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