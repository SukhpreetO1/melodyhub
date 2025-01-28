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
import { AuthRoutePropType, AdminRoutePropType, SubmitButtonPropTypes, InputFieldPropTypes, PasswordFieldPropTypes } from "../types/propTypes.jsx";

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
import { BACKEND_LOGIN, BACKEND_SIGNUP, BACKEND_PROFILE, BACKEND_LOGOUT, BACKEND_FORGOT_PASSWORD, BACKEND_ERROR, BACKEND_PROTECTED_ROUTE } from "./backend.jsx"

// importing Auth page
import AuthRoute from '../context/AuthRoute.jsx';
import AdminRoute from '../context/AdminRoute.jsx';
import { getTokenFromCookie } from "../context/CheckedCookie.jsx";
import { EmailGlobalProvider, EmailGlobalContext } from "../context/EmailGlobalContext.jsx";

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
    AdminRoutePropType, 
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
    BACKEND_PROTECTED_ROUTE, 
    AuthRoute, 
    AdminRoute, 
    getTokenFromCookie, 
    EmailGlobalProvider, 
    EmailGlobalContext, 
};

// Exporting all the images 
export const LOGO_URL = '/images/logo.png';

// Users routes
export const USERS_HOMEPAGE = "/";
export const USERS_LOGIN = "/login";
export const USERS_SIGNUP = "/signup";
export const USERS_FORGOT_PASSWORD = "/forgot_password";
export const USERS_PROFILE = "/profile";
export const USERS_LOGOUT = "/logout";

// Admin routes
export const ADMIN_HOMEPAGE = "/admin/dashboard";