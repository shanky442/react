import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    let classNames = [classes.SideDrawer, classes.Close];
    if(props.open) {
        classNames = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={classNames.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>            
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>        
    );
}

export default sideDrawer;
