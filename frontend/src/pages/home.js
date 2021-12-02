import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'    

const styles = (theme) => ({
    ...theme.spread,
    text1 : {
        fontSize : '35px',
        marginTop : '100px',
        fontWeight : '700'
    },
    text2 : {
        fontSize : '17px',
    }
})

class home extends Component {
    
    render() {
        const { classes } = this.props

        return (
            <Grid container item direction="column" alignItems="center" justifyContent="center">
                <Grid item className={classes.text1} >
                    Welcome to Veritas
                </Grid>
                <Grid item className={classes.text2} >
                    An app powered by blockchain
                </Grid>
                <Grid item className={classes.text2} >
                    to allow users to determine the authenticity of a product!
                </Grid>
            </Grid>
        )
    }
}

export default (withStyles(styles)(home))
