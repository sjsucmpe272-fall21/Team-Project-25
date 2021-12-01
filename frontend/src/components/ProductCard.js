import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux'
import {sellProduct} from '../redux/actions/companyActions'
import {transferOwnership} from '../redux/actions/userActions'

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
    button : {
        marginBottom: '40px',
        color : 'white',
        fontWeight : 700,
        marginTop : '10px',
        backgroundColor : '#4c7291',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    title : {
        width : '500px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontWeight : 700,
        fontSize : '22px'
    }
})

class ProductCard extends Component {
    state = {
        open : false,
        newOwner : ''
    }

    handleOpen = () => {
        this.setState({
            open : true
        })
    }

    handleClose = () => {
        this.setState({
            open : false,
            newOwner : ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSellProduct(){
        const {sku} = this.props.product
        let productSellDetails = {
            username : this.props.username,
            new_owner : this.state.newOwner,
            product_id : sku
        }

        console.log("sellProduct :"+JSON.stringify(productSellDetails))
        this.props.sellProduct(productSellDetails)
    }

    handleTransferOwnership(){
        const {sku} = this.props.product
        let productTransferOwnershipDetails = {
            username : this.props.username,
            new_owner : this.state.newOwner,
            product_id : sku
        }

        console.log("transferOwnership :"+JSON.stringify(productTransferOwnershipDetails))
        this.props.transferOwnership(productTransferOwnershipDetails)
    }

    render(){
        const { classes } = this.props
        const {name, description, sku} = this.props.product

        let mainlink = window.location.href //http://localhost:3000/customer/jui@gmail.com
        let link = mainlink.split("/")[3]

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
                <Grid item xs={12} className={classes.sell}>
                    {link === "products" ? 
                        <Button variant="contained" className={classes.button} onClick={this.handleOpen} >
                            Sell
                        </Button>
                        :
                        <Button variant="contained" className={classes.button} onClick={this.handleOpen} >
                            Transfer Ownership
                        </Button>
                    }
                </Grid>

                <Dialog open={this.state.open} onClose={this.handleClose} className={classes.dialog} >
                    <DialogTitle>
                        <div className={classes.title} >
                            {link === "products" ? "Sell Product : " : "Transfer Ownership of :" } {name} 
                        </div>
                    </DialogTitle>
                    <DialogContent>
                    <form onSubmit={this.handleSubmit} style={{margin : 'auto 15px'}}>

                        <TextField name="newOwner" id="newOwner" label="New Owner Email ID" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.newOwner} variant="outlined" fullWidth />

                        {link === "products" ? 
                            <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={this.handleSellProduct} >
                                Sell
                            </Button>
                            :
                            <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={this.handleTransferOwnership} >
                                Transfer Ownership
                            </Button>
                        }
                    </form>
                    </DialogContent>
                </Dialog>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    company : state.company
})

export default connect(mapStateToProps, {sellProduct, transferOwnership} )(withStyles(styles)(ProductCard))