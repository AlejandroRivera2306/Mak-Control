
import Seguimiento from "./models/Seguimiento.js";

const obtenerSeguimientos = async (req, res) => {

    const Seguimientoes = await Seguimiento.find()

    res.json(Seguimientos)

}

const nuevoSeguimiento = async (req, res) => {

const Seguimiento = new Seguimiento(req.body)

try {

    const SeguimientoAlmacenada = await Seguimiento.save()
    res.json(SeguimientoAlmacenada);
    
} catch (error) {

    console.log(error);

    
}
  
}

const editarSeguimiento = async (req, res) => {
    const {id} = req.params;
    const Seguimiento = await Seguimiento.findById(id)
    
    if(!Seguimiento) {
    
        const error = new Error (' No encontrado');
        return res.status(404).json({msg: error.message})
       
    }
    
    Seguimiento.nombre = req.body.nombre || Seguimiento.nombre;
    Seguimiento.estado = req.body.estado || Seguimiento.estado;
    Seguimiento.fechaEntrega = req.body.fechaEntrega || Seguimiento.fechaEntrega;
    
    
    try {
    
        const SeguimientoAlmacenada  = await Seguimiento.save()
        res.json(SeguimientoAlmacenada);
        
        
    } catch (error) {
        console.log(error)
        
    }
    

};



export {

    obtenerSeguimientos,
    nuevoSeguimiento,
    editarSeguimiento,
};