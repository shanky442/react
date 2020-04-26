import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return(
        <ul className={classes.NavigationItems}> 
            <NavigationItem link="/" active='true'>Checkout</NavigationItem>
            <NavigationItem link="/">Logout</NavigationItem>
        </ul>
    );
}

export default navigationItems;