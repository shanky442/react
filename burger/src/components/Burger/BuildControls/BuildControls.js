import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total price: <strong>{props.price}</strong></p>
        {controls.map(control => {
            return <BuildControl key={control.label} label={control.label} 
            added={() => props.ingredientAdded(control.type)}
            removed = {() => props.ingredientRemoved(control.type)}
            disabled = {props.disabled[control.type]}/>
        })}
        <button className={classes.OrderButton} disabled={!props.orderable} onClick={props.purchaseable}>ORDER NOW</button>
    </div>
)

export default buildControls; 