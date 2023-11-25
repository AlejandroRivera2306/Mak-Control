import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useEmpresas from '../hooks/useEmpresas'
import Alerta from './Alerta'
import {useParams} from 'react-router-dom'

const PRIORIDAD = ['Saving', 'Checking','TC' ]
const BAKINFO = ['Banking Online', 'Customer Sends']
const TIPODECIERRE =['Monthly', 'Quarterly']
const FECHAENTREGA = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']


const ModalFormularioStaff = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [prioridad , setPrioridad] = useState('')
  const [fechaEntrega , setFechaEntrega] = useState('')
  const [infobank , setInfobank] = useState('')
  const [tipodecierre, setTipodeCierre] = useState('')

  const [showDateInput, setShowDateInput] = useState(true);
  const [showFrequencyInput, setShowFrequencyInput] = useState(false);

  const params = useParams()

  const {modalFormularioStaff , handleModalStaff, mostrarAlerta, alerta,submitCuenta, tarea} =useEmpresas();

  useEffect(() => {
    if (tarea?._id) {
      setId(tarea._id);
      setNombre(tarea.nombre);
      setDescripcion(tarea.descripcion);
      setPrioridad(tarea.prioridad);
    //   setFechaEntrega(tarea.fechaEntrega?.split('T')[0]);
      setFechaEntrega(tarea.fechaEntrega);
      setInfobank(tarea.infobank);
      setTipodeCierre(tarea.tipodecierre);
      if (tarea.prioridad === 'Saving' || tarea.prioridad === 'Checking') {
        setShowDateInput(false);
        setShowFrequencyInput(true);
      } else if (tarea.prioridad === 'TC') {
        setShowDateInput(true);
        setShowFrequencyInput(false);
       // Si cambias a 'TC', restablece la fecha de cierre
        //  setFechaEntrega('');
      }
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
      console.error("Error submitting account:", error);
    }
  };

  

  const { msg} = alerta
 
    return (
        <Transition.Root show={ modalFormularioStaff } as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleModalStaff}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay 
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

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
                                    onClick={ handleModalStaff  }
                                >
                                <span className="sr-only">Cerrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>


                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">

                                      {id ? ' Update Account' : ' Create Bank Account'}
                                        
                                    </Dialog.Title>

                                    {msg && <Alerta alerta={alerta}/>}

                                     <form 
                                     onSubmit={handleSubmit}
                                     className='my-10'>

                                      <div className='mb-5'>

                                            <label
                                            className='text-gray-700 uppercase font-bold text-sm '
                                            htmlFor='nombre'
                                            >
                                                Bank Name
                                            </label>
                                            <input
                                              type='text'
                                              id='nombre'
                                              placeholder='Bank'
                                              className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                              value={nombre}
                                              onChange={(e) => setNombre(e.target.value)}
                                          />
                                      </div>

                                        <div className='mb-5'>

                                            <label
                                            className='text-gray-700 uppercase font-bold text-sm '
                                            htmlFor='descripcion'
                                            >
                                                Account Number
                                            </label>
                                            <input
                                                    type='text'
                                                    id='descripcion'
                                                    placeholder='-XXXX'
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    value={descripcion}
                                                    onChange={(e) => {
                                                        // Verificar la longitud del valor antes de actualizar el estado
                                                        if (e.target.value.length <= 4) {
                                                            setDescripcion(e.target.value);
                                                        }
                                                    }}
                                                    maxLength={4} // Limita la cantidad máxima de caracteres a 4
                                                />




                                      </div>


                                       <div className='mb-5'>

                                       <label className='text-gray-700 uppercase font-bold text-sm ' htmlFor='prioridad'>
          Account Type
        </label>
        <select
          id='prioridad'
          className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={prioridad}
          onChange={(e) => {
            setPrioridad(e.target.value);
            if (e.target.value === 'Saving' || e.target.value === 'Checking') {
              setShowDateInput(false);
              setShowFrequencyInput(true);
            } else if (e.target.value === 'TC') {
              setShowDateInput(true);
              setShowFrequencyInput(false);
            }
          }}
        >
                                            <option value=" "> --- Choose---</option>

                                            {PRIORIDAD.map(option => (
                                              <option key= {option}>{option}</option>

                                            ))}

                                            </select>
                                            
                                      </div>





                                      {showDateInput && (
        
        <div className='mb-5'>

        <label
        className='text-gray-700 uppercase font-bold text-sm '
        htmlFor='fecha-entrega'
        >
            Day Closing
        </label>
        <select
      
        id='fecha-entrega'
       
        className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
        value={fechaEntrega}
        onChange={(e) => setFechaEntrega(e.target.value)}
        
        >
        <option value=" "> --- Choose---</option>

        {FECHAENTREGA.map(option => (
          <option key= {option}>{option}</option>

        ))}

        </select>
        
  </div>

      
      )}

      {showFrequencyInput && (
        <div className='mb-5'>
        <div className='mb-5'>

<label
className='text-gray-700 uppercase font-bold text-sm '
htmlFor='tipodecierre'
>
    Type Closing
</label>
<select

id='tipodecierre'

className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
value={tipodecierre}
onChange={(e) => setTipodeCierre(e.target.value)}

>
<option value=" "> --- Choose---</option>

{TIPODECIERRE.map(option => (
<option key= {option}>{option}</option>

))}

</select>

</div>
        </div>
      )}



                                      


                                                <div className='mb-5'>

                                            <label
                                            className='text-gray-700 uppercase font-bold text-sm '
                                            htmlFor='info-bank'
                                            >
                                                Bank Information
                                            </label>
                                            <select
                                          
                                            id='info-bank'
                                           
                                            className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                            value={infobank}
                                            onChange={(e) => setInfobank(e.target.value)}
                                            
                                            >
                                            <option value=" "> --- Choose---</option>

                                            {BAKINFO.map(option => (
                                              <option key= {option}>{option}</option>

                                            ))}

                                            </select>
                                            
                                      </div>

                               


                                      

                                      <input
                                      
                                      type="submit"
                                      className='bg-green-500 hover:bg-green-700 
                                      w-full p-3 text-white uppercase font-bold cursor-pointer 
                                      transition-colors rounded-lg text-sm text-center'
                                      value={id ? 'Update Account':' Create Account'}
                                      
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

export default ModalFormularioStaff