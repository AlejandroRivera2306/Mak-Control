import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useEmpresas from '../hooks/useEmpresas'
import Alerta from './Alerta'
import { useParams } from 'react-router-dom'


const FormularioColaborador = () => {

    // useEffect(() => {
        
    //     obtenerEmpresa(params.id)
    // },[]);

    
    const[ email, setEmail] = useState('')
    const { mostrarAlerta, alerta,submitColaborador, obtenerEmpresa, empresa, cargando, colaborador,agregarColaborador } = useEmpresas()
    const params = useParams()

    const handleSubmit = e => {
        e.preventDefault();

        if(email === '') {
            mostrarAlerta({
                msg: 'EL email es obligatorio',
                error: true
            })
            return


        }

        submitColaborador(email)
    }

    const { formularioColaborador, handleModalPersonal} =useEmpresas();
    const {msg} = alerta

    
 
    // if(cargando) return ' Loading....'

    if(!empresa?._id) return <Alerta alerta={alerta}/>

    return (
        <Transition.Root show={ formularioColaborador } as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={ handleModalPersonal}>
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
                                    onClick={ handleModalPersonal  }
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
                                    {msg && <Alerta alerta={alerta}/>}
                                    <h1>{empresa.nombre}</h1>
                                   
                                    <form
                                    className='bg-white py-10 px-5 md:w-full rounded-lg shadow'
                                    onSubmit={handleSubmit}
                                    >

                                        <div className='mb-5'>

                                        <label
                                        className='text-gray-700 uppercase font-bold text-lg '
                                        htmlFor='email'
                                        >
                                        User
                                        </label>
                                        <input
                                        type='email'
                                        id='email'
                                        placeholder='user email'
                                        className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                        </div>



                                        <input
                                      
                                      type="submit"
                                      className='bg-green-500 hover:bg-green-700 
                                      w-full p-3 text-white uppercase font-bold cursor-pointer 
                                      transition-colors rounded-lg text-sm text-center'
                                      value='Search User'
                                      
                                      />
                                    { cargando ? 'Loading....' : colaborador?._id && (
                                        <div className='flex justify-beetween mt-10'>
                                             <p>{colaborador.nombre}</p>

                                           <button
                                            type='button'
                                            className='bg-slate-800 px-5 py-2 rounded-full  text-white font-bold text-sm ml-10'
                                            onClick={()=> agregarColaborador({
                                                email: colaborador.email

                                            })}

                                            > Add <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                          </svg>
                                          
                                            </button>
                                            
                                            
                                        </div>

                                    )}


                                    </form>
                                    
                                    </Dialog.Title>

                                   

                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default FormularioColaborador