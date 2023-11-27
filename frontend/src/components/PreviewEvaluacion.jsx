
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PreviewEvaluacion = ({ evaluacion }) => {

  const {auth} = useAuth()
  
  const {
    nombre,
    _id,
  } = evaluacion;

  return (
    <div className='border-b border-gray-900/10 pb-3'>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 bg-white text-sm'>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='w-1/6 px-4 py-2 font-medium text-gray-50  bg-green-500 rounded-md'>
                {nombre}
              </td>
              <td className='w-1/6 px-4 py-2 text-gray-500 pr-6 font-bold  '>10% </td>            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewEvaluacion;
