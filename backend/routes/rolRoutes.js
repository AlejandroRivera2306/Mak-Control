import express from 'express';

import {obtenerRoles
    } from '../controllers/rolController.js'

import checkAuth from '../middleware/checkAuth.js';

    const router = express.Router();
    router
    .route('/')
    .get(checkAuth,obtenerRoles)
    
    router.get('/', checkAuth,obtenerRoles)
    
    export default router;
    