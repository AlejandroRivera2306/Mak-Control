import { useState, createContext, Children, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom'

const UsuariosContext = createContext();

const UsuariosProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])
    const [roles, setRoles] = useState([])
    const [evaluaciones, setEvaluaciones] = useState([])
    const [alerta, setAlerta] = useState({})
    const navigate = useNavigate();
    const [modalFormularioUsuario, setModalFormularioUsuario] = useState(false)
    const [usuario, setUsuario] = useState({})
    const [cargando, setCargando] = useState(false)


    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get('/usuarios', config)
                setUsuarios(data)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerUsuarios()

    }, [])

    useEffect(() => {
        const obtenerRoles = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get('/roles', config)
                setRoles(data)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerRoles()

    }, [])

    useEffect(() => {
        const obtenerEvaluaciones = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get('/Evaluaciones', config)
                setEvaluaciones(data)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerEvaluaciones()

    }, [])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 4000);
    }

    const submitUsuario = async usuario => {
        if (usuario.id) {
            await editarUsuario(usuario)

        } else {
            await nuevaUsuario(usuario)
        }
    }

    const editarUsuario = async (usuario) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }


            }
            const { data } = await clienteAxios.put(`/usuarios/${usuario.id}`, usuario, config)

            const usuariosActualizadas = usuarios.map(usuarioState => usuarioState._id === data._id ? data : usuarioState)

            setUsuarios(usuariosActualizadas)
            setAlerta({

                msg: 'User  updated ',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/usuarios')

            }, 3000)


        } catch (error) {
            console.log(error)
        }
    }

    const nuevaUsuario = async (usuario) => {

        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }


            }

            const { data } = await clienteAxios.post('/usuarios', usuario, config)
            setUsuarios([...usuarios, data])

            setAlerta({

                msg: 'User created',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/usuarios')

                location.reload();

            }, 3000)

        } catch (error) {
            console.log(error)

        }
    }

    const obtenerUsuario = async id => {
        setCargando(true)
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios(`/usuarios/${id}`, config)
            setUsuario(data)
            setAlerta({})

        } catch (error) {
            navigate('/usuarios')

            setAlerta({
                msg: error.response.data.msg,
                error: true
            })

            setTimeout(() => {
                setAlerta({})
            }, 3000);

        } finally {
            setCargando(false)
        }

    }

    const handleModalUsuario = () => {
        setModalFormularioUsuario(!modalFormularioUsuario)
        setUsuario({})

    }

    const handleModalEditarUsuario = usuario => {

        setUsuario(usuario)
        setModalFormularioUsuario(true)
    }

    const eliminarUsuario = async id => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }

            }

            const { data } = await clienteAxios.delete(`/usuarios/${id}`, config)

            const usuariosActualizadas = usuarios.filter(usuarioState => usuarioState._id !== id)
            setUsuarios(usuariosActualizadas)

            setAlerta({

                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/usuarios')

            }, 3000)
        } catch (error) {
            console.log(error)
        }

    }
    return (

        <UsuariosContext.Provider

            value={{

                usuarios,
                mostrarAlerta,
                alerta,
                submitUsuario,
                obtenerUsuario,
                usuario,
                cargando,
                evaluaciones,
                eliminarUsuario,
                modalFormularioUsuario,
                handleModalUsuario,
                handleModalEditarUsuario,
                roles,
            }}

        >{children}
        </UsuariosContext.Provider>
    )
}
export {
    UsuariosProvider
}

export default UsuariosContext