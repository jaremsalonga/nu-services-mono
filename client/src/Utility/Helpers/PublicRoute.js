import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useCookies } from 'react-cookie'
import jwt_decode  from 'jwt-decode';
import { UserContext } from "../../contexts/user/userContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

    let user;

    const [state, dispatch] = React.useContext(UserContext)

    const [cookies] = useCookies(['token']);

    if (cookies.token) {
        user = jwt_decode(cookies.token);
        dispatch({ type: "setUser", payload: user })
    }

    return (
        <Route {...rest} render={props => (
            user && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;