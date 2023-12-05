import Rol from "../models/Rol.js"

const obtenerRoles = async (req, res) => {

    const roles = await Rol.find().select('nombre')
    console.log(roles);
    res.json(roles)

}

export {
    obtenerRoles,
}

