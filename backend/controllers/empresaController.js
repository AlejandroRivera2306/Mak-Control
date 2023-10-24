
import Empresa from "../models/Empresa.js";

const obtenerEmpresas = async (req, res) => {

    // const empresas = await Empresa.find(); // me sirve para admin trae todos los proyectos de todos 
    const empresas = await Empresa.find().where('creador').equals(req.usuario)// trae las empresas solo lo del usuario que logea 
    res.json(empresas)

}

const nuevoEmpresa = async (req, res) => {

const empresa = new Empresa(req.body)
empresa.creador = req.usuario._id

try {

    const empresaAlmacenada = await empresa.save()
    res.json(empresaAlmacenada);
    
} catch (error) {

    console.log(error)
    
}
  
}
const obtenerEmpresa = async (req, res) => {

const {id} = req.params;
const empresa = await Empresa.findById(id)



if(!empresa) {

    const error = new Error (' No encontrado');
    return res.status(404).json({msg: error.message})
   
}
if(empresa.creador.toString() !== req.usuario._id.toString()){ // con esto traigo solo el proyecto que creo vada usuario

    const error = new Error (' No tienes acceso a esta empresa');
    return res.status(401).json({msg: error.message})

} 

res.json(empresa)



};
const editarEmpresa = async (req, res) => {
    const {id} = req.params;
    const empresa = await Empresa.findById(id)
    
    if(!empresa) {
    
        const error = new Error (' No encontrado');
        return res.status(404).json({msg: error.message})
       
    }
    if(empresa.creador.toString() !== req.usuario._id.toString()){ // con esto traigo solo el proyecto que creo vada usuario
    
        const error = new Error (' No tienes acceso a esta empresa');
        return res.status(401).json({msg: error.message})
    
    } 
    
    empresa.nombre = req.body.nombre || empresa.nombre;
    empresa.descripcion = req.body.descripcion || empresa.descripcion;
    empresa.fechaEntrega = req.body.fechaEntrega || empresa.fechaEntrega;
    empresa.cliente = req.body.cliente || empresa.cliente;
    
    
    try {
    
        const empresaAlmacenada  = await empresa.save()
        res.json(empresaAlmacenada);
        
        
    } catch (error) {
        console.log(error)
        
    }
    

};
const eliminarEmpresa = async (req, res) => {

    const {id} = req.params;
    const empresa = await Empresa.findById(id)
    
    if(!empresa) {
    
        const error = new Error (' No encontrado');
        return res.status(404).json({msg: error.message})
       
    }
    if(empresa.creador.toString() !== req.usuario._id.toString()){ // con esto traigo solo el proyecto que creo vada usuario
    
        const error = new Error (' No tienes acceso a esta empresa');
        return res.status(401).json({msg: error.message})
    
    } 

    try {
        await empresa.deleteOne();
        res.json({msg:" Empresa Eliminado"})
        
    } catch (error) {

        console.log(error)
    }


};

const agregarColaborador = async (req, res) => {


}

const eliminarColaborador = async (req, res) => {


}

const obtenerTareas = async (req, res) => {


}


export {

    obtenerEmpresas,
    nuevoEmpresa,
    obtenerEmpresa,
    editarEmpresa,
    eliminarEmpresa,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas
};