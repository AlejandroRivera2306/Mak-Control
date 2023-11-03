
import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'


const ConfirmarCuenta = () => {

    const [alerta, setAlerta] = useState({})
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

    const params = useParams();
    const {id} = params;

    useEffect (() => {

        const confirmarCuenta = async () => {

            try {
                const url = `/usuarios/confirmar/${id}`
                const { data } = await clienteAxios.get(url)
                
                setAlerta({

                    msg: data.msg,
                    error: false

                })
                setCuentaConfirmada(true)
                


                } catch (error) {

                    console.log(error)
            //     setAlerta({

            //     msg: error.response.data.msg,
            //     error: true

            //   })
                
            }


        }

        confirmarCuenta();

    },[])

    const { msg } = alerta

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-25 w-auto"
            src="../img/logo.png"
            alt="Your Company"
          />
           <div>
        {msg && <Alerta alerta={alerta}/>}

        {cuentaConfirmada && (

                <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}

                    <Link 
                    to="/"
                    className="font-semibold leading-6 text-fuchsia-950 hover:text-indigo-500">
                    Login
                    
                    </Link>
                    
                </p>


        )}

        </div>
        
        </div>
       
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        

         
        </div>
      </div>
     
    </>
  )


  
}

export default ConfirmarCuenta

