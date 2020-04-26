import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        console.log('side drawer clicked')
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        console.log('menu clicked')
        this.setState((prevState)=>{ return { showSideDrawer: !prevState.showSideDrawer}});
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar clicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }    
}

export default Layout;