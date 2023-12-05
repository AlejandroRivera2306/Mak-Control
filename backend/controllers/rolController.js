import Rol from "../models/Rol.js"

const obtenerRoles = async (req, res) => {

    const roles = await Rol.find().select('nombre')
    res.json(roles)

}

export {
    obtenerRoles,
}