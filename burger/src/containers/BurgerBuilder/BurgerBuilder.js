import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 1,
    meat: 2,
    bacon: 2
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        orderable: false,
        purchaseable: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount =  oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.orderableCheckHandler(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0 ) {
            return;
        }
        const newCount =  oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.orderableCheckHandler(updatedIngredients);
    }

    orderableCheckHandler(ingCopy) {
        // const ingCopy = {
        //     ...this.state.ingredients
        // }
        let orderSum = Object.keys(ingCopy).map(igkey => {
            return ingCopy[igkey];
        }).reduce((sum, el) => {
            return sum+el;
        },0);
        console.log("order sum "+orderSum);
        this.setState({orderable: orderSum>0});
    }

    puchaseableHandler = () => {
        this.setState({purchaseable: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchaseable: false});
    }

    osSuccessHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?'+queryString            
        });
    }
 
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        console.log("disabled info"+JSON.stringify(disabledInfo));
        console.log("purchaseable:"+this.state.purchaseable)
        return(
            <Auxiliary>
                <Modal show={this.state.purchaseable} purchaseCancel={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} successHandler={this.osSuccessHandler} 
                    cancelHandler={this.purchaseCancelHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchaseable={this.puchaseableHandler}
                    orderable = {this.state.orderable}/> 
            </Auxiliary>
        );        
    }
}

export default BurgerBuilder;