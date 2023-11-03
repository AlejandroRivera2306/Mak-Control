import React from 'react'
import { Link, useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const NuevoPassword = () => {


  const [ password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [ alerta, setAlerta] = useState({})
  const [ passwordModificado , setPasswordModificado] = useState(false)

  const params = useParams()
  const { token} = params
  useEffect (() => {

    const comprobarToken = async () => {

      try {

       await clienteAxios(`/usuarios/olvide-password/${token}`)
       setTokenValido(true)
        
        
      } catch (error) {

        setAlerta ({

          msg: error.response.data.msg,
          error: true

        })
        
      }


    }
    comprobarToken()

  },[])

  const handleSubmit = async e => {

    e.preventDefault();

    if(password.length < 6) {
      setAlerta({
        msg: " El password debe ser minimo de 6 caracteres",
        error: true
  

      })
      return

    }

    try {

      const url = `/usuarios/olvide-password/${token}`
      const {data} = await clienteAxios.post(url,{password} )
     
       setAlerta ({
        msg: data.msg,
        error: false
       })

       setPasswordModificado(true)
    } catch (error) {

      setAlerta({
          msg: error.response.data.msg,
          error: true



      })
      
    }
  }

  const { msg} = alerta



  return (
    <>
     
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-25 w-auto"
            src="../img/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new password
          </h2>
          {msg && <Alerta alerta= {alerta} />}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {tokenValido && (
              <form className="space-y-6" action="#" method="POST"
              
              onSubmit={handleSubmit}
              >
           

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                     New Password
                  </label>
                  <div className="text-sm">
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-fuchsia-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Update
                </button>
              </div>
            </form>






          )}

                {passwordModificado && (

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
    </>
  )
}

export default NuevoPassword