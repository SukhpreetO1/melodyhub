// database connection
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// importing database
import connectMongoDb from '../database/mongoDb.js'

// importing models
import User from "../models/User.js";
import Role from "../models/Role.js";

// importing controllers
import { registerUser, loginUser, userProfile , logoutUser, test} from "../controllers/userController.js";

// import middleware
import { isAuth } from "../middleware/isAuth.js"

// importing utils
import RoleData from "../utils/RoleData.js";
import GenerateToken from "../utils/GenerateToken.js";

// importing user routes
import userRoutes from "./userRoutes.js";

// Consolidating all exports
export { 
    mongoose, 
    express, 
    dotenv, 
    bcrypt, 
    jwt, 
    cookieParser, 
    connectMongoDb, 
    User, 
    Role, 
    registerUser, 
    loginUser, 
    userProfile, 
    logoutUser, 
    test, 
    isAuth, 
    RoleData, 
    GenerateToken,  
    userRoutes, 
};
