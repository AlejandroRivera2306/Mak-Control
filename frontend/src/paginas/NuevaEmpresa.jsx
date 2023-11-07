// import React from 'react'
// import FormularioEmpresa from '../components/FormularioEmpresa'

// const NuevaEmpresa = () => {
//   return (
//     <>
//      <h1 className=' text-4xl font-bold'>Create Company</h1>
//     <div className='mt-5 '>
//         <FormularioEmpresa/>
        
//     </div>
    
//     </>
//   )
// }

// export default NuevaEmpresa

import React from 'react';
import FormularioEmpresa from '../components/FormularioEmpresa';

const NuevaEmpresa = () => {
  return (
    <>
      <h1 className='text-4xl font-bold'>Create Company</h1>
      <div className='mt-5 max-h-[700px] overflow-y-auto'>
        <FormularioEmpresa />
      </div>
    </>
  );
};

export default NuevaEmpresa;