import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useUsuarios from '../hooks/useUsuarios';
import Alerta from './Alerta';
import { useParams } from 'react-router-dom';

const ModalColaboradorAvanzado = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [role, setRole] = useState('');
  const [roles, setRoles] = useState([]);
  const params = useParams();

  const { modalColaboradorAvanzado, handleModalUsuario, alerta, usuario } = useUsuarios();

  useEffect(() => {
    if (usuario?._id) {
      setId(usuario._id);
      setNombre(usuario.nombre);
      setRole(usuario.role);
      return;
    }

    // Restablecer todos los campos si no hay usuario seleccionado
    setId('');
    setNombre('');
    setRole('');
  }, [usuario]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos actualizados al servidor
  };

  const { msg } = alerta;

  return (
    <Transition.Root show={modalColaboradorAvanzado} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleModalUsuario}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleModalUsuario}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
                    {'Update Rol User'}
                  </Dialog.Title>
                  {msg && <Alerta alerta={alerta} />}
                  <form onSubmit={handleSubmit} className="my-10">
                    <div className="w-full mx-auto mt-4">
                      <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="px-4 py-2 text-gray-400">UnkNow Expenses</th>
                              <th className="px-4 py-2 text-gray-400">Petty Cash</th>
                              <th className="px-4 py-2 text-gray-400">Subcontractors</th>
                              <th className="px-4 py-2 text-gray-400">Tax Planning</th>
                              <th className="px-4 py-2 text-gray-400">Sale Tax</th>
                              <th className="px-4 py-2 text-gray-400">Payroll</th>
                              <th className="px-4 py-2 text-gray-400">Loans</th>
                              <th className="px-4 py-2 text-gray-400">Confirmation SharedHolder Dist.</th>
                              <th className="px-4 py-2 text-gray-400">Avanzado</th>
                              <th className="px-4 py-2 text-gray-400">Octubre</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-actividad'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value=" "> --- Choose---</option>
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <input
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded-lg text-sm text-center"
                      value={'Update Rol'}
                    />
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalColaboradorAvanzado;
