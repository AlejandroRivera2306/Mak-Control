import React from 'react'
import useUsuarios from '../hooks/useUsuarios'
import PreviewUsuario from '../components/PreviewUsuario'
import Alerta from "../components/Alerta"

const Usuarios = () => {
    const {usuarios, alerta} = useUsuarios()
    const {msg } = alerta

  return (
    <>
    {msg && <Alerta  alerta={alerta}/>}
    <h1 className=' text-4xl font-bold text-center text-gray-800 uppercase'>User Administrator</h1> 
    

    <div className=' bg-white shadow mt-10 rounded-lg p-5'>
    {usuarios.length  ?  
        usuarios.map(usuario => (
        <PreviewUsuario
        key={usuario._id}
        usuario={usuario}
        
        />

    ))
    : <p> no se encontraron Usuarios</p>}
    </div>
    
    </>
  )
} 

export default Usuarios