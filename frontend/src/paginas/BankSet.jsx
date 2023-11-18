import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useEmpresas from '../hooks/useEmpresas';


const BankSet = () => {

    const { obtenerEmpresa, empresa, cargando } = useEmpresas();




    useEffect(() => {
        obtenerEmpresa(params.id);
      }, []);
    
      const {
        nombre,
       
      } = empresa;
   
  return (
    <div>{nombre}</div>
  )
}

export default BankSet

