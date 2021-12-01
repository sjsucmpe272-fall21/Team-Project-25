import { LOGIN_USER} from '../types'
import axios from 'axios'

export const signupUser = (newUser, history) => (dispatch) => {
    console.log("in signupUser")

    axios.post('https://veritas-server.herokuapp.com/signup/customer', newUser)
        .then(res => {
            history.push('/login')
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
