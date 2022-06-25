import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import Header from '../../views/Header';
function ProtectedRoute(props) {
    const history = useNavigate();
    useEffect(() => {
        const userToken = localStorage.getItem("user-token");
        if (userToken == null) {
            console.log("token not found")
            history.push("/login");
        }
    }, [history]);
    return (
        <>
            <Header />
            <Route
                key={props.key}
                path={props.path}
                exact={props.exact}
                component={props.component}
            />
        </>
    );
}
export default ProtectedRoute;