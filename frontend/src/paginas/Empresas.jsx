// import React from 'react'
// import useEmpresas from '../hooks/useEmpresas'
// import PreviewEmpresa from '../components/PreviewEmpresa'
// import Alerta from "../components/Alerta"


// const Empresas = () => {
//     const {empresas, alerta} = useEmpresas()
//      const {msg } = alerta

//   return (
//     <>
//     {msg && <Alerta  alerta={alerta}/>}
//     <h1 className=' text-4xl font-bold text-center text-gray-500 '> System Companies</h1> 
    

//     <div className=' bg-white shadow mt-10 rounded-lg p-5'>
//     {empresas.length  ?  
//         empresas.map(empresa => (
//         <PreviewEmpresa
//         key={empresa._id}
//         empresa={empresa}
        
//         />

//     ))
//     : <p className='font-bold'> Loading .....</p>}
//     </div>

    
    
//     </>
//   )
// } 

// export default Empresas


import React, { useState } from 'react';
import useEmpresas from '../hooks/useEmpresas';
import PreviewEmpresa from '../components/PreviewEmpresa';
import Alerta from "../components/Alerta";

const Empresas = () => {
    const { empresas, alerta } = useEmpresas();
    const { msg } = alerta;
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredEmpresas = empresas.filter((empresa) => {
        return (
            empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empresa.closetax.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empresa.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empresa.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            empresa.contract.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <>
            {msg && <Alerta alerta={alerta} />}
            <h1 className='text-4xl font-bold text-center text-gray-500'>System Companies</h1>
            <div className='bg-white shadow mt-10 rounded-lg p-5'>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleSearch}
                    className='border border-green-300 rounded-md px-3 py-2 mb-4 w-full'
                />
                {filteredEmpresas.length ? (
                    filteredEmpresas.map((empresa) => (
                        <PreviewEmpresa key={empresa._id} empresa={empresa} />
                    ))
                ) : (
                    <p className='font-bold'>No results found.</p>
                )}
            </div>
        </>
    );
};

export default Empresas;
