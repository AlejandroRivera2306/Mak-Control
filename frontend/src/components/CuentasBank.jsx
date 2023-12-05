
// import { formatearFecha } from '../helpers/formatearFecha'

// const CuentasBank = ({tarea}) => {

//     const { descripcion, nombre, prioridad,infobank, estado ,fechaEntrega ,_id } = tarea
//   return (
//     <div className=' border-b p-5 flex justify-between items-center'>
//         <div>
//             <p className='mb-1 text-xl'>{nombre}</p>
//             <p className='mb-1 text-xl text-gray-500 uppercase'>{descripcion}</p>
//             <p className='mb-1 text-xl'>{prioridad}</p>
//             <p className='mb-1 text-xl'>{ formatearFecha(fechaEntrega) }</p>
//             <p className='mb-1 text-xl text-gray-600'>{infobank}</p>
//         </div>
//         <div className='flex gap-2'>
//             <button
//              className='bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg'
//             >
               
//             Update
//             </button>

//             {estado ? (

//                 <button
//                 className='bg-green-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg'
//                 >
                
//                 Complete
//                 </button>

//             ):(

//                 <button
//                 className='bg-gray-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg'
//                >
                  
//                Incomplete
//                </button>
//             )}
           


            
//             <button
//              className='bg-red-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg'
//             >
               
//             Delete
//             </button>
            
//         </div>


//     </div>
//   )
// }

// export default CuentasBank


// import { formatearFecha } from '../helpers/formatearFecha';
// import useEmpresas from '../hooks/useEmpresas';
// import useAdmin from '../hooks/useAdmin';


// const CuentasBank = ({ tarea }) => {
//     const { handleModalEditarCuenta,hadleModalEliminarCuenta, completarTarea} = useEmpresas()
//   const { descripcion, nombre, prioridad, infobank, estado, fechaEntrega, _id } = tarea;
//   const admin = useAdmin()

//   return (
//     <div className="mt-1 border-b border-gray-900/10 pb-12 ">
    
      
//       <div className="overflow-x-auto">
//         <table className="mt-4 min-w-full divide-y divide-gray-200">
          
//           <tbody className="divide-y divide-gray-200">
//             <tr className="text-sm text-gray-500">
//               <td className="px-5 py-4 whitespace-nowrap">{nombre}</td>
//               <td className="px-5 py-4 whitespace-nowrap">{descripcion}</td>
//               <td className="px-5 py-4 whitespace-nowrap">{prioridad}</td>
//               <td className="px-2 py-4 whitespace-nowrap">{formatearFecha(fechaEntrega)}</td>
//               <td className="px-2 py-4 whitespace-nowrap">{infobank}</td>
//               <td className="px-2 py-4  lex gap-2">
//               {admin &&  ( 
//                 <button className="bg-indigo-600 px-1 py-1 mr-2 text-white 
//                 uppercase font-bold text-sm rounded-lg"
//                 onClick={()=> handleModalEditarCuenta(tarea)}
                
//                 >
               
//                   Update
//                 </button>
// )} 
              
              
//                 <button className="bg-green-600 px-1 py-1  text-white uppercase font-bold text-sm rounded-lg"
//                 onClick={()=> completarTarea(_id)}
//                 >
//                   {estado ? 'Completa' : 'Incompleta' }
//                 </button>}

//                 {admin && (
//                 <button className="bg-red-500 px-1 py-1 text-white uppercase font-bold text-sm rounded-lg"
                
//                 onClick={() => hadleModalEliminarCuenta(tarea)}>
//                   Delete
//                 </button>

// )}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CuentasBank;

// import { formatearFecha } from '../helpers/formatearFecha';
// import useEmpresas from '../hooks/useEmpresas';
// import useAdmin from '../hooks/useAdmin';




// const CuentasBank = ({ tarea }) => {
//   const { handleModalEditarCuenta, hadleModalEliminarCuenta, completarTarea } = useEmpresas();
//   const { descripcion, nombre, prioridad, infobank, estado, fechaEntrega,tipodecierre, _id } = tarea;
//   const admin = useAdmin();







//   return (
//     <div className="mt-1 border-b border-gray-900/10 pb-12 ">
//       <div className="overflow-x-auto">
//         <table className="mt-4 min-w-full divide-y divide-gray-200">
//           <tbody className="divide-y divide-gray-200">
//             <tr className="text-sm text-gray-500">
//               <td className="px-5 py-4 whitespace-nowrap">{nombre}</td>
//               <td className="px-5 py-4 whitespace-nowrap">{descripcion}</td>
//               <td className="px-5 py-4 whitespace-nowrap">{prioridad}</td>
//               <td className="px-2 py-4 whitespace-nowrap">{formatearFecha(fechaEntrega)}</td>
//               <td className="px-2 py-4 whitespace-nowrap">{infobank}</td>
//               <td className="px-2 py-4 whitespace-nowrap">{tipodecierre}</td>


//              {estado &&   <td className="px-2 py-4 whitespace-nowrap"><p className='text-xs 
             
//              bg-green-600 uppercase p-1 rounded-lg text-white '>Complete:{tarea.completado.nombre} </p> </td> }

//               <td className="px-2 py-4 lex gap-2 flex flex-col lg:flex-row ">
//                 {admin && (
//                   <button
//                     className="bg-indigo-600 px-1 py-1 mr-2 text-white uppercase font-bold text-sm rounded-lg"
//                     onClick={() => handleModalEditarCuenta(tarea)}
//                   >
//                     Update
//                   </button>
//                 )}
              

//                 <button
//                   className={`${estado ? 'bg-sky-600' : 'bg-slate-500'} px-1 py-1 text-white uppercase font-bold text-sm rounded-lg`}
//                   onClick={() => completarTarea(_id)}
//                 >
//                   {estado ? 'Completa' : 'Send'}
//                 </button>
                  
//                 {admin && (
//                   <button
//                     className="bg-red-500 px-1 py-1 text-white uppercase font-bold text-sm rounded-lg"
//                     onClick={() => hadleModalEliminarCuenta(tarea)}
//                   >
//                     Delete
//                   </button>
//                 )}
//               </td>
//             </tr>
//           </tbody>
//         </table>

        
//       </div>
//     </div>
//   );
// };

// export default CuentasBank;



// import { formatearFecha } from '../helpers/formatearFecha';
// import useEmpresas from '../hooks/useEmpresas';
// import useAdmin from '../hooks/useAdmin';

// const CuentasBank = ({ tarea }) => {
//   const { handleModalEditarCuenta, hadleModalEliminarCuenta, completarTarea } = useEmpresas();
//   const { descripcion, nombre, prioridad, infobank, estado, fechaEntrega,tipodecierre, _id } = tarea;
//   const admin = useAdmin();

//   const showFechaEntrega = !!fechaEntrega;

//   return (
//     <div className="mt-1 border-b border-gray-900/10 pb-12 ">
//       <div className="overflow-x-auto">
//         <table className="mt-4 min-w-full divide-y divide-gray-200">
//           <tbody className="divide-y divide-gray-200">
//             <tr className="text-sm text-gray-500">
//               <td className="px-5 py-4 whitespace-nowrap">{nombre}</td>
//               <td className="px-5 py-4 whitespace-nowrap">{descripcion}</td>
//               <td className="px-5 py-4 whitespace-nowrap">{prioridad}</td>
              
//               {showFechaEntrega && (
//                 <td className="px-2 py-4 whitespace-nowrap">
//                   {formatearFecha(fechaEntrega)}
//                 </td>
//               )}
//               <td className="px-2 py-4 whitespace-nowrap">{tipodecierre}</td>
//               <td className="px-2 py-4 whitespace-nowrap">{infobank}</td>
              
//               {estado && (
//                 <td className="px-2 py-4 whitespace-nowrap">
//                   <p className='text-xs bg-green-600 uppercase p-1 rounded-lg text-white'>
//                     Complete: {tarea.completado.nombre}
//                   </p>
//                 </td>
//               )}
  
//               <td className="px-2 py-4 lex gap-2 flex flex-col lg:flex-row ">
//                 {admin && (
//                   <button
//                     className="bg-indigo-600 px-1 py-1 mr-2 text-white uppercase font-bold text-sm rounded-lg"
//                     onClick={() => handleModalEditarCuenta(tarea)}
//                   >
//                     Update
//                   </button>
//                 )}
  
//                 <button
//                   className={`${estado ? 'bg-sky-600' : 'bg-slate-500'} px-1 py-1 text-white uppercase font-bold text-sm rounded-lg`}
//                   onClick={() => completarTarea(_id)}
//                 >
//                   {estado ? 'Completa' : 'Send'}
//                 </button>
  
//                 {admin && (
//                   <button
//                     className="bg-red-500 px-1 py-1 text-white uppercase font-bold text-sm rounded-lg"
//                     onClick={() => hadleModalEliminarCuenta(tarea)}
//                   >
//                     Delete
//                   </button>
//                 )}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
//                 }
// export default CuentasBank;





// import { formatearFecha } from '../helpers/formatearFecha'; aqui vale
// import useEmpresas from '../hooks/useEmpresas';
// import useAdmin from '../hooks/useAdmin';
// const CuentasBank = ({ tarea }) => {
//   const { handleModalEditarCuenta, hadleModalEliminarCuenta, completarTarea } = useEmpresas();
//   const { descripcion, nombre, prioridad, infobank, estado, fechaEntrega,tipodecierre, _id } = tarea;
//   const admin = useAdmin();
//   const showFechaEntrega = !!fechaEntrega;
//   const isCompleted = estado;
//   return (
//     <div className=" w-full mx-auto mt-4">
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="px-10 py-4 w-full">
//           <h3 className="text-lg font-semibold text-gray-900">Bank Account Details</h3>
//         </div>
//         <div className="border-t border-gray-200">
//           <dl className="divide-y divide-gray-200">

//             <div className="flex flex-col sm:flex-row bg-gray-50 py-3 px-6">
//               <dt className="w-1/3 text-sm font-medium text-gray-500">Bank Name</dt>
//               <dd className="w-2/3 mt-1 text-sm text-gray-900 sm:ml-auto">{nombre}</dd>
//             </div>

//             <div className="flex flex-col sm:flex-row bg-white py-3 px-6">
//               <dt className="w-1/3 text-sm font-medium text-gray-500">Account Number</dt>
//               <dd className="w-2/3 mt-1 text-sm text-gray-900 sm:ml-auto">{descripcion}</dd>
//             </div>

//             <div className="flex flex-col sm:flex-row bg-white py-3 px-6">
//               <dt className="w-1/3 text-sm font-medium text-gray-500">Type Account</dt>
//               <dd className="w-2/3 mt-1 text-sm text-gray-900 sm:ml-auto">{prioridad}</dd>
//             </div>


//             {tipodecierre ? (
//               <div className="flex flex-col sm:flex-row bg-white py-3 px-6">
//                 <dt className="w-1/3 text-sm font-medium text-gray-500">Type Closing</dt>
//                 <dd className="w-2/3 mt-1 text-sm text-gray-900 sm:ml-auto">{tipodecierre}</dd>
//               </div>
//             ) : showFechaEntrega ? (
//               <div className="flex flex-col sm:flex-row bg-white py-3 px-6">
//                 <dt className="w-1/3 text-sm font-medium text-gray-500">Day Closing</dt>
//                 <dd className="w-2/3 mt-1 text-sm text-gray-900 sm:ml-auto">
//                   {fechaEntrega}
//                 </dd>
//               </div>
//             ) : null}
//             <div className="flex flex-col sm:flex-row bg-gray-50 py-3 px-6">
//               <dt className="w-1/3 text-sm font-medium text-gray-500">Bank Information</dt>
//               <dd className="w-2/3 mt-1 text-sm text-gray-900 sm:ml-auto">{infobank}</dd>
//             </div>

//             {estado && (
//               <div className="flex flex-col sm:flex-row bg-gray-50 py-3 px-6">
//                 <dt className="w-1/3 text-sm font-medium text-gray-500">Status</dt>
//                 <dd className="w-2/3 mt-1 text-sm text-green-600 sm:ml-auto">
//                   Complete: {tarea.completado.nombre}
//                 </dd>
//               </div>
//             )}
//           </dl>
//         </div>
//         <div className="px-6 py-4 flex justify-center space-x-4">
//           {admin && (
//             <button
//               className="bg-indigo-600 px-4 py-2 text-white font-bold rounded-lg"
//               onClick={() => handleModalEditarCuenta(tarea)}
//             >
//               Update
//             </button>
//           )}
//           <button
//             className={`${isCompleted ? 'bg-green-600' : 'bg-orange-500'} px-4 py-2 text-white font-bold rounded-lg`}
//             onClick={() => completarTarea(_id)}
//           >
//             {isCompleted ? 'Complete' : 'Done'}
//           </button>
//           {admin && (
//             <button
//               className="bg-red-500 px-4 py-2 text-white font-bold rounded-lg"
//               onClick={() => hadleModalEliminarCuenta(tarea)}
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CuentasBank;

import React from 'react';
import useEmpresas from '../hooks/useEmpresas';
import useUsuarios from '../hooks/useUsuarios';
import useAdmin from '../hooks/useAdmin';

const CuentasBank = ({ tarea }) => {
  const {
    handleModalEditarCuenta,
    handleModalEditarActividad,
    handleModalEditarActividadAvanzada,
    hadleModalEliminarCuenta,
    completarTarea
  } = useEmpresas();
  const {
    descripcion,
    nombre,
    prioridad,
    infobank,
    estado,
    fechaEntrega,
    tipodecierre,
    _id
  } = tarea;
  const admin = useAdmin();
  const showFechaEntrega = !!fechaEntrega;
  const isCompleted = estado;

  return (
    <div className="w-full mx-auto mt-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-gray-400">Bank Name</th>
              <th className="px-4 py-2 text-gray-400">Account Number</th>
              <th className="px-4 py-2 text-gray-400">Type Account</th>
              <th className="px-4 py-2 text-gray-400">Type Closing</th>
              <th className="px-4 py-2 text-gray-400">Bank Information</th>
              <th className="px-4 py-2 text-gray-400">Download Info</th>
              <th className="px-4 py-2 text-gray-400">Reconciliador</th>
              <th className="px-4 py-2 text-gray-400">Analyst</th>
              <th className="px-4 py-2 text-gray-400">Actions</th>
              

            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-center ">{nombre}</td>
              <td className="border px-4 py-2 text-center">{descripcion}</td>
              <td className="border px-4 py-2 text-center">{prioridad}</td>
              <td className="border px-4 py-2 text-center">{tipodecierre || (showFechaEntrega && fechaEntrega)}</td>
              <td className="border px-4 py-2 text-center">{infobank}</td>
              <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-sky-500 px-4 py-2 text-white font-bold rounded-lg"
                    onClick={() => handleModalEditarActividad(tarea)}
                  >
                    ...
                  </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button
                    className="bg-sky-500 px-4 py-2 text-white font-bold rounded-lg"
                    onClick={() =>  handleModalEditarActividad(tarea)}
                  >
                    ...
                  </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button
                    className="bg-sky-500 px-4 py-2 text-white font-bold rounded-lg"
                    onClick={() => handleModalEditarActividadAvanzada(tarea)}
                  >
                    ...
                </button>
              </td>
              <td className="border px-4 py-2 flex space-x-2 ">
                {admin && (
                  <button
                    className="bg-indigo-600 px-4 py-2 text-white font-bold rounded-lg"
                    onClick={() => handleModalEditarCuenta(tarea)}
                  >
                    Update
                  </button>
                )}
                <button
                  className={`${isCompleted ? 'bg-green-600' : 'bg-orange-500'} px-4 py-2 text-white font-bold rounded-lg`}
                  onClick={() => completarTarea(_id)}
                >
                  {isCompleted ? 'Complete' : 'Done'}
                </button>
                {admin && (
                  <button
                    className="bg-red-500 px-4 py-2 text-white font-bold rounded-lg"
                    onClick={() => hadleModalEliminarCuenta(tarea)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
            {estado && (
              <tr>
                <td className="border px-4 py-2" colSpan="5">
                  Status: Complete - {tarea.completado.nombre}
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CuentasBank;
