import { Link , useNavigate} from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta" 
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"


export default function Login() {

  const [ email , setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const  [ alerta , setAlerta] = useState({})
  const {  setAuth } = useAuth();
  const navigate = useNavigate();


  const handleSubmit  = async e => {

    e.preventDefault();

    if([email, password].includes('')){

      setAlerta({
        msg: " Todos los campos son obligatorios",
        error: true

      })
      return

    }


    try {

      const {data} = await clienteAxios.post('/usuarios/login', {
        email,password

      })
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate("/empresas")
    } catch (error) {
     setAlerta({
      msg: error.response.data.msg,
      error: true


     })
      
    }
  }

  const {msg} = alerta



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
              Sign in to your account
            </h2>

            {msg && <Alerta alerta={alerta}/>}
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST"
            onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">

                        <Link 
                    to="/olvide-password"
                    className="font-semibold leading-6 text-fuchsia-950 hover:text-emerald-600">
                         Forgot password?
              
                         </Link>
                    {/* <a href="#" className="font-semibold text-fuchsia-950 hover:text-indigo-500">
                      Forgot password?
                    </a> */}
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
                  className="flex w-full justify-center rounded-md bg-fuchsia-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}

              <Link 
              to="/registrar"
              className="font-semibold leading-6 text-fuchsia-950 hover:text-emerald-600">
                Create an account
              
              </Link>
              
            </p>
          </div>
        </div>
      </>
    )
  }
  