import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useEmpresas from '../hooks/useEmpresas'
import useUsuarios from '../hooks/useUsuarios';
import Alerta from './Alerta'
import { useParams } from 'react-router-dom'

const ModalSeguimientoBasico = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const [fechaEntrega, setFechaEntrega] = useState('')
  const [infobank, setInfobank] = useState('')
  const [tipodecierre, setTipodeCierre] = useState('')
  const params = useParams()
  const { modalSeguimientoBasico, handleModalSeguimientoBasico, alerta, tarea, mostrarAlerta, submitCuenta } = useEmpresas();

  useEffect(() => {
    if (tarea?._id) {
      setId(tarea._id);
      setNombre(tarea.nombre);
      setDescripcion(tarea.descripcion);
      setPrioridad(tarea.prioridad);
      setFechaEntrega(tarea.fechaEntrega);
      setInfobank(tarea.infobank);
      setTipodeCierre(tarea.tipodecierre);
      return;
    }
    // Restablecer todos los campos si no hay tarea seleccionada
    setId('');
    setNombre('');
    setDescripcion('');
    setFechaEntrega('');
    setPrioridad('');
    setInfobank('');
    setTipodeCierre('');
  }, [tarea]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion, prioridad, infobank].includes('')) {
      mostrarAlerta({
        msg: "Field Required",
        error: true
      });
      return;
    }

    try {
      if (id) {
        // Actualizar cuenta existente
        await submitCuenta({
          id,
          nombre,
          descripcion,
          prioridad,
          fechaEntrega: (prioridad === 'Saving' || prioridad === 'Checking') ? ' ' : fechaEntrega,

          infobank,
          tipodecierre: (prioridad === 'TC' || tipodecierre === '') ? undefined : tipodecierre, // <-- Modificación aquí
          empresa: params.id,
        });
      } else {
        // Crear nueva cuenta
        await submitCuenta({
          nombre,
          descripcion,
          prioridad,
          fechaEntrega: (prioridad === 'Saving' || prioridad === 'Checking') ? ' ' : fechaEntrega,

          infobank,
          tipodecierre: (prioridad === 'TC' || tipodecierre === '') ? undefined : tipodecierre,// <-- Modificación aquí
          empresa: params.id,
        });
      }

      // Limpiar campos después de enviar
      setId('');
      setNombre('');
      setDescripcion('');
      setFechaEntrega('');
      setPrioridad('');
      setInfobank('');
      setTipodeCierre('');
    } catch (error) {
      console.error("Error submitting follow up:", error);
    }
  };


  /*const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos actualizados al servidor
  };*/

  const { msg } = alerta

  return (
    <Transition.Root show={modalSeguimientoBasico} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleModalSeguimientoBasico}>
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
                  onClick={handleModalSeguimientoBasico}
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
              <div className="sm:flex sm:items-start sm:max-w-lg">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
                    {'Update Update Follow Up'}
                  </Dialog.Title>
                  {msg && <Alerta alerta={alerta} />}
                  <form onSubmit={handleSubmit} className="my-10">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="px-4 py-2 text-gray-400">Enero</th>
                              <th className="px-4 py-2 text-gray-400">Febrero</th>
                              <th className="px-4 py-2 text-gray-400">Marzo</th>
                              <th className="px-4 py-2 text-gray-400">Abril</th>
                              <th className="px-4 py-2 text-gray-400">Mayo</th>
                              <th className="px-4 py-2 text-gray-400">Junio</th>
                              <th className="px-4 py-2 text-gray-400">Julio</th>
                              <th className="px-4 py-2 text-gray-400">Agosto</th>
                              <th className="px-4 py-2 text-gray-400">Septiembre</th>
                              <th className="px-4 py-2 text-gray-400">Octubre</th>
                              <th className="px-4 py-2 text-gray-400">Noviembre</th>
                              <th className="px-4 py-2 text-gray-400">Diciembre</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'

                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'

                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento' 

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'

                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'

                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento'

                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select
                                  id='info-Seguimiento'
                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select
                                  id='info-Seguimiento'
                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select
                                  id='info-Seguimiento'
                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select
                                 id='info-Seguimiento'
                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select

                                  id='info-Seguimiento'
                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                              <td className="border px-4 py-2 text-center ">
                                <select
                                  id='info-Seguimiento'
                                  className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                >
                                  <option value="OK">OK</option>
                                  <option value="PD">PD</option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    <input
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded-lg text-sm text-center"
                      value={'Update Follow Up'}
                    />
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalSeguimientoBasico;