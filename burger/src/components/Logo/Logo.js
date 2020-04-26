import React from 'react';
import classes from './Logo.module.css';
import logoImage from '../../../src/assets/logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="myburger"/>
    </div>
);

export default logo;