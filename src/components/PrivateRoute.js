import { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...wonderProperties }) => {  // const PrivateRoute = (props) => 
    // console.log(component);
    console.log(wonderProperties);
    return (
        <Route {...wonderProperties} render={() => localStorage.getItem('token') ?
            (<Component {...wonderProperties} />) :
            (<Redirect to="/" />)}
        />
    )
}

export default PrivateRoute;