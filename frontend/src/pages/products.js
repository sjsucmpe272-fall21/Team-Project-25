import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles' 
import Grid from '@material-ui/core/Grid'
import ProductCard from '../components/ProductCard'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'

//redux
import {connect} from 'react-redux'
import {getProducts, addProduct } from '../redux/actions/companyActions'

const styles = (theme) => ({
    ...theme.spread,
    main : {
        padding : '20px'
    },
    text1 : {
        fontSize : '30px',
        marginTop : '50px',
        fontWeight : '600'
    },
    head : {
        fontSize : '25px',
        marginBottom : '30px',
        fontWeight : '600',
        color : '#333333'
    },
    add : {
        fontSize : '20px',
        marginBottom : '30px',
        fontWeight : '600',
        color : '#333333'
    },
    comp : {
        fontSize : '30px',
        fontWeight : '700',
        color : '#000000'
    },
    button : {
        marginBottom: '40px',
        color : 'black',
        fontWeight : 700,
        marginTop : '10px',
        backgroundColor : '#cceb34',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    title : {
        width : '500px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontWeight : 700,
        fontSize : '22px'
    }
})

class products extends Component {
    state = {
        open : false,
        product_name : '',
        product_description : '',
        product_sku : ''
    }

    componentDidMount(){
        const username = this.props.match.params.username
        this.props.getProducts(username)
    }

    handleOpen = () => {
        this.setState({
            open : true
        })
    }

    handleClose = () => {
        this.setState({
            open : false,
            product_name : '',
            product_description : '',
            product_sku : ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    displayProducts(){
        const {products} = this.props.company.productsDescription
        const username = this.props.match.params.username

        return products.map((product) => <ProductCard key={product.sku} username = {username} product={product} />)
    }

    handleAddProduct(){
        let productDetails = {
            username : this.props.username,
            product_name : this.state.productName,
            product_description : this.state.productDescription,
            product_sku : this.state.productSku,
        }

        console.log("addProduct :"+JSON.stringify(productDetails))
        this.props.addProduct(productDetails)
    }

    render() {
        const { classes } = this.props
        const {productsDescription} = this.props.company

        return (
            <Grid container direction="row" className={classes.main}>
                <Grid item sm={10} className={classes.head}>
                    <span className={classes.comp}>{productsDescription.company_name}</span> / All Products 
                </Grid>
                <Grid item sm={2} className={classes.add}>
                    <Button variant="contained" className={classes.button} onClick={this.handleOpen} >
                        Add Product
                    </Button>
                </Grid>
                <Grid container direction="row" item  sm={12} spacing={2}>
                    { productsDescription && this.displayProducts()}
                </Grid>

                <Dialog open={this.state.open} onClose={this.handleClose} className={classes.dialog} >
                    <DialogTitle>
                        <div className={classes.title} >
                            Add Product
                        </div>
                    </DialogTitle>
                    <DialogContent >
                    <form onSubmit={this.handleSubmit} style={{margin : 'auto 15px'}}>
                        <TextField name="productName" id="productName" label="Product Name" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.productName} variant="outlined" fullWidth />

                        <TextField name="productDescription" id="productDescription" label="Product Description" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.productDescription} variant="outlined" fullWidth />

                        <TextField name="product_sku" id="product_sku" label="Product SKU" type="text" onChange={this.handleChange}
                            style={{marginBottom: '10px'}} value={this.state.product_sku} variant="outlined" fullWidth />

                        <Button type="submit" variant="contained" className={classes.button} onClick={this.handleSellProduct} >
                            Add Product
                        </Button>
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

export default connect(mapStateToProps, {getProducts, addProduct} )(withStyles(styles)(products))