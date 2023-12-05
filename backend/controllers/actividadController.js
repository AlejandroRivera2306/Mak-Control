
import Actividad from "./models/Actividad.js";

const obtenerActividades = async (req, res) => {

    const actividades = await Actividad.find()

    res.json(Actividads)

}

const nuevoActividad = async (req, res) => {

const actividad = new Actividad(req.body)

try {

    const actividadAlmacenada = await actividad.save()
    res.json(actividadAlmacenada);
    
} catch (error) {

    console.log(error);

    
}
  
}

const editarActividad = async (req, res) => {
    const {id} = req.params;
    const Actividad = await Actividad.findById(id)
    
    if(!Actividad) {
    
        const error = new Error (' No encontrado');
        return res.status(404).json({msg: error.message})
       
    }
    
    Actividad.nombre = req.body.nombre || Actividad.nombre;
    Actividad.estado = req.body.estado || Actividad.estado;
    Actividad.fechaEntrega = req.body.fechaEntrega || Actividad.fechaEntrega;
    
    
    try {
    
        const actividadAlmacenada  = await actividad.save()
        res.json(actividadAlmacenada);
        
        
    } catch (error) {
        console.log(error)
        
    }
    

};



export {

    obtenerActividades,
    nuevoActividad,
    editarActividad,
};