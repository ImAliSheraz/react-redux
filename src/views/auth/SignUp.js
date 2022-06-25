import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Logo from "../../assets/images/Logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAction } from '../../redux/actions/AuthActions';
import pathNames from "../../router/RoutePath";
import eyeIcon from "../../assets/images/eye_icon.svg"

export default function SignUp() {

    const history = useNavigate();
    let [signUpErrorMessage, setSignUpErrorMessage] = useState("");
    let [signUpErrorAlert, setSignUpErrorAlert] = useState(false);
    let [error, setError] = useState({ name: "", email: "", password: "" });
    let [loading, setLoading] = useState(false);
    const [signUpPasswordShown, setSignUpPasswordShown] = useState(false);

    // Validation Regex
    let nameRegex = /^[a-zA-Z ]*$/;
    let strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // End Validation Regex

    const dispatch = useDispatch();
    const [fields, setState] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleFieldChange = e => {
        setSignUpErrorMessage("");
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

    let counterSignUp = useSelector((state) => state.userAuth.signUpResponse);

    useEffect(() => {
        let status = counterSignUp.status;
        let message = counterSignUp.message;
        if (counterSignUp) {
            if (status === true) {
                resetFormData('register-form');
            }
            else if (status === false && message === "Validation Errors") {
                setSignUpErrorMessage(counterSignUp.data);
                resetFormData('register-form');
            }
            else if (status === false) {
                setSignUpErrorMessage(counterSignUp.message);
                resetFormData('register-form');
            }
            setLoading(false);
        }
    }, [counterSignUp])

    const togglePassword = () => {
        setSignUpPasswordShown(!signUpPasswordShown);
    };

    const UserRegister = (e) => {
        e.preventDefault();
        let errorStatus = isErrorsObjectEmpty(error);
        if (errorStatus) {
            setSignUpErrorMessage('');
            setLoading(true);
            dispatch(RegisterAction(fields, history));
        }
        else {
            setSignUpErrorMessage('Please Fulfill all requirements.');
        }
    };

    const checkValidity = (inputName, inputValue) => {
        const errorStringName = "Your name must be more than 8 characters long. Should be letters only";
        const errorStringEmail = "Your email must be more than 8 characters long. Should be valid Email.";
        const errorStringPassword = "Your Password must be more than 8 characters long. Should contains at least 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character.";
        switch (inputName) {
            case "name":
                let nameValidator = nameRegex.test(inputValue);
                inputValue.length < 8 ? setError({ ...error, [inputName]: errorStringName }) : setError({ ...error, [inputName]: "" });
                if (!nameValidator) setError({ ...error, [inputName]: errorStringName });
                break;
            case "email":
                let emailValidator = emailRegex.test(inputValue);
                inputValue.length < 8 ? setError({ ...error, [inputName]: errorStringEmail }) : setError({ ...error, [inputName]: "" });
                if (!emailValidator) setError({ ...error, [inputName]: errorStringEmail });
                break;
            case "password":
                let passwordValidator = strongPasswordRegex.test(inputValue);
                inputValue.length < 8 ? setError({ ...error, [inputName]: errorStringPassword }) : setError({ ...error, [inputName]: "" });
                if (!passwordValidator) setError({ ...error, [inputName]: errorStringPassword });
                break;
            default:
                break;
        }
    };

    function isErrorsObjectEmpty(obj) {
        if (obj.name.length === 0 && obj.email.length === 0 && obj.password.length === 0) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (signUpErrorMessage !== "") {
            setSignUpErrorAlert(true);
            setLoading(false);
        }
        else {
            setSignUpErrorAlert(false);
            setLoading(false);
        }
    }, [signUpErrorMessage])

    function resetFormData(formId) {
        document.getElementById(formId).reset();
    }

    // const checkPasswordMatch = (password, password_confirmation) => {
    //     return password !== password_confirmation ? true : false;
    // }
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
                                <img src={Logo} alt="" />
                            </div>
                            <div className="mainContent">
                                <p>Welcome</p>
                                <h2>Get started with a free account.</h2>
                                {signUpErrorMessage && signUpErrorAlert !== false && (<Alert variant="danger" onClose={() => setSignUpErrorAlert(false)} dismissible>{signUpErrorMessage}</Alert>)}
                                <form id="register-form" onSubmit={UserRegister}>
                                    <div className="formInput">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" id="name" onChange={handleFieldChange} minLength="8" maxLength="50" required="required" />
                                        {error.name.length > 0 && <span className='error'>{error.name}</span>}
                                    </div>
                                    <div className="formInput">
                                        <label>Email</label>
                                        <input type="email" placeholder="johndoe@gmail.com" id="email" onChange={handleFieldChange} minLength="8" maxLength="50" required="required" />
                                        {error.email.length > 0 && <span className='error'>{error.email}</span>}
                                    </div>
                                    <div className="formInput">
                                        <label>Password</label>
                                        <div className="input-group">
                                            <input style={{ width: "90%" }} type={signUpPasswordShown ? "text" : "password"} placeholder="*********" id="password" onChange={handleFieldChange} maxLength="25" required="required" />
                                            <button className="view-password-btn" onClick={togglePassword} type="button"><img className="eye-icon-password" src={eyeIcon} alt="eyeIcon" /></button>
                                        </div>
                                        {error.password.length > 0 && <span className='error'>{error.password}</span>}
                                    </div>
                                    {loading ? <div className="loader"></div> :
                                        <button disabled={loading} className="btnLogin" type="submit">
                                            <span id="button-text">
                                                {loading ? <div className="loader"></div> : "Sign Up"}
                                            </span>
                                        </button>
                                    }
                                </form>
                                <div className="signUpLink">
                                    <span>Already have an account? <Link to={pathNames.login}> Log In</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}