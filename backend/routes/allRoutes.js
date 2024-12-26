// database connection
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from 'cors';
import fs from 'fs';

// importing database
import connectMongoDb from '../database/mongoDb.js'

// importing models
import User from "../models/User.js";
import Role from "../models/Role.js";

// importing controllers
import { registerUser, loginUser, userProfile , logoutUser, test } from "../controllers/userController.js";
import { allError, protectedRoutesController } from "../controllers/apiRoutesController.js";

// import middleware
import { isAuth } from "../middleware/isAuth.js"

// importing utils
import RoleData from "../utils/RoleData.js";
import GenerateToken from "../utils/GenerateToken.js";

// importing user routes
import userRoutes from "./userRoutes.js";
import apiRoutes from "./apiRoutes.js";

// Consolidating all exports
export { 
    mongoose, 
    express, 
    dotenv, 
    bcrypt, 
    jwt, 
    cookieParser, 
    cors, 
    fs, 
    connectMongoDb, 
    User, 
    Role, 
    registerUser, 
    loginUser, 
    userProfile, 
    logoutUser, 
    test, 
    apiRoutes, 
    isAuth, 
    RoleData, 
    GenerateToken,  
    userRoutes,   
};
