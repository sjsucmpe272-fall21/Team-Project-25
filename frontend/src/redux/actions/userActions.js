import { LOGIN_USER, GET_CUSTOMER_PRODUCTS, GET_CUSTOMER_KEYS} from '../types'
import axios from 'axios'

export const signupUser = (newUser, history) => (dispatch) => {
    console.log("in signupUser")

    axios.post('http://54.172.120.22:8080/signup/customer', newUser)
        .then(res => {
            history.push(`/login`)
            console.log("signup message"+ res.message)
        })
        .catch(err => {
            console.log(err)
        })
}

export const loginUser = (newUser, history) => (dispatch) => {
    axios.post('http://54.172.120.22:8080/signin/customer', newUser)
        .then(res => {
          document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            dispatch({
                type : LOGIN_USER,
                payload : newUser.username
            })
            document.cookie = "customer="+newUser.username
            history.push(`/customer/${newUser.username}`)
            console.log("login successful")
        })
        .catch(err => {
            console.log(err)
        })
}

export const getCustomerProducts = (username) => (dispatch) => {
    axios.get(`http://54.172.120.22:8080/customer/${username}`)
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
    axios.post(`http://54.172.120.22:8080/transfer/product`, productTransferOwnershipDetails)
      .then(res => {
        console.log("transferOwnership result ; "+ res.data)
        // dispatch({
        //     type : GET_PRODUCTS,
        //     payload : res.data
        // })
        console.log("transfer Ownership successful")
      })
      .catch(err => {
        if(err.message === "Request failed with status code 400"){
          alert("User not available")
        }
        console.log(JSON.stringify("user not available"))
      })
  }

export const getKeys = (username) => (dispatch) => {
  axios.get(`http://54.172.120.22:8080/customer/${username}/keys`)
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