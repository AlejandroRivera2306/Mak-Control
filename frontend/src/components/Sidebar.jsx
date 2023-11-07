import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Sidebar = () => {
    const {auth} = useAuth();
  return (
    <aside className='md:w-30 lg:w-30 px-2 py-5'>

        <p className='text-xl font-bold'>{auth.nombre}</p>

        <Link to="/empresas"
            className='  bg-green-500 w-full p-3  mb-4 uppercase font-bold block text-white 
            rounded-md cursor-pointer hover:bg-green-800 transition-colors' 

           
        >
        See companies
        </Link>

        <Link to="crear-empresa"
        className='bg-green-500 w-full p-3 uppercase font-bold block text-white 
        rounded-md cursor-pointer hover:bg-green-800 transition-colors'
        >
        New company
        </Link>

    </aside>
  )
}

export default Sidebar