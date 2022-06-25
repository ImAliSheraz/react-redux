import pathNames from "../RoutePath";
import Login from "../../views/auth/Login";
import SignUp from "../../views/auth/SignUp";

const authSwitch = [
    { path: "/", component: Login },
    { path: pathNames.login, component: Login },
    { path: pathNames.signUp, component: SignUp },
]

export default authSwitch;