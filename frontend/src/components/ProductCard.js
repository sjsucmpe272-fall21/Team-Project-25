import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import {connect} from 'react-redux'

const styles = (theme) => ({
    ...theme.spread,
    card : {
        border : '1px solid #E4E2E0',
        paddingLeft : '10px',
        paddingRight : '10px',
        marginRight : '20px'
    },
    name : {
        paddingTop : '10px',
        fontWeight : '500'
    },
    desc : {
        maxHeight: '20px',
        maxWidth: '250px',
        overflow: 'hidden',
        fontSize : '13px',
        color : '#363535'
    },
    sku : {
        fontWeight : '500',
        paddingTop: '20px',
        fontSize : '14px'
    },
})


class ProductCard extends Component {
    render(){
        const { classes } = this.props
        const {name, description, sku} = this.props.product

        return (
            <Grid container item sm={3} className={classes.card}>
                <Grid item xs={12} className={classes.name}>
                    {name}
                </Grid>
                <Grid item xs={12} className={classes.desc}>
                    {description}
                </Grid>
                <Grid item xs={12} className={classes.sku}>
                    SKU : {sku}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    company : state.company
})

export default connect(mapStateToProps, {} )(withStyles(styles)(ProductCard))