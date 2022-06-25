import { BrowserRouter as Router, Routes } from "react-router-dom";
import authSwitch from "./auth";
import protectedSwitch from "./protected";
import ProtectedRoute from "./protected/ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";


export default function AppSwitch() {
    return (
        <Router>
            <Routes>
                {authSwitch.map((item, index) => {
                    return <UnprotectedRoute key={index} exact path={item.path} component={item.component} />
                })}

                {protectedSwitch.map((item, index) => {
                    return <ProtectedRoute key={index} exact path={item.path} component={item.component} />
                })}
            </Routes>
        </Router>
    )
}