import express from "express";
const router = express.Router();

import {
    registrar, 
    autenticar, 
    confirmar, 
    olvidePassword,
    comprobarToken, 
    nuevoPassword, 
    perfil, 
    editarUsuario, 
    eliminarUsuario, 
    obtenerUsuario, 
    obtenerUsuarios,
} from "../controllers/usuarioController.js"

import checkAuth from "../middleware/checkAuth.js";


//Autenticacion registro y confirmacion de usuarios

router.post("/" , registrar ); //Registro de usuarios 
router.post("/login", autenticar);// 
router.get('/confirmar/:token' , confirmar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)
router.get('/perfil', checkAuth,perfil);

/*router
    .route('/')
    .get(checkAuth,obtenerUsuarios)
*/

router.get('/', checkAuth,obtenerUsuarios)

router
    .route('/:id')
    .get(checkAuth,obtenerUsuario)
    .put(checkAuth,editarUsuario)
    .delete(checkAuth,eliminarUsuario);

router.get('/', checkAuth,obtenerUsuario)




export default router;



