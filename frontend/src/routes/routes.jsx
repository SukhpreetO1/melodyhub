/* eslint-disable react-refresh/only-export-components */
// importing react routes
import { BrowserRouter, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { StrictMode, React } from 'react';
import PasswordChecklist from "react-password-checklist";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faInbox, faPlus, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// importing pages
import Homepage from '../pages/users/Homepage.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import Navbar from '../pages/Navbar.jsx';
import Sidebar from '../pages/users/Sidebar.jsx';
import Footer from '../pages/users/Footer.jsx';
import AdminHomepage from '../pages/admin/AdminHomepage.jsx';

// importing interfaces
import { AuthRoutePropType, SubmitButtonPropTypes, InputFieldPropTypes, PasswordFieldPropTypes } from "../types/propTypes.jsx";

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
import { BACKEND_LOGIN, BACKEND_SIGNUP, BACKEND_PROFILE, BACKEND_LOGOUT, BACKEND_FORGOT_PASSWORD, BACKEND_ERROR, BACKEND_PROTETED_ROUTE } from "./backend.jsx"

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
    faPlus, 
    faSwatchbook, 
    faHouse, 
    faInbox, 
    axios, 
    Homepage, 
    Login, 
    Signup, 
    ForgotPassword, 
    Navbar, 
    Sidebar, 
    Footer, 
    AdminHomepage, 
    AuthRoutePropType, 
    SubmitButtonPropTypes, 
    InputFieldPropTypes, 
    PasswordFieldPropTypes, 
    PasswordField, 
    InputField, 
    SubmitButton, 
    validate_login_submit_form, 
    validate_signup_submit_form, 
    validate_forgot_password_submit_form, 
    BACKEND_LOGIN, 
    BACKEND_SIGNUP, 
    BACKEND_PROFILE, 
    BACKEND_LOGOUT, 
    BACKEND_FORGOT_PASSWORD, 
    BACKEND_ERROR, 
    BACKEND_PROTETED_ROUTE, 
    USERS_LOGIN, 
    USERS_SIGNUP, 
    USERS_FORGOT_PASSWORD, 
    USERS_HOMEPAGE, 
    ADMIN_HOMEPAGE, 
    AuthRoute, 
};

// Exporting all the images 
export const LOGO_URL = '/images/logo.png';