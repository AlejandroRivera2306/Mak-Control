
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PreviewUsuario = ({ usuario }) => {

  const {auth} = useAuth()
  
  const {
    nombre,
    _id,
    confirmado,
  } = usuario;

  return (
    <div className='border-b border-gray-900/10 pb-3'>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 bg-white text-sm'>
          {/* <thead className='ltr:text-left rtl:text-right'>
            <tr>
              <th className='w-1/6 px-4 py-2 font-medium text-gray-900'>
                Staff
              </th>
              <th className='w-1/6 px-4 py-2 font-medium text-gray-900'>
                Role
              </th>
              <th className='w-1/6 px-4 py-2'></th>
            </tr>
          </thead> */}
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='w-1/6 px-4 py-2 font-medium text-gray-50  bg-green-500 rounded-md'>
                {nombre}
              </td>
              <td className='w-1/6 px-4 py-2 text-gray-500 pr-6 font-bold  '>Administrador</td>            
              <td className='w-1/6 px-4 py-2'>
                <Link
                  to={`${_id}`}
                  className='inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700'
                >
                  Update
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewUsuario;
