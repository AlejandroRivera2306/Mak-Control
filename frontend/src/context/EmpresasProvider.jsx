import { useState, useEffect, createContext, Children} from 'react'
import clienteAxios from '../config/clienteAxios'

const EmpresasContext = createContext();


const EmpresasProvider = ({children}) => {

    const [ empresas , setEmpresas] = useState([])
    const [alerta, setAlerta ] = useState([])

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
            console.log(data)

            setAlerta({

                msg:'Proyecto creado correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
            }, 4000)

       } catch (error) {
        console.log(error)
        
       }

    }


    return (

        <EmpresasContext.Provider

            value={{

                empresas,
                mostrarAlerta,
                alerta,
                submitEmpresa
                
            }}
        
        
        >{children}

        </EmpresasContext.Provider>

     
    )
}
export {
    EmpresasProvider
}

export default EmpresasContext