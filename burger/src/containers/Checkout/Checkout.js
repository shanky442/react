import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        console.log('helios',query.entries);
        const ingredients = {};
        for(let param of query.entries()) {
            console.log(param)
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        )
    }
}

export default Checkout;