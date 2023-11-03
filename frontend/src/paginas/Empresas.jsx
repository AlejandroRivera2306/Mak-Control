import React from 'react'
import useEmpresas from '../hooks/useEmpresas'

const Empresas = () => {
    const {empresas} = useEmpresas()
    

  return (
    <>
    <h1 className=' text-4xl font-bold'>Empresas</h1> <span>  <input type="search"
                        placeholder='Buscar empresa'
                        className='rounded-lg lg:w-96 block p-2 border mr-2'
                    /></span>
    <div>

    </div>
    
    </>
  )
}

export default Empresas