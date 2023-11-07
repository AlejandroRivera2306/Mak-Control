import { useState, useEffect, createContext, Children} from 'react'
import clienteAxios from '../config/clienteAxios'
import {useNavigate} from 'react-router-dom'

const EmpresasContext = createContext();


const EmpresasProvider = ({children}) => {

    const [ empresas , setEmpresas] = useState([])
    const [alerta, setAlerta ] = useState({})
    const navigate = useNavigate();
    const [ empresa, setEmpresa] = useState({})
    const [ cargando , setCargando] = useState(false)


    useEffect(() => {
        const obtenerProyectos = async () =>{


            try {

                const token = localStorage.getItem('token')
                if(!token) return
        
                    const config = {
                        headers: {
        
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }

                    const {data} = await clienteAxios('/empresas', config)
                  setEmpresas(data)
                
            } catch (error) {
                console.log(error)
            }


        }
        obtenerProyectos()

    },[])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 4000);
    }

    const submitEmpresa = async empresa =>{

       try {

        const token = localStorage.getItem('token')
        if(!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }


            }

            const { data} = await clienteAxios.post('/empresas',empresa,config)
            setEmpresas([...empresas,data])

            setAlerta({

                msg:'Proyecto creado correctamente',
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


    const obtenerEmpresa = async id => {
        setCargando(true)
      
        try {

            const token = localStorage.getItem('token')
        if(!token) return

            const config = {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }


            }

            const { data} = await clienteAxios(`/empresas/${id}`, config)
            setEmpresa(data)
            
        } catch (error) {

            console.log(error)
            
        } finally{
            setCargando(false)
        }

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
                cargando
                
            }}
        
        
        >{children}

        </EmpresasContext.Provider>

     
    )
}
export {
    EmpresasProvider
}

export default EmpresasContext