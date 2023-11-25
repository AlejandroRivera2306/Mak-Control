// import { Fragment, useState } from 'react'
// import { Combobox, Dialog, Transition } from '@headlessui/react'
// import useEmpresas from '../hooks/useEmpresas'

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// const BuscarCuenta = () => {
//     const [ busquedaCuenta, setBusquedaCuenta] = useState('')
//     const { buscadorcuenta, handleBuscarCuenta, empresas, tareas} = useEmpresas()

//     const empresasFiltradas = busquedaCuenta === '' ? [] : tareas.filter(tarea => 
//         tarea.nombre.toLowerCase().includes(busquedaCuenta.toLocaleLowerCase()) )
   
    
//     return (
//         <Transition.Root show={ buscadorcuenta  } as={Fragment} afterLeave={ () => setBusquedaCuenta('') }>
//             <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto mt-20 p-4 sm:p-20 md:p-20" onClose={handleBuscarCuenta}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
//                 </Transition.Child>

//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                 >
//                 <Combobox
//                     as="div"
//                     className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"

//                     onChange={(empresa) =>( window.location = `/empresas/${empresa._id}`)}
//                 >
//                     <div className="relative">
//                         <Combobox.Input
//                             className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
//                             placeholder="Search..."
//                             onChange={e => setBusquedaCuenta(e.target.value)}
//                         />
//                     </div>

//                     {empresasFiltradas.length > 0 && (
//                         <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
//                             {empresasFiltradas.map(empresa => (
//                                 <Combobox.Option
//                                 key={empresa._id}
//                                 value={empresa}
//                                 className={({active}) => classNames('cursor-default select-none px-4 py-2', active && 'bg-sky-600 text-white') }
                                
//                                 >
//                                     {empresa.nombre}
//                                 </Combobox.Option>
//                             ))}
//                         </Combobox.Options>
//                     )}
//                     </Combobox>
//                 </Transition.Child>
//             </Dialog>
//         </Transition.Root>
//     )
// }

// export default BuscarCuenta


import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import useEmpresas from '../hooks/useEmpresas'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const BuscarCuenta = () => {
    const [ busquedaTarea, setBusquedaTarea] = useState('')
    const { buscadorcuenta, handleBuscarCuenta, empresas, tareas} = useEmpresas()

    const tareasFiltradas = busquedaTarea === '' ? [] : tareas.filter(tarea => 
        tarea.nombre.toLowerCase().includes(busquedaTarea.toLocaleLowerCase()) )
   
    
    return (
        <Transition.Root show={ buscadorcuenta  } as={Fragment} afterLeave={ () => setBusquedaTarea('') }>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto mt-20 p-4 sm:p-20 md:p-20" onClose={handleBuscarCuenta}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                <Combobox
                    as="div"
                    className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"

                    onChange={(tarea) =>( window.location = `/tareas/${tarea._id}`)}
                >
                    <div className="relative">
                        <Combobox.Input
                            className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                            placeholder="Search..."
                            onChange={e => setBusquedaTarea(e.target.value)}
                        />
                    </div>

                    {tareasFiltradas.length > 0 && (
                        <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                            {tareasFiltradas.map(tarea => (
                                <Combobox.Option
                                key={tarea._id}
                                value={tarea}
                                className={({active}) => classNames('cursor-default select-none px-4 py-2', active && 'bg-sky-600 text-white') }
                                
                                >
                                    {tarea.nombre}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    )}
                    </Combobox>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default BuscarCuenta
