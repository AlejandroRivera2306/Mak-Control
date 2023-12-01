
import Empresa from "../models/Empresa.js"
import Usuario from "../models/Usuario.js"
import Rol from "../models/Rol.js"

const obtenerRoles = async (req, res) => {

    //const empresas = await Empresa.find(); // me sirve para admin trae todos los proyectos de todos 
    const roles = await Rol.find({
        '$or' : [

            {'empresa': {$in: req.empresa}}
            
        ]

    }).select('-roles')// trae las empresas solo lo del usuario que logea 
    res.json(roles)

}


const nuevoRol = async (req, res) => {

    const rol = new Rol(req.body)
    // rol.creador = req.usuario._id
    
    try {
    
        const rolAlmacenado = await rol.save()
        res.json(rolAlmacenado);
        
    } catch (error) {
    
        console.log(error);
    
        
    }
      
}

export {
    obtenerRoles,
    nuevoRol,
}