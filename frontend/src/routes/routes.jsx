// importing react routes
import { BrowserRouter, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { StrictMode, React } from 'react';
import PasswordChecklist from "react-password-checklist";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

// importing pages
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';

// importing interfaces
import { SubmitButtonPropTypes, InputFieldPropTypes, PasswordFieldPropTypes } from "../types/propTypes.jsx";

// importing components
import PasswordField from '../components/PasswordField.jsx';
import InputField from '../components/InputField.jsx';
import SubmitButton from '../components/SubmitButton.jsx';
// import DateField from '../components/DateField.jsx';

// importing validation 
import { validate_login_submit_form } from "../utils/js/login.js";
import { validate_signup_submit_form } from "../utils/js/signup.js";
import { validate_forgot_password_submit_form } from "../utils/js/forgot_password.js";

// importing MongoDB URL's
import { MONGODB_API_LOGIN, MONGODB_API_SIGNUP, MONGODB_API_PROFILE, MONGODB_API_LOGOUT, MONGODB_API_ERROR, MONGODB_API_PROTETED_ROUTE } from "./mongodb.jsx"

// importing redirection routes
import { USERS_LOGIN, USERS_SIGNUP, USERS_FORGOT_PASSWORD, USERS_HOMEPAGE, ADMIN_HOMEPAGE } from "./redirectionRoutes.jsx"

// importing Auth page
import AuthRoute from '../context/AuthRoute.jsx';

// Exporting the routes
export { 
    BrowserRouter, 
    Routes, 
    Route,
    NavLink, 
    useNavigate, 
    useLocation, 
    StrictMode, 
    React, 
    PasswordChecklist, 
    ToastContainer, 
    toast, 
    FontAwesomeIcon, 
    faEye, 
    faEyeSlash, 
    axios, 
    Login, 
    Signup, 
    SubmitButtonPropTypes, 
    InputFieldPropTypes, 
    PasswordFieldPropTypes, 
    PasswordField, 
    InputField, 
    SubmitButton, 
    validate_login_submit_form, 
    validate_signup_submit_form, 
    validate_forgot_password_submit_form, 
    MONGODB_API_LOGIN, 
    MONGODB_API_SIGNUP, 
    MONGODB_API_PROFILE, 
    MONGODB_API_LOGOUT, 
    MONGODB_API_ERROR, 
    MONGODB_API_PROTETED_ROUTE, 
    USERS_LOGIN, 
    USERS_SIGNUP, 
    USERS_FORGOT_PASSWORD, 
    USERS_HOMEPAGE, 
    ADMIN_HOMEPAGE, 
    AuthRoute, 
};
