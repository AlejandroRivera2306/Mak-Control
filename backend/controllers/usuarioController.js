
import Usuario from "../models/Usuario.js";
import generarId from '../helpers/generarId.js';
import generarJWT from "../helpers/generarJWT.js";

import {emailRegistro, emailOlvidePassword} from "../helpers/email.js"




const registrar = async (req, res) => {

    // Evitar registros duplicados 
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({email});
    if (existeUsuario) {
        const error = new Error ('This user is already registered');
        return res.status(400).json({ msg: error.message})
    }
   try {
    const usuario = new Usuario (req.body);
    usuario.token = generarId ();
    await usuario.save ()

    // enviar email de confirmacion 

    emailRegistro({

        email: usuario.email,
        nombre: usuario.nombre,
        token: usuario.token,
    })
    res.json({msg: "Confirm your account in your email address"});
    
   } catch (error) {
    console.log(error)
   }  
};

const autenticar = async (req, res) => {

    const { email, password } = req.body;

    // Comprobar si el usuario existe 
    const usuario = await Usuario.findOne({email});
    if(!usuario) {
        const error = new Error (' The user does not exist');
        return res.status(404).json({msg: error.message})
    }
    // Comprobar usuario confirmado

    if(!usuario.confirmado) {
        const error = new Error (' Tu cuenta no ha sido confirmada');
        return res.status(403).json({msg: error.message})
    }
    // Comprobar password
    if(await usuario.comprobarPassword(password)) {
     res.json({
        _id:usuario._id,
        nombre: usuario.nombre,
        email:usuario.email,
        token: generarJWT(usuario._id)
     })
    }else {
        const error = new Error ('password is incorrect');
        return res.status(403).json({msg: error.message})
    }
}

const confirmar =async (req, res) => {

   const {token } = req.params
   const usuarioConfirmar =await Usuario.findOne({token});

   if(!usuarioConfirmar) {
    const error = new Error (' Token invalido');
    return res.status(403).json({msg: error.message})
}
try {
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.token = "";
    await usuarioConfirmar.save();
    res.json({msg: 'User successfully confirmed'})


} catch (error) {
    console.log(error)
    
}

};

const olvidePassword = async (req, res) => {

    const { email} = req.body;

    const usuario = await Usuario.findOne({email});
    if(!usuario) {
        const error = new Error (' This user does not exist');
        return res.status(404).json({msg: error.message})
    }

    try {

        usuario.token = generarId();
       await usuario.save();
           // Enviar el email 


    emailOlvidePassword({

        email: usuario.email,
        nombre: usuario.nombre,
        token: usuario.token,


    })



       res.json({msg: "We have sent an email "});

   

        
    } catch (error) {
        console.log(error);
    }

};


const comprobarToken  = async (req, res) => {
    const {token} =req.params;

    const tokenValido = await Usuario.findOne({token});
    if(tokenValido) {
        res.json({ msg: ' Token Valido y el usuario existe'})
    }else {
        const error = new Error (' Token no valido');
        return res.status(404).json({msg: error.message})
    }

}

const nuevoPassword  = async (req, res) => { 
    const { token } = req.params;
    const { password} = req.body;
    const usuario = await Usuario.findOne({token});

    if(usuario) {
        usuario.password = password;
        usuario.token = '';
       try {
        
        await usuario.save();
        res.json({msg: "Password successfully modified"})
       } catch (error) {
        console.log(error)
       }
    }else {
        const error = new Error (' Token no valido');
        return res.status(404).json({msg: error.message})
    }

}

const perfil = async (req, res) => {

   const {usuario} = req; 
   res.json(usuario);
   


}

const editarUsuario = async (req, res) => {
    const {id} = req.params;
    const usuario = await Usuario.findById(id)
    
    if(!usuario) {
    
        const error = new Error (' No encontrado');
        return res.status(404).json({msg: error.message})
       
    }
    
    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.confirmado = req.body.confirmado || usuario.confirmado;
   
    
    try {
    
        const usuarioAlmacenada  = await usuario.save()
        res.json(usuarioAlmacenada);
        
        
    } catch (error) {
        console.log(error)
        
    }
    

};

const eliminarUsuario = async (req, res) => {

    const {id} = req.params;
    const usuario = await Usuario.findById(id)
    
    if(!usuario) {
    
        const error = new Error (' No encontrado');
        return res.status(404).json({msg: error.message})
       
    }

    try {
        await usuario.deleteOne();
        res.json({msg:"User Deleted"})
        
    } catch (error) {

        console.log(error)
    }


};

const obtenerUsuarios = async (req, res) => {

    const usuarios = await Usuario.find().select('confirmado nombre');
    res.json(usuarios)

}


const obtenerUsuario = async (req, res) => {

    const {id} = req.params;
    const usuario = await Usuario.findById(id)



    if(!usuario) {

        const error = new Error (' No encontrado');
        return res.status(404).json({msg: error.message})
    
    }

    res.json(
        usuario,

    );
}

export { registrar, autenticar,confirmar, olvidePassword, comprobarToken,nuevoPassword,perfil, editarUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios};