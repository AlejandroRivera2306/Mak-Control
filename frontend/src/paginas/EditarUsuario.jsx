import React from 'react'
import useUsuarios from '../hooks/useUsuarios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import FormularioUsuario from '../components/FormularioUsuario'

const EditarUsuario = () => {

    const params = useParams();
    const { obtenerUsuario, Usuario, cargando, eliminarUsuario  } = useUsuarios();
  
    useEffect(() => {
      obtenerUsuario(params.id);
    }, []);


    const  handleClick = () => {

        if(confirm ('Do you want to deactivate this company?')) {

            eliminarUsuario(params.id)

        } else{


        }

    }
  
    const {
      nombre,
      descripcion,
      fechaEntrega,
      email,
      city,
      state,
      zip,
      numbercomp,
      website,
      cliente,
      closetax,
      contactname,
      whois,
      contactnumber,
      emailcontact,
      payrollcontact,
      ein,
      ssn,
      incometax,
      empleados,
      banksets,
      
    } = Usuario;


      return (
        <div>
          {cargando ? (
            <div className="flex items-center justify-between">
              <button type="button" className="bg-green-600 text-white py-2 px-4 rounded" disabled>
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  fill="currentColor"
                >
                  <path d="M127.6 8.098A144.6 144.6 0 1 1 56 208h24.02A119.5 119.5 0 1 0 175.4 88.98" />
                </svg>
                Loading...
              </button>
            </div>
          ) : (
            
            <div>
                <h1 className="text-5xl font-semibold leading-7 text-gray-900 mb-8">{nombre}</h1>
                <button className='items-center gap-2 text-red-500 hover:text-black '
                    onClick={handleClick}
                > Inactivate</button>
                <FormularioUsuario/>
            </div>
            
          )}
        </div>
      );
    };
    
    export default EditarUsuario;