// import React from 'react';
// import FormularioEmpresa from '../components/FormularioEmpresa';

// const NuevaEmpresa = () => {
//   return (
//     <>
//       <h1 className='text-4xl font-bold uppercase'>Create Company <span><svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="3" width="14" height="18" rx="2" />  <line x1="9" y1="7" x2="15" y2="7" />  <line x1="9" y1="11" x2="15" y2="11" />  <line x1="9" y1="15" x2="13" y2="15" /></svg></span></h1>
//       <div className='mt-5 max-h-[700px] overflow-y-auto'>
//         <FormularioEmpresa />
//       </div>
//     </>
//   );
// };

// export default NuevaEmpresa;


import React from 'react';
import FormularioEmpresa from '../components/FormularioEmpresa';

const NuevaEmpresa = () => {
  return (
    <>
      {/* <h1 className='text-4xl font-bold  flex items-center mb-8 rounded-md  '>Create Company 
        <span className='ml-2'><svg class="h-8 w-8 text-slate-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
          <path stroke="none" d="M0 0h24v24H0z"/>  
          <rect x="5" y="3" width="14" height="18" rx="2" />  
          <line x1="9" y1="7" x2="15" y2="7" />  
          <line x1="9" y1="11" x2="15" y2="11" />  
          <line x1="9" y1="15" x2="13" y2="15" />
        </svg></span>
      </h1> */}
      <div className='mt-5 max-h-[700px] overflow-y-auto'>
        <FormularioEmpresa />
      </div>
    </>
  );
};

export default NuevaEmpresa;
