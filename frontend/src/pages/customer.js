import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles' 
import Grid from '@material-ui/core/Grid'
import ProductCard from '../components/ProductCard'
//redux
import {connect} from 'react-redux'
import {getCustomerProducts} from '../redux/actions/userActions'

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
    comp : {
        fontSize : '30px',
        fontWeight : '700',
        color : '#000000'
    }
})

class customer extends Component {

    componentDidMount(){
        const username = this.props.match.params.username
        this.props.getCustomerProducts(username)
    }

    displayProducts(){
        const {products} = this.props.user.productsDescription
        const username = this.props.match.params.username

        return products.map((product) => <ProductCard key={product.sku} username = {username} product={product} />)
    }

    render() {
        const { classes } = this.props
        const {productsDescription} = this.props.user
        const username = this.props.match.params.username
        
        
        return (
            <Grid container direction="row" className={classes.main}>
                <Grid item sm={12} className={classes.head}>
                    <span className={classes.comp}>{username}</span> / All Products 
                </Grid>
                <Grid container direction="row" item  sm={12} spacing={2}>
                    { productsDescription && this.displayProducts()}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    company : state.company
})

export default connect(mapStateToProps, {getCustomerProducts} )(withStyles(styles)(customer))