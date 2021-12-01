import { LOGIN_USER, GET_CUSTOMER_PRODUCTS } from '../types'
import axios from 'axios'

export const signupUser = (newUser, history) => (dispatch) => {
    console.log("in signupUser")

    axios.post('https://veritas-server.herokuapp.com/signup/customer', newUser)
        .then(res => {
            history.push(`/customer/${newUser.username}`)
            console.log("signup message"+ res.message)
        })
        .catch(err => {
            console.log(err)
        })
}

export const loginUser = (newUser, history) => (dispatch) => {
    axios.post('https://veritas-server.herokuapp.com/signin/customer', newUser)
        .then(res => {
            dispatch({
                type : LOGIN_USER,
                payload : newUser.username
            })
            history.push('/')
            console.log("login successful")
        })
        .catch(err => {
            console.log(err)
        })
}

export const getCustomerProducts = (username) => (dispatch) => {
    axios.get(`https://veritas-server.herokuapp.com/customer/${username}`)
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
    axios.post(`https://veritas-server.herokuapp.com/transfer/product`, productTransferOwnershipDetails)
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