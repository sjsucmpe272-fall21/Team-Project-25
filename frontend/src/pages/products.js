import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles' 
import Grid from '@material-ui/core/Grid'
import ProductCard from '../components/ProductCard'
//redux
import {connect} from 'react-redux'
import {getProducts} from '../redux/actions/companyActions'

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

class products extends Component {

    componentDidMount(){
        const username = this.props.match.params.username
        this.props.getProducts(username)
    }

    displayProducts(){
        const {products} = this.props.company.productsDescription
        return products.map((product) => <ProductCard  product={product} />)
    }

    render() {
        const { classes } = this.props
        const {productsDescription} = this.props.company

        return (
            <Grid container direction="row" className={classes.main}>
                <Grid item sm={12} className={classes.head}>
                    <span className={classes.comp}>{productsDescription.company_name}</span> / All Products 
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

export default connect(mapStateToProps, {getProducts} )(withStyles(styles)(products))