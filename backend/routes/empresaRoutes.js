import express from 'express';

import {obtenerEmpresas,
    nuevoEmpresa,
    obtenerEmpresa,
    editarEmpresa,
    eliminarEmpresa,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas} from '../controllers/empresaController.js'

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

    router.get('/tareas/:id', checkAuth, obtenerTareas);
    router.post('/agregar-colaborador/:id', checkAuth , agregarColaborador)
    router.post('/eliminar-colaborador/:id', checkAuth , eliminarColaborador)



    export default router;