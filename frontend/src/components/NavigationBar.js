import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import SideBar from './SideBar'

import { Link } from 'react-router-dom'
import store from '../redux/store'
import {connect} from 'react-redux'
import { LOGIN_USER, LOGIN_COMPANY} from '../redux/types'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    title : {
        marginLeft: '45px',
        fontSize : '32px',
        marginTop : '5px',
        flexGrow: 1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontWeight : '600'
    },
    button: {
        fontSize : '17px',
        textTransform : 'capitalize',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    appbar : {
        height : '100px',
        paddingTop : '10px'
    }, 
    menuicon: {
        fontSize : '25px',
        marginLeft: '15px',
        marginTop : '10px'
    },
    profile: {
        marginRight : '40px',
        fontSize : '17px',
        fontWeight: 600,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
})

    let mainlink = window.location.href //http://localhost:3000/customer/jui@gmail.com
    let type = mainlink.split("/")[3]
    let username = mainlink.split("/")[4]

    if(type === "customer"){
        store.dispatch({
            type : LOGIN_USER,
            payload : username 
        })
    }
    else if(type === "products"){
        store.dispatch({
            type : LOGIN_COMPANY,
            payload : { username : username}  
        })
    }

class NavigationBar extends Component {
    render(){
        const { classes } = this.props
        
        // let cookie = document.cookie
        
        // try {
        //     let u1Type = cookie.split(";")[0].split("=")[0]
        //     let u1Value = cookie.split(";")[0].split("=")[1]
        //     if(type === "customer" && u1Type === "customer"){
        //         store.dispatch({
        //             type : LOGIN_COMPANY,
        //             payload : { username : u1Value}  
        //         })
        //     } 
        //   }
        //   catch(err) {
        //     console.log(err)
        //   }
        // try {
        //     let u2Type = cookie.split(";")[1].split("=")[0]
        //     let u2Value = cookie.split(";")[1].split("=")[1]
        //     if (type === "products" && u2Type === "company"){
        //         store.dispatch({
        //             type : LOGIN_COMPANY,
        //             payload : { username : u2Value}  
        //         })
        //     }
        //   }
        //   catch(err) {
        //     console.log(err)
        //   }
        
 

        return (
            <div >
                <AppBar position="relative" color="transparent" className={classes.appbar} >
                    <Toolbar style={{ height: 50}}>
                        <SideBar className={classes.menuicon} />
                        <div className={classes.title}>
                            <span style={{color : '#162328', fontWeight: 700}}>Veritas</span>
                        </div>
        
                        {/* login */}
                        {!this.props.user.authenticated && !this.props.company.authenticated && (
                            <Button className={classes.button} component = {Link} to="/login" >
                                Login
                            </Button>)}


                        {/* keys */}
                        {this.props.user.authenticated && (
                            <Button className={classes.profile} component = {Link} to={`/customer/${this.props.user.authenticatedUser.username}/keys`}>
                                Keys
                            </Button>)}

                        {this.props.company.authenticated && (
                            <Button className={classes.profile} component = {Link} to={`/company/${this.props.company.authenticatedCompany.username}/keys`}>
                                Keys
                            </Button>)}

                        {/* profile */}
                        {this.props.user.authenticated && (
                            <div className={classes.profile} >
                                {this.props.user.authenticatedUser.username}
                            </div>)}

                        {this.props.company.authenticated && (
                            <div className={classes.profile} >
                                {this.props.company.authenticatedCompany.username}
                            </div>)}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    company : state.company
})

export default connect(mapStateToProps, {} )(withStyles(styles)(NavigationBar))
