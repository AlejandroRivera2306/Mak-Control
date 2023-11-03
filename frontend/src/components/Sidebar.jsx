import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Sidebar = () => {
    const {auth} = useAuth();
  return (
    <aside className='md:w-30 lg:w-30 px-2 py-5'>

        <p className='text-xl font-bold'>User: {auth.nombre}</p>

        <Link to="/empresas"
            className='bg-green-500 w-full p-3 text-white uppercase font-bold block mt-2 text-center rounded-lg '
        >
        Ver Empresas
        </Link>

        <Link to="crear-empresa"
        className='bg-green-500 w-full p-3 text-white uppercase font-bold block mt-2 text-center rounded-lg '
        >
        Crear Empresa
        </Link>

    </aside>
  )
}

export default Sidebar