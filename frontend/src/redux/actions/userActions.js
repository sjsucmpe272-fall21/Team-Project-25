import { LOGIN_USER, GET_CUSTOMER_PRODUCTS, GET_CUSTOMER_KEYS} from '../types'
import axios from 'axios'

export const signupUser = (newUser, history) => (dispatch) => {
    console.log("in signupUser")

    axios.post('http://localhost:5000/signup/customer', newUser)
        .then(res => {
            history.push(`/login`)
            console.log("signup message"+ res.message)
        })
        .catch(err => {
            console.log(err)
        })
}

export const loginUser = (newUser, history) => (dispatch) => {
    axios.post('http://localhost:5000/signin/customer', newUser)
        .then(res => {
            dispatch({
                type : LOGIN_USER,
                payload : newUser.username
            })
            history.push(`/customer/${newUser.username}`)
            console.log("login successful")
        })
        .catch(err => {
            console.log(err)
        })
}

export const getCustomerProducts = (username) => (dispatch) => {
    axios.get(`http://localhost:5000/customer/${username}`)
      .then(res => {
        dispatch({
            type : GET_CUSTOMER_PRODUCTS,
            payload : res.data
        })
        console.log("get products successful")
      })
      .catch(err => {
        console.log(err)
      })
  }

export const transferOwnership = (productTransferOwnershipDetails) => (dispatch) => {
    axios.post(`http://localhost:5000/transfer/product`, productTransferOwnershipDetails)
      .then(res => {
        console.log("transferOwnership result ; "+ res.data)
        // dispatch({
        //     type : GET_PRODUCTS,
        //     payload : res.data
        // })
        console.log("transfer Ownership successful")
      })
      .catch(err => {
        console.log(err)
      })
  }

export const getKeys = (username) => (dispatch) => {
  axios.get(`http://localhost:5000/customer/${username}/keys`)
    .then(res => {
      dispatch({
          type : GET_CUSTOMER_KEYS,
          payload : res.data
      })
      console.log("get Keys successful")
    })
    .catch(err => {
      console.log(err)
    })
}