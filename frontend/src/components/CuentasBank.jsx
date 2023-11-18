
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


import { formatearFecha } from '../helpers/formatearFecha';
import useEmpresas from '../hooks/useEmpresas';

const CuentasBank = ({ tarea }) => {
    const { handleModalEditarCuenta,hadleModalEliminarCuenta} = useEmpresas()
  const { descripcion, nombre, prioridad, infobank, estado, fechaEntrega, _id } = tarea;

  return (
    <div className="mt-1 border-b border-gray-900/10 pb-12 ">
    
      
      <div className="overflow-x-auto">
        <table className="mt-4 min-w-full divide-y divide-gray-200">
          
          <tbody className="divide-y divide-gray-200">
            <tr className="text-sm text-gray-500">
              <td className="px-5 py-4 whitespace-nowrap">{nombre}</td>
              <td className="px-5 py-4 whitespace-nowrap">{descripcion}</td>
              <td className="px-5 py-4 whitespace-nowrap">{prioridad}</td>
              <td className="px-2 py-4 whitespace-nowrap">{formatearFecha(fechaEntrega)}</td>
              <td className="px-2 py-4 whitespace-nowrap">{infobank}</td>
              <td className="px-2 py-4  lex gap-2">
                <button className="bg-indigo-600 px-1 py-1 mr-2 text-white 
                uppercase font-bold text-sm rounded-lg"
                onClick={()=> handleModalEditarCuenta(tarea)}
                
                >
                  Update
                </button>
                {estado ? (
                  <button className="bg-green-600 px-1 py-1  text-white uppercase font-bold text-sm rounded-lg">
                    Complete
                  </button>
                ) : (
                  <button className="bg-gray-500 px-1 py-1 mr-2  text-white uppercase font-bold text-sm rounded-lg">
                    Incomplete
                  </button>
                )}
                <button className="bg-red-500 px-1 py-1 text-white uppercase font-bold text-sm rounded-lg"
                
                onClick={() => hadleModalEliminarCuenta(tarea)}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CuentasBank;
