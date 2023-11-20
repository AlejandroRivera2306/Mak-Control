import React from 'react'
import useEmpresas from '../hooks/useEmpresas'
import PreviewEmpresa from '../components/PreviewEmpresa'
import Alerta from "../components/Alerta"

const Empresas = () => {
    const {empresas, alerta} = useEmpresas()
     const {msg } = alerta

  return (
    <>
    {msg && <Alerta  alerta={alerta}/>}
    <h1 className=' text-4xl font-bold text-center text-gray-800 uppercase'>Companies</h1> 
    

    <div className=' bg-white shadow mt-10 rounded-lg p-5'>
    {empresas.length  ?  
        empresas.map(empresa => (
        <PreviewEmpresa
        key={empresa._id}
        empresa={empresa}
        
        />

    ))
    : <p> no se encontraron empresas</p>}
    </div>
    
    </>
  )
} 

export default Empresas