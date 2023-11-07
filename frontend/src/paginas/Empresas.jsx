import React from 'react'
import useEmpresas from '../hooks/useEmpresas'
import PreviewEmpresa from '../components/PreviewEmpresa'

const Empresas = () => {
    const {empresas} = useEmpresas()
    

  return (
    <>
    <h1 className=' text-4xl font-bold'>All Companies</h1> <span>  <input type="search"
                        placeholder='Buscar empresa'
                        className='rounded-lg lg:w-96 block p-2 border mr-2'
                    /></span>
    <div className=' bg-white shadow mt-10 rounded-lg p-5'>
    {empresas.length  ?  
        empresas.map(empresa => (
        <PreviewEmpresa
        key={empresa._id}
        empresa={empresa}
        
        />

    ))
    : <p> NO hay proyectos</p>}
    </div>
    
    </>
  )
} 

export default Empresas