import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients)
    .map(igkey => {
        return (
            <li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}
            </li>
        );
    });
    return (
        <Auxiliary>
            <h3>Your Order:</h3>
            <p>Your delicious burger is ready with the following ingredients:</p>
            <ul>
                {ingredientsList}
            </ul>
            <Button btnType='Success' clicked={props.successHandler}>CHECKOUT</Button>
            <Button btnType='Danger' clicked={props.cancelHandler}>CANCEL</Button>
            
        </Auxiliary>
    );
};



export default orderSummary;