
import Empresa from "../models/Empresa.js"
import Tarea from "../models/Tarea.js"



const agregarTarea = async (req, res) => {

const {empresa} = req.body;
const existeEmpresa = await Empresa.findById(empresa);

if(!existeEmpresa) {
    const error = new Error ('La empresa no existe');
    return res.status(404).json({msg: error.message})

}

if(existeEmpresa.creador.toString() !== req.usuario._id.toString()){

    const error = new Error ('No tienes permiso para asignar empresas');
    return res.status(403).json({msg: error.message})
}

try {
    const tareaAlmacenada = await Tarea.create(req.body)
    // Almecenar ID EN LA EMPRES
    existeEmpresa.tareas.push(tareaAlmacenada._id)
    await existeEmpresa.save();

    res.json(tareaAlmacenada)
    
} catch (error) {
    console.log(error)
    
}

};
const obtenerTarea = async (req, res) => {
    const { id } = req.params;

    //Verifica si el ID tiene el formato correcto
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(id);

    if (!isValidObjectId) {
        const error = new Error("ID de tarea no válido");
        return res.status(400).json({ msg: error.message });
    }

    const tarea = await Tarea.findById(id).populate("empresa");

    if (!tarea) {
        const error = new Error("TAREA NO ENCONTRADA");
        return res.status(404).json({ msg: error.message });
    }

    if (tarea.empresa.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error('Accion no valida');
        return res.status(403).json({ msg: error.message });
    }

    res.json(tarea);
};


const actualizarTarea = async (req, res) => {


    const { id } = req.params;

    //Verifica si el ID tiene el formato correcto
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(id);

    if (!isValidObjectId) {
        const error = new Error("ID de tarea no válido");
        return res.status(400).json({ msg: error.message });
    }

    const tarea = await Tarea.findById(id).populate("empresa");

    if (!tarea) {
        const error = new Error("TAREA NO ENCONTRADA");
        return res.status(404).json({ msg: error.message });
    }

    if (tarea.empresa.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error('Accion no valida');
        return res.status(403).json({ msg: error.message });
    }

    tarea.nombre = req.body.nombre || tarea.nombre;
    tarea.descripcion = req.body.descripcion || tarea.descripcion;
    tarea.prioridad = req.body.prioridad || tarea.prioridad;
    tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega;


    try {

        const tareaAlmacenada = await tarea.save()
        res.json(tareaAlmacenada);
        
    } catch (error) {

        console.log(error)

        
    }

};


const eliminarTarea = async (req, res) => {

    const { id } = req.params;

    //Verifica si el ID tiene el formato correcto
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(id);

    if (!isValidObjectId) {
        const error = new Error("ID de tarea no válido");
        return res.status(400).json({ msg: error.message });
    }

    const tarea = await Tarea.findById(id).populate("empresa");

    if (!tarea) {
        const error = new Error("TAREA NO ENCONTRADA");
        return res.status(404).json({ msg: error.message });
    }

    if (tarea.empresa.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error('Accion no valida');
        return res.status(403).json({ msg: error.message });
    }

    try {

    await tarea.deleteOne();
    res.json({msg: "Account Delete"})
        
    } catch (error) {

        console.log(error) 
        
    }

};

const cambiarEstado = async (req, res) => {

}

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado,
}