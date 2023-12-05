import express from "express";
const router = express.Router();

import {obtenerRoles
    } from '../controllers/rolController.js'

import checkAuth from '../middleware/checkAuth.js';

    router
    .route('/')
    .get(checkAuth,obtenerRoles)
    
    router.get('/', checkAuth,obtenerRoles)
    
    export default router;
