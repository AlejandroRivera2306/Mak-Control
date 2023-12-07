import { useState, useEffect, createContext, Children } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom'

const EmpresasContext = createContext();

const EmpresasProvider = ({ children }) => {

    const [empresas, setEmpresas] = useState([])
    const [alerta, setAlerta] = useState({})
    const navigate = useNavigate();
    const [empresa, setEmpresa] = useState({})
    const [cargando, setCargando] = useState(false)
    const [modalFormularioStaff, setModalFormularioStaff] = useState(false)
    const [modalSeguimientoBasico, setModalSeguimientoBasico] = useState(false)
    const [modalSeguimientoAvanzado, setModalSeguimientoAvanzado] = useState(false)
    const [tarea, setTarea] = useState({})
    const [modalEliminarCuenta, setModalEliminarCuenta] = useState(false)
    const [formularioColaborador, setformularioColaborador] = useState(false)
    const [colaborador, setColaborador] = useState({})
    const [modalEliminarColaborador, setModalEliminarColaborador] = useState(false)
    const [buscador, setBuscador] = useState(false)
    const [buscadorcuenta, setBuscadorCuenta] = useState(false)

    useEffect(() => {
        const obtenerProyectos = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return

                const config = {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/empresas', config)
                setEmpresas(data)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerProyectos()

    }, [])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 4000);
    }

    const submitEmpresa = async empresa => {

        if (empresa.id) {
            await editarEmpresa(empresa)

        } else {
            await nuevaEmpresa(empresa)
        }
    }

    const editarEmpresa = async (empresa) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.put(`/empresas/${empresa.id}`, empresa, config)
            //sinconizzar el state 

            const empresasActualizadas = empresas.map(empresaState => empresaState._id === data._id ? data : empresaState)

            setEmpresas(empresasActualizadas)

            setAlerta({

                msg: 'Company  updated ',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/empresas')

            }, 3000)

        } catch (error) {
            console.log(error)
        }

    }

    const nuevaEmpresa = async (empresa) => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }

            }

            const { data } = await clienteAxios.post('/empresas', empresa, config)
            setEmpresas([...empresas, data])

            setAlerta({

                msg: 'Company created',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/empresas')

                location.reload();

            }, 3000)

        } catch (error) {
            console.log(error)
        }
    }

    const obtenerEmpresa = async id => {
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

            const { data } = await clienteAxios(`/empresas/${id}`, config)
            setEmpresa(data)
            setAlerta({})

        } catch (error) {
            navigate('/empresas')

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

    const eliminarEmpresa = async id => {
        try {

            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/empresas/${id}`, config)

            const empresasActualizadas = empresas.filter(empresaState => empresaState._id !== id)
            setEmpresas(empresasActualizadas)

            setAlerta({

                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/empresas')

            }, 3000)

        } catch (error) {
            console.log(error)
        }
    }

    const handleModalStaff = () => {
        setModalFormularioStaff(!modalFormularioStaff)
        setTarea({})

    }

    const handleModalSeguimientoBasico = () => {
        setModalSeguimientoBasico(!modalSeguimientoBasico)
        setTarea({})
    }

    const handleModalSeguimientoAvanzado = () => {
        setModalSeguimientoAvanzado(!modalSeguimientoAvanzado)
        setTarea({})

    }

    const submitCuenta = async tarea => {

        if (tarea?.id) {
            await editarCuenta(tarea)

        } else {
            await crearCuenta(tarea)
        }
    }

    const crearCuenta = async tarea => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/tareas', tarea, config)
            
            //agregar cuentas al state 
            const empresaActualizada = { ...empresa }
            empresaActualizada.tareas = [...empresa.tareas, data]

            setEmpresa(empresaActualizada)
            setAlerta({})
            setModalFormularioStaff(false)
            setModalSeguimientoBasico(false)

        } catch (error) {
            console.log(error)
        }
    }

    const editarCuenta = async tarea => {

        try {

            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }

            }

            const { data } = await clienteAxios.put(`/tareas/${tarea.id}`, tarea, config)
            const empresaActualizada = { ...empresa }
            empresaActualizada.tareas = empresaActualizada.tareas.map(tareaState =>
                tareaState._id === data._id ? data : tareaState)
            setEmpresa(empresaActualizada)

            setAlerta({})
            setModalFormularioStaff(false)
            setModalSeguimientoBasico(false)


        } catch (error) {
            console.log(error)
        }
    }

    const handleModalEditarCuenta = tarea => {

        setTarea(tarea)
        setModalFormularioStaff(true)
    }

    const handleModalEditarActividad = tarea => {

        setTarea(tarea)
        setModalSeguimientoBasico(true)
    }

    const handleModalEditarActividadAvanzado = tarea => {

        setTarea(tarea)
        setModalSeguimientoAvanzado(true)
    }

    const hadleModalEliminarCuenta = tarea => {
        setTarea(tarea)

        setModalEliminarCuenta(!modalEliminarCuenta)
    }

    const eliminarCuenta = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }


            }
            const { data } = await clienteAxios.delete(`/tareas/${tarea._id}`, config)
            setAlerta({
                msg: data.msg,
                error: false
            })

            const empresaActualizada = { ...empresa }
            empresaActualizada.tareas = empresaActualizada.tareas.filter(tareaState => tareaState._id !== tarea._id)

            setEmpresa(empresaActualizada)
            setModalEliminarCuenta(false)
            setTarea({})

            setTimeout(() => {
                setAlerta({})

            }, 1000)

        } catch (error) {

            console.log(error)
        }

    }

    const handleModalPersonal = () => {
        setformularioColaborador(!formularioColaborador)

    }

    const submitColaborador = async email => {
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
            const { data } = await clienteAxios.post('/empresas/colaboradores', { email }, config)
            setColaborador(data)
            setAlerta({})

        } catch (error) {
            setAlerta({


                msg: error.response.data.msg,
                error: true
            })
        } finally {
            setCargando(false)
        }
    }

    const agregarColaborador = async email => {
        try {
        const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }


            }
            const { data } = await clienteAxios.post(`/empresas/colaboradores/${empresa._id}`, email, config)
            setAlerta({
                msg: data.msg,
                error: false
            })

            // AGREGAR COLABORADPRES AL STATE 

            const empresaActualizada = { ...empresa };
            empresaActualizada.colaboradores = [...empresa.colaboradores, data]; // data es el nuevo colaborador

            setEmpresa(empresaActualizada);

            // AGREGAR COLABORADPRES AL STATE 
            ////
            setColaborador({})
            setTimeout(() => {
                setAlerta({})
            }, 2000);
            setformularioColaborador(false)

        } catch (error) {
            setAlerta({

                msg: error.response.data.msg,
                error: true
            })

        }
    }

    const handleModalEliminarColaborador = (colaborador) => {

        setModalEliminarColaborador(!modalEliminarColaborador)
        setColaborador(colaborador)
    }

    const eliminarColaborador = async () => {
        try {

            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post(`/empresas/eliminar-colaboradore/${empresa._id}`, { id: colaborador._id }, config)

            const empresaActualizada = { ...empresa }
            empresaActualizada.colaboradores = empresaActualizada.colaboradores.filter(colaboradorState => colaboradorState._id !== colaborador._id)

            setEmpresa(empresaActualizada)

            setAlerta({
                msg: data.msg,
                error: false

            })
            setColaborador({})
            setModalEliminarColaborador(false)
            setTimeout(() => {

                setAlerta({})
            }, 3000)

        } catch (error) {
            console.log(error.response)
        }
    }
    const completarTarea = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            const { data } = await clienteAxios.post(`/tareas/estado/${id}`, {}, config);
            const empresaActualizada = { ...empresa } /// esta me puede servir xxxxxxxx
            empresaActualizada.tareas = empresaActualizada.tareas.map(tareaState =>
                tareaState._id === data._id ? data : tareaState)

            setEmpresa(empresaActualizada)
            setTarea({})
            setAlerta({})

            // Puedes hacer algo con la respuesta 'data' aquí
        } catch (error) {
            console.log(error.response);
            // Manejar errores aquí si es necesario
        }
    };

    const handleBuscador = () => {
        setBuscador(!buscador)
    }

    const handleBuscarCuenta = () => {
        setBuscadorCuenta(!buscadorcuenta)
    }

    return (
        <EmpresasContext.Provider
            value={{
                empresas,
                mostrarAlerta,
                alerta,
                submitEmpresa,
                obtenerEmpresa,
                empresa,
                cargando,
                eliminarEmpresa,
                modalFormularioStaff,
                handleModalStaff,
                submitCuenta,
                handleModalEditarCuenta,
                tarea,
                modalEliminarCuenta,
                hadleModalEliminarCuenta,
                eliminarCuenta,
                formularioColaborador,
                handleModalPersonal,
                submitColaborador,
                colaborador,
                agregarColaborador,
                handleModalEliminarColaborador,
                modalEliminarColaborador,
                eliminarColaborador,
                completarTarea,
                handleBuscador,
                buscador,
                handleBuscarCuenta,
                buscadorcuenta,
                modalSeguimientoBasico,
                handleModalSeguimientoBasico,
                handleModalEditarActividad,
                handleModalSeguimientoAvanzado,
                modalSeguimientoAvanzado,
                handleModalEditarActividadAvanzado,

            }}

        >{children}

        </EmpresasContext.Provider>
    )
}
export {
    EmpresasProvider
}
export default EmpresasContext