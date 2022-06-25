import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import pathNames from "../router/RoutePath";
function UnprotectedRoute(props) {
    const history = useNavigate();
    useEffect(() => {
        const userToken = localStorage.getItem("user-token");
        if (userToken != null) {
            history.push(pathNames.Home);
        }
    }, [history]);
    return (
        <>
            <Route
                key={props.key}
                path={props.path}
                exact={props.exact}
                component={props.component}
            />
        </>
    );
}
export default UnprotectedRoute;