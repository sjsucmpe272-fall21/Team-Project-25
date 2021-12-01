import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles' 
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {signupCompany} from '../redux/actions/companyActions'

const styles = (theme) => ({
    ...theme.spread,
    text1 : {
        fontSize : '30px',
        marginTop : '50px',
        fontWeight : '600'
    },
    textField : {
        marginTop : '10px',
    },
    submit : {
        marginTop : '10px',
        backgroundColor : '#4c7291',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    create : {
        color : '#4c7291',
        textDecoration : 'none', 
        marginLeft :'10px',
        fontSize : '15px',
    },
    new : {
        textDecoration : 'none', 
        fontSize : '15px',
    }, 
    text3 : {
        marginTop : '10px'
    },
    errors : {
        fontSize : '14px',
        color : "red"
    }
})

class companySignup extends Component {
    
    state = {
        name : '',
        username : '',
        password : ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var newCompany = {
            name : this.state.name,
            username : this.state.username,
            password : this.state.password,
        }
  console.log("signup data handle " +JSON.stringify(newCompany))

        this.props.signupCompany(newCompany, this.props.history)
    }

    render() {
        const { classes } = this.props
        return (
            <Grid container direction="row">
                <Grid item sm={4}>
                </Grid>

                <Grid item sm={4}>
                    <Grid item sm={12}  className={classes.text1}>
                        Sign up your company
                    </Grid>
                    
                    <form noValidate onSubmit = {this.handleSubmit }>
                        <TextField 
                            id ="name" 
                            name="name" 
                            placeholder="Company Name" 
                            type="text"
                            className={classes.textField}
                            variant="outlined"
                            value={this.state.name} 
                            onChange= {this.handleChange} fullWidth 
                            color ='secondary'
                        />

                        <TextField 
                            id ="username" 
                            name="username" 
                            placeholder="Username" 
                            type="username"
                            className={classes.textField}
                            variant="outlined"
                            value={this.state.username} 
                            onChange= {this.handleChange} fullWidth 
                            color ='secondary'
                        />

                        <TextField 
                            id ="password" 
                            name="password" 
                            placeholder="Password" 
                            type="password"
                            className={classes.textField}
                            variant="outlined"
                            value={this.state.password} 
                            onChange= {this.handleChange} fullWidth 
                            color ='secondary'
                        />

                        <Button type="submit" variant="contained" fullWidth className={classes.submit} >
                            Signup
                        </Button>

                        {/* <Typography className={classes.errors}>
                            {this.props.errors.signupRestError ? this.props.errors.signupRestError : ''}
                        </Typography> */}

                        <Typography type="submit" className={classes.text3}>
                            <span className={classes.new} >
                                Already a member? 
                            </span>
                            <Typography className={classes.create} component = {Link} to="/companyLogin" >
                                Login here
                            </Typography>
                        </Typography>
                    </form>
                </Grid>

                <Grid item sm={4}>
                </Grid>
                
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    errors : state.errors
})

export default connect(mapStateToProps, {signupCompany} )(withStyles(styles)(companySignup))