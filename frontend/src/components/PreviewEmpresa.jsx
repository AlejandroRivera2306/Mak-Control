// import React from 'react'
// import { Link } from 'react-router-dom'

// const PreviewEmpresa = ({empresa}) => {
//     const { nombre, _id, cliente,closetax, state, city,contract} = empresa
//   return (
//     <div className='border-b p-5 flex'>
//         <p className='flex-1'> 
//         {nombre}

//         <span className='text-sm text-blue-600 uppercase'>
//             <span className='text-sm text-stone-50
//               bg-green-500 uppercase rounded-md ml-3 mr-2'>{''} {closetax} </span> {''} {state} {''} {city} <span className='text-sm text-stone-50
//               bg-black uppercase rounded-md'>{''} {contract}  </span>
            
//         </span>

//         </p>
        
//     <Link to={`${_id}`}
//     className={"text-gray-600 hover:text-gray-800 uppercase text-sm font-bold"}
//     >
//   <svg className="h-8 w-8 text-green-500 hover:text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
//   <circle cx="12" cy="12" r="3" />
// </svg>
    
//     </Link>
    
    
//     </div>

   
//   )
// }

// export default PreviewEmpresa

// import React from 'react';
// import { Link } from 'react-router-dom';

// const PreviewEmpresa = ({ empresa }) => {
//   const { nombre, _id, cliente, state, city, contract } = empresa;

//   return (
//     <div className=' border-b border-gray-900/10 pb-3'>
//       <div className='overflow-x-auto'>
//         <table className=' min-w-full divide-y divide-gray-200'>
//           <thead className='bg-gray-50'>
//             <tr>
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                 Nombre
//               </th>
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                 Cliente
//               </th>
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                 Estado
//               </th>
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                 Ciudad
//               </th>
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
//                 Contrato
//               </th>
//             </tr>
//           </thead>
//           <tbody className='divide-y divide-gray-200'>
//             <tr className='text-sm text-gray-500'>
//               <td className='px-6 py-4 whitespace-nowrap'>{nombre}</td>
//               <td className='px-6 py-4 whitespace-nowrap'>{cliente}</td>
//               <td className='px-6 py-4 whitespace-nowrap'>{state}</td>
//               <td className='px-6 py-4 whitespace-nowrap'>{city}</td>
//               <td className='px-6 py-4 whitespace-nowrap'>{contract}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <Link
//         to={`${_id}`}
//         className='text-gray-600 hover:text-gray-800 uppercase text-sm font-bold mt-4 inline-block'
//       >
//         <svg
//           className='h-8 w-8 text-green-500 hover:text-indigo-600'
//           viewBox='0 0 24 24'
//           fill='none'
//           stroke='currentColor'
//           strokeWidth='2'
//           strokeLinecap='round'
//           strokeLinejoin='round'
//         >
//           <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
//           <circle cx='12' cy='12' r='3' />
//         </svg>
//       </Link>
//     </div>
//   );
// };

// export default PreviewEmpresa;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PreviewEmpresa = ({ empresa }) => {
  // const { nombre, _id, cliente, state, city, contract } = empresa;

  const {auth} = useAuth()
  
  const {
    nombre,
    _id,
    descripcion,
    fechaEntrega,
    email,
    city,
    state,
    zip,
    numbercomp,
    website,
    cliente,
    closetax,
    contactname,
    whois,
    contactnumber,
    emailcontact,
    payrollcontact,
    ein,
    ssn,
    incometax,
    empleados,
    banksets,
    contract,
    creador
    
  } = empresa;

  return (
    <div className='border-b border-gray-900/10 pb-3'>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 bg-white text-sm'>
      
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='w-1/6 px-4 py-2 font-medium text-green-300  bg-green-950 rounded-md'>
                {nombre}
              </td>
              <td className='w-1/6 px-4 py-2 text-gray-500 font-bold  '>{closetax}</td>
              <td className='w-1/6 px-4 py-2 text-gray-500 pr-6 font-bold  '>{state}</td>
              <td className='w-1/6 px-4 py-2 text-gray-500 pr-6 font-bold   '>{city}</td>
              <td className='w-1/6 px-4 py-2 text-gray-500 pr-6  font-bold '>{contract}</td>
              {auth._id !==creador && (

            <td className='w-1/6 px-4 py-2 pr-6 text-sm text-green-700 rounded-lg font-bold uppercase'>Assigned</td>
              )}
              

              <td className='w-1/6 px-4 py-2'>
                <Link
                  to={`${_id}`}
                  className='inline-block rounded px-4 py-2 text-xs font-medium text-green-700 hover:bg-green-100 border-solid border-2 border-green-400'
                >
                  View
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewEmpresa;
