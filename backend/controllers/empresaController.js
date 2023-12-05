
import Empresa from "../models/Empresa.js";
import Tarea from "../models/Tarea.js";
import Usuario from "../models/Usuario.js";

const obtenerEmpresas = async (req, res) => {

    //const empresas = await Empresa.find(); // me sirve para admin trae todos los proyectos de todos 
    const empresas = await Empresa.find({
        '$or' : [

            {'colaboradores': {$in: req.usuario}},
            {'creador': {$in: req.usuario} }

        ]

    }).select('-tareas')// trae las empresas solo lo del usuario que logea 
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
const empresa = await Empresa.findById(id).populate({ path: 'tareas', 
populate: {path: 'completado', select: 'nombre'}}).populate('colaboradores', 'nombre email')



if(!empresa) {

    const error = new Error (' No encontrado');
    return res.status(404).json({msg: error.message})
   
}
if(empresa.creador.toString() !== req.usuario._id.toString() 
&& !empresa.colaboradores.some(colaborador => colaborador._id.toString() === req.usuario._id.toString())){ // con esto traigo solo el proyecto que creo vada usuario

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
    empresa.ssn = req.body.ssn || empresa.ssn;
    empresa.email = req.body.email || empresa.email;
    empresa.city = req.body.city || empresa.city;
    empresa.state = req.body.state || empresa.state;
    empresa.zip = req.body.zip || empresa.zip;
    empresa.numbercomp = req.body.numbercomp || empresa.numbercomp;
    empresa.website = req.body.website || empresa.website;
    empresa.closetax = req.body.closetax || empresa.closetax;
    empresa.contactname = req.body.contactname || empresa.contactname;
    empresa.whois = req.body.whois || empresa.whois;
    empresa.contactnumber = req.body.contactnumber || empresa.contactnumber;
    empresa.emailcontact = req.body.emailcontact || empresa.emailcontact;
    empresa.payrollcontact = req.body.payrollcontact || empresa.payrollcontact;
    empresa.ein = req.body.ein || empresa.ein;
    empresa.ssn = req.body.ssn || empresa.ssn;
    empresa.incometax = req.body.incometax || empresa.incometax;
    empresa.accounting = req.body.accounting || empresa.accounting;
    empresa.txplanning = req.body.txplanning || empresa.txplanning;
    empresa.saletax = req.body.saletax || empresa.saletax;
    empresa.payroll = req.body.payroll || empresa.payroll;
    empresa.contract = req.body.contract || empresa.contract;



    




    

    

    

    
    
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
    const empresa = await Empresa.findById(req.params.id)

    if(!empresa){

        const error = new Error ('Not Found')
        return res.status(404).json({msg: error.message})

    }

    if(empresa.creador.toString() !== req.usuario._id.toString()){// serive para ver el que creo puede ver 
        const error = new Error ('Invalid Action')
        return res.status(404).json({msg: error.message})

    } 
    const {email} = req.body
    const usuario = await Usuario.findOne({email}).select('-confirmado -createdAt -password -token -updatedAt -__v')
   
   
    if(!usuario) {
       const error = new Error ('Usuario no encontrado');
       return res.status(404).json({msg: error.message});
    }

    // El colaborador no es el admin del proyecto 
    if(empresa.creador.toString()=== usuario._id.toString()){

        const error = new Error ('El creador no puede ser colaborador');
        return res.status(404).json({msg: error.message});

    }


    // revisar que no este agregado al proyecto 
    if(empresa.colaboradores.includes(usuario._id)){
        const error = new Error ('The user is already assigned to the company');
        return res.status(404).json({msg: error.message});

    }

    //se puede agregar 
    empresa.colaboradores.push(usuario._id);
    await empresa.save()
    res.json({msg: 'Added correctly'})

}



const buscarColaborador = async (req, res) => {
 const {email} = req.body
 const usuario = await Usuario.findOne({email}).select('-confirmado -createdAt -password -token -updatedAt -__v')


 if(!usuario) {
    const error = new Error ('Usuario no encontrado');
    return res.status(404).json({msg: error.message});
 }

 res.json(usuario)
}

const eliminarColaborador = async (req, res) => {

    const empresa = await Empresa.findById(req.params.id)

    if(!empresa){

        const error = new Error ('Not Found')
        return res.status(404).json({msg: error.message})

    }

    if(empresa.creador.toString() !== req.usuario._id.toString()){// serive para ver el que creo puede ver 
        const error = new Error ('Invalid Action')
        return res.status(404).json({msg: error.message})

    } 

     //se puede eliminar
     empresa.colaboradores.pull(req.body.id);
    
     await empresa.save()
     res.json({msg: 'Deleted correctly'})
   

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
    buscarColaborador,
    eliminarColaborador,
    
};