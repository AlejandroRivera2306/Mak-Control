import express from 'express';

import {obtenerEmpresas,
    nuevoEmpresa,
    obtenerEmpresa,
    editarEmpresa,
    eliminarEmpresa,
    agregarColaborador,
    buscarColaborador,
    eliminarColaborador,
    } from '../controllers/empresaController.js'

import checkAuth from '../middleware/checkAuth.js';

    const router = express.Router();
    router
    .route('/')
    .get(checkAuth,obtenerEmpresas)
    .post(checkAuth,nuevoEmpresa);

    router
    .route('/:id')
    .get(checkAuth,obtenerEmpresa)
    .put(checkAuth,editarEmpresa)
    .delete(checkAuth,eliminarEmpresa);

    router.post('/colaboradores', checkAuth, buscarColaborador)
    router.post('/colaboradores/:id', checkAuth , agregarColaborador)
    router.post('/eliminar-colaboradore/:id', checkAuth , eliminarColaborador)

    

    export default router;


