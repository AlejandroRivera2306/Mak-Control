import React from 'react'
import useEvaluaciones from '../hooks/useEvaluaciones'
import PreviewEvaluacion from '../components/PreviewEvaluacion'
import Alerta from "../components/Alerta"

const Evaluaciones = () => {
    const {evaluaciones, alerta} = useEvaluaciones()
    const {msg } = alerta

  return (
    <> 

    {msg && <Alerta  alerta={alerta}/>} 
    <h1 className=' text-4xl font-bold text-center text-gray-800 uppercase'>Evaluations</h1> 
    

    <div className=' bg-white shadow mt-10 rounded-lg p-5'>
     {evaluaciones.length  ?  
        evaluaciones.map(evaluacion => (
        <PreviewEvaluacion
        key={evaluacion._id}
        evaluacion={evaluacion}
        
        />

    ))
    : <p> no se encontraron Evaluaciones</p>}
    </div>
    
    </>
  )
} 

export default Evaluaciones
