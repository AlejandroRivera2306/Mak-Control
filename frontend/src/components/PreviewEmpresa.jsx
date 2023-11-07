import React from 'react'
import { Link } from 'react-router-dom'

const PreviewEmpresa = ({empresa}) => {
    const { nombre, _id, cliente, } = empresa
  return (
    <div className='border-b p-5 flex'>
        <p className='flex-1'> 
        {nombre}

        <span className='text-sm text-gray-500 uppercase'>
            {''} {cliente}
        </span>
        </p>
        
    <Link to={`${_id}`}
    className={"text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"}
    >
  <svg class="h-8 w-8 text-green-500 hover:text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
  <circle cx="12" cy="12" r="3" />
</svg>
    
    </Link>
    
    
    </div>

   
  )
}

export default PreviewEmpresa


