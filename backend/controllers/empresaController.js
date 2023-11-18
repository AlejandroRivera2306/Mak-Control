
import Empresa from "../models/Empresa.js";
import Tarea from "../models/Tarea.js";

const obtenerEmpresas = async (req, res) => {

    //const empresas = await Empresa.find(); // me sirve para admin trae todos los proyectos de todos 
    const empresas = await Empresa.find().where('creador').equals(req.usuario).select('-tareas')// trae las empresas solo lo del usuario que logea 
    res.json(empresas)

}

const nuevoEmpresa = async (req, res) => {

const empresa = new Empresa(req.body)
empresa.creador = req.usuario._id

try {

    const empresaAlmacenada = await empresa.save()
    res.json(empresaAlmacenada);
    
} catch (error) {

    console.log(error);

    
}
  
}
const obtenerEmpresa = async (req, res) => {

const {id} = req.params;
const empresa = await Empresa.findById(id).populate('tareas')



if(!empresa) {

    const error = new Error (' No encontrado');
    return res.status(404).json({msg: error.message})
   
}
if(empresa.creador.toString() !== req.usuario._id.toString()){ // con esto traigo solo el proyecto que creo vada usuario

    const error = new Error (' No tienes acceso a esta empresa');
    return res.status(401).json({msg: error.message})

} 


//Obtener las tareas del proyecto 
// const tareas = await Tarea.find().where('empresa').equals(empresa._id)

res.json(
    empresa,
    // tareas,


);



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
        res.json({msg:" Company Deleted"})
        
    } catch (error) {

        console.log(error)
    }


};

const agregarColaborador = async (req, res) => {


}

const eliminarColaborador = async (req, res) => {


}

// const obtenerTareas = async (req, res) => {

//     const { id } = req.params;

//     const existeEmpresa = await Empresa.findById(id)

//     if(!existeEmpresa) {

//         const error = new Error (' No Encontrado');
//         return res.status(404).json({msg: error.message})

//     }
//     // tienes que ser el creador del proyecto o colaborador 

//     const tareas = await Tarea.find().where('empresa').equals(id)

//     res.json(tareas)




// }


export {

    obtenerEmpresas,
    nuevoEmpresa,
    obtenerEmpresa,
    editarEmpresa,
    eliminarEmpresa,
    agregarColaborador,
    eliminarColaborador,
    
};