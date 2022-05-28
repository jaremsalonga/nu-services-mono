import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useCookies } from 'react-cookie'
import { UserContext } from "../../contexts/user/userContext";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {

    let user;

    let isAllowed = false;

    const [state, dispatch] = React.useContext(UserContext)

    const [cookies] = useCookies(['token']);

    if (cookies.token) {
        user = jwt_decode(cookies.token);
        isAllowed = rest.role.includes(user.role);
        dispatch({ type: "setUser", payload: user })
    }

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            user && isAllowed ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;