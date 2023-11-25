import React from 'react'
import useEmpresas from '../hooks/useEmpresas'
import useAdmin from '../hooks/useAdmin'

const Colaborador = ({colaborador}) => {
    const {handleModalEliminarColaborador } = useEmpresas()

    const {nombre, email} = colaborador
    const admin = useAdmin()

  return (
    <div className='border-solid border-2 border-green-600 p-5  flex justify-between items-center bg-gray-100 rounded-r-md shadow-md '>
    
        <div>
            <p className='text-green-500'>{nombre}</p>
            <p className=' text-sm text-gray-700'>{email}</p>

        </div>

        <div>
        {admin && ( 
            <button
            type='button'
            className='bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg'
            onClick={() => handleModalEliminarColaborador(colaborador)}
            >
                Delete
            </button>
        )}
        </div>
    
    
    
    </div>
  )
}

export default Colaborador

