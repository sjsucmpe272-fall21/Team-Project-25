import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react"
import {signupUser} from '../redux/actions/userActions'

import store from '../redux/store'
import { SET_AUTHENTICATED } from '../redux/types'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    logo : {
        marginRight: theme.spacing(2),
    },
    title : {
        fontFamily: 'Bebas Neue',
        fontSize : '35px',
        marginTop : '5px',
        flexGrow: 1
    },
    login: {
        color : 'black',
        fontSize : '17px',
        textTransform : 'capitalize',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    profile : {
        width: theme.spacing(5),
        height: theme.spacing(5),
        objectFit: 'cover',
        borderRadius: '50%',
    },
    profileB : {
        marginRight : '15px'
    }
})


const NavigationBar = (props) => {

    const { classes } = props

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        // logout 
    } = useAuth0();

    if(isAuthenticated){

        let userDetails = {
           firstName : user.given_name,
           lastName : user.family_name,
           profilePicture : user.picture,
           email : user.email,
           username : user.nickname
        }
        store.dispatch({
            type : SET_AUTHENTICATED,
            payload : userDetails
        })

        let newUser = {
            username : userDetails.email,
            password : 'none'
        }
        store.dispatch(signupUser(newUser))
    }

    return (
        <div >
            <AppBar position="relative" color="transparent" >
                <Toolbar style={{ height: 50}}>

                    
                    <div className={classes.title}>
                        <span style={{color : '#162328', fontWeight: 700, }}>Veritas</span>
                    </div>

                    {/* login */}
                    {!isAuthenticated && (
                        <Button className={classes.login} color="primary" onClick={() => loginWithRedirect()}>
                            Login
                        </Button>)}

                    {/* profile pic */}
                    {isAuthenticated && ( 
                        <Button color="primary" component = {Link} to="/" className={classes.profileB}  >
                            <img className={classes.profile} src={user.picture}  alt="Profile"/>
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default (withStyles(styles)(NavigationBar))