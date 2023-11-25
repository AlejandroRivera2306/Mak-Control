import express from 'express';

import {obtenerRoles,
    nuevoRol,
    } from '../controllers/rolController.js'

import checkAuth from '../middleware/checkAuth.js';

    const router = express.Router();
    router
    .route('/')
    .get(checkAuth,obtenerRoles)
    .post(checkAuth,nuevoRol);

    
    export default router;
    