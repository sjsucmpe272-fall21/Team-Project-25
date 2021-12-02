import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles' 
import Grid from '@material-ui/core/Grid'

//redux
import {connect} from 'react-redux'
import {getKeysCompany } from '../redux/actions/companyActions'

const styles = (theme) => ({
    ...theme.spread,
    company : {
        fontWeight : 700,
        fontSize : '25px',
        marginBottom : '40px',
        color : '#363636'
    },
    key : {
        fontWeight : 700,
        fontSize : '20px',
        paddingTop : '40px'
    },
    text : {
        padding : '40px'

    }
})

class companyKeys extends Component {

    componentDidMount(){
        const username = this.props.match.params.username
        this.props.getKeysCompany(username)
    }

    render() {
        const username = this.props.match.params.username

        const { classes } = this.props
        const { keys } = this.props.company

        return (
            <Grid container item direction="column" alignItems="left" justifyContent="center" className={classes.text} >
                <Grid item className={classes.company}>
                    Keys for <span style={{fontWeight : 700, fontSize : '29px',color : 'black'}}><u>{username}</u></span>
                </Grid>
                <Grid item className={classes.text1} >
                    <span className={classes.key}>Private Key : </span>{keys.private_key}
                </Grid>
                <Grid item className={classes.text1} >
                    <span className={classes.key}>Public Key : </span>{keys.public_key}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    company : state.company
})

export default connect(mapStateToProps, {getKeysCompany} )(withStyles(styles)(companyKeys))