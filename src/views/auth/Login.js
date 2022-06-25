import React, { useState, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Logo from "../../assets/images/Logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, ResentLinkAction } from '../../redux/actions/AuthActions';
import pathNames from "../../router/RoutePath";
import eyeIcon from "../../assets/images/eye_icon.svg"

export default function Login() {

    const history = useNavigate();
    const dispatch = useDispatch();
    let [loginErrorMessage, setLoginErrorMessage] = useState("");
    let [loginErrorAlert, setLoginErrorAlert] = useState(false);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState({ email: "", password: "" });
    const [loginPasswordShown, setLoginPasswordShown] = useState(false);
    const [resendLinkShown, setResendLinkShown] = useState(false);
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let [fields, setState] = useState({
        email: "",
        password: "",
        remember_me: ""
    });

    const togglePassword = () => {
        setLoginPasswordShown(!loginPasswordShown);
    };

    const handleFieldChange = e => {
        setLoginErrorAlert(false);
        setLoading(false);
        setLoginErrorMessage("");
        let name = e.target.id;
        if (e.target.value !== "") {
            checkValidity(e.target.id, e.target.value);
            setState({
                ...fields,
                [e.target.id]: e.target.value
            })
        }
        else {
            setError({ ...error, [name]: "" });
        }
    }

    let counterLogin = useSelector((state) => state.userAuth.loginResponse);
    useEffect(() => {
        setLoginErrorMessage("");
        let status = counterLogin.status;
        let message = counterLogin.message;
        if (status === true) {
            resetFormData('login-form');
            setLoading(false);
        } else if (status === false && message === "Verification Link sent.") {
            resetFormData('login-form');
            setResendLinkShown(true);
            setLoginErrorMessage('Your account is not verified. Please check your email for verification. Verification Link sent.');
        }
        else if (status === false && message === "Validation Errors") {
            setLoginErrorMessage(counterLogin.data);
        }
        else if (status === false && (message === "Invalid email or password" || message === "Sorry, This user does not exist")) {
            resetFormData('login-form');
            setLoginErrorMessage(counterLogin.message);
        }
        else if (status === false) {
            resetFormData('login-form');
            setLoginErrorMessage(counterLogin.message);
        }
    }, [counterLogin])

    const UserLogin = (e) => {
        e.preventDefault();
        let errorStatus = isErrorsObjectEmpty(error);
        if (errorStatus) {
            setLoginErrorMessage("");
            setLoading(true)
            dispatch(LoginAction(fields, history));
        }
        else {
            setLoginErrorMessage('Please Fulfill all requirements.');
        }
    };

    const checkValidity = (inputName, inputValue) => {
        const errorStringEmail = "Your email must be more than 8 characters long. Should be valid Email.";
        const errorStringPassword = "Your Password must be more than 8 characters long.";
        switch (inputName) {
            case "email":
                fields.email = emailRegex.test(inputValue);
                inputValue.length < 8 ? setError({ ...error, [inputName]: errorStringEmail }) : setError({ ...error, [inputName]: "" });
                if (!fields.email) setError({ ...error, [inputName]: errorStringEmail });
                break;
            case "password":
                // fields.password = strongPasswordRegex.test(inputValue);
                inputValue.length < 8 ? setError({ ...error, [inputName]: errorStringPassword }) : setError({ ...error, [inputName]: "" });
                // if (!fields.password) setError({ ...error, [inputName]: errorStringPassword });
                break;
            default:
                break;
        }
    };

    function isErrorsObjectEmpty(obj) {
        if (obj.email.length === 0 && obj.password.length === 0) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (loginErrorMessage !== "") {
            setLoginErrorAlert(true);
            setLoading(false);
        }
        else {
            setLoginErrorMessage("");
            setLoginErrorAlert(false);
            setLoading(false);
        }
    }, [loginErrorMessage])

    function resetFormData(formId) {
        document.getElementById(formId).reset();
    }

    return (
        <section className="loginSection">
            <div className="container-fluid g-0">
                <div className="row g-0">
                    <div className="col-md-6" >
                        <div className="backgroundImage"></div>
                    </div>
                    <div className="col-md-6" >
                        <div className="mainLogin">
                            <div className="logo">
                                <img src={Logo} alt="Logo Unavailable" />
                            </div>
                            <div className="mainContent">
                                <p>Welcome</p>
                                <h2>
                                    Login to Your Account
                                </h2>
                                {loginErrorMessage && loginErrorAlert !== false && (<Alert variant="danger" onClose={() => setLoginErrorAlert(false)} dismissible>{loginErrorMessage}</Alert>)}
                                <form id="login-form" onSubmit={UserLogin} >
                                    <div className="formInput">
                                        <label>Email</label>
                                        <input type="email" placeholder="johndoe@gmail.com" id="email" onChange={handleFieldChange} maxLength="50" required="required" />
                                        {error.email.length > 0 && <span className='error'>{error.email}</span>}
                                    </div>
                                    <div className="formInput">
                                        <label>Password</label>
                                        <div className="input-group">
                                            <input style={{ width: "90%" }} type={loginPasswordShown ? "text" : "password"} placeholder="*********" id="password" onChange={handleFieldChange} maxLength="25" required="required" />
                                            <button className="view-password-btn" onClick={togglePassword} type="button"><img className="eye-icon-password" src={eyeIcon} alt="eyeIcon" /></button>
                                        </div>
                                        {error.password.length > 0 && <span className='error'>{error.password}</span>}
                                    </div>
                                    <div className="keepLogin">
                                        <div className="formCheckBox">
                                            <input type="checkbox" id="remember_me" />
                                            <label htmlFor="remember_me">Remember me</label>
                                        </div>
                                        <div>
                                            <Link to={pathNames.forgotPassword}>Forgot Password?</Link>
                                        </div>
                                    </div>
                                    {resendLinkShown &&
                                        <div className="keepLogin">
                                            <Link to={pathNames.resentVerificationLink}>Did not receive Link? Resend Verification Link</Link>
                                        </div>
                                    }
                                    {loading ? <div className="loader"></div> :
                                        <button disabled={loading} className="btnLogin" type="submit">
                                            <span id="button-text">
                                                {loading ? <div className="loader"></div> : "Login"}
                                            </span>
                                        </button>
                                    }
                                </form>
                                <div className="signUpLink">
                                    <span>
                                        Do not have an account yet?
                                        <Link to={pathNames.signUp}> Join free today</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}