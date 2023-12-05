// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useEffect } from 'react';
// import useEmpresas from '../hooks/useEmpresas';

// const Empresa = () => {

//     const params = useParams();
//     const { obtenerEmpresa,empresa,cargando } = useEmpresas();
    
//     useEffect(() => {

//         obtenerEmpresa(params.id)

//     },[])

//     const { nombre  } = empresa
//   return (

//     cargando ? '...': (
//         <div>
//         <h1 className='font-black text-4xl'>{nombre} </h1>


//     </div>


//     )
//   )
// }

// export default Empresa

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import useEmpresas from '../hooks/useEmpresas';

// const Empresa = () => {
//     const params = useParams();
//     const { obtenerEmpresa, empresa, cargando } = useEmpresas();

//     useEffect(() => {
//         obtenerEmpresa(params.id);
//     }, []);

//     const { nombre, descripcion,fechaEntrega, 
//         email,city,state,zip,numbercomp,
//         website,closetax,contactname,whois,
//         contactnumber,emailcontact,payrollcontact,ein,ssn,incometax,empleados} = empresa;

//     return (
//         <div>
//             {cargando ? (
//                 <div className="flex items-center justify-center">
//                     <button type="button" className="bg-green-600 text-white py-2 px-4 rounded" disabled>
//                         <svg
//                             className="animate-spin h-5 w-5 mr-3"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 256 512"
//                             fill="currentColor"
//                         >
//                             <path d="M127.6 8.098A144.6 144.6 0 1 1 56 208h24.02A119.5 119.5 0 1 0 175.4 88.98"/>
//                         </svg>
//                         Loading...
//                     </button>
//                 </div>
//             ) : (
//                 <div>
//                     <h1 className="font-black text-4xl">{nombre}</h1>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Empresa;



// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useEffect } from 'react';
// import useEmpresas from '../hooks/useEmpresas';

// import { PaperClipIcon } from '@heroicons/react/20/solid'

// export default function Empresa() {

//     const params = useParams();
//     const { obtenerEmpresa, empresa, cargando } = useEmpresas();

//     useEffect(() => {
//         obtenerEmpresa(params.id);
//     }, []);

//     const { nombre, descripcion,fechaEntrega, 
//         email,city,state,zip,numbercomp,
//         website,closetax,contactname,whois,
//         contactnumber,emailcontact,payrollcontact,ein,ssn,incometax,empleados=[]} = empresa;





//   return (
//     <div>
//       <div className="px-4 sm:px-0">
//         <h1 className="text-5xl font-semibold leading-7 text-gray-900">{nombre}</h1>
//         <p className="mt-1 max-w-2xl text-2xl leading-6 text-gray-500">{descripcion}</p>
//       </div>
//       <div className="mt-6 border-t border-gray-100">
//         <dl className="divide-y divide-gray-100">
//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Date Aldana</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{fechaEntrega}</dd>
//           </div>
//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Email Address</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
//           </div>
//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">City</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{city}</dd>
//           </div>
//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">State</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{state}</dd>
//           </div>
//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Postal Code</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
//             {zip}
//             </dd>
//           </div>

//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Phone Company</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{numbercomp}</dd>
//           </div>
//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Website</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{website}</dd>
//           </div>
//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Type of tax closing</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{closetax}</dd>
//           </div>

//                 <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Contact Name</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
//                 {contactname}
//                 <br /> {/* Agregar un salto de línea */}
//                 {whois}

//                 <br />
//                 {contactnumber}


//             </dd>
//         </div>

//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Email Contact</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{emailcontact}</dd>
//           </div>

//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Payroll Contact</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{payrollcontact}</dd>
//           </div>

//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">EIN</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ein}</dd>
//           </div>

//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">SSN</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ssn}</dd>
//           </div>

//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//             <dt className="text-2xl font-medium leading-6 text-gray-900">Income Tax Form</dt>
//             <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{incometax}</dd>
//           </div>

//           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
//   <dt className="text-2xl font-medium leading-6 text-gray-900">Partners</dt>
//   <dd className="mt-2 text-2xl text-gray-900 sm:col-span-2 sm:mt-0">
//     <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
//       {empleados.map((empleado, index) => (
//         <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
//           <div className="flex w-0 flex-1 items-center">
            
//             <div className="ml-4 flex min-w-0 flex-1 gap-2">
//               <span className="truncate font-medium text-2xl ">{empleado.nombre}</span>
//               <span className="flex-shrink-0 text-gray-600  text-2xl">{empleado.cargo}</span>
//               <span className="flex-shrink-0 text-gray-600 text-2xl">{empleado.porcentaje}%</span>

//             </div>
//           </div>
//           <div className="ml-4 flex-shrink-0">
//             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//               {/* Download */}
//             </a>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </dd>
// </div>

//         </dl>
//       </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { useEffect} from 'react';
import useEmpresas from '../hooks/useEmpresas';
import useAdmin from '../hooks/useAdmin';
import ModalFormularioStaff from '../components/ModalFormularioStaff';
import ModalEliminarCuenta from '../components/ModalEliminarCuenta';
import CuentasBank from '../components/CuentasBank';
import Alerta from '../components/Alerta';
import FormularioColaborador from '../components/FormularioColaborador';
import ModalEliminarColaborador from '../components/ModalEliminarColaborador';

import BuscarCuenta from '../components/BuscarCuenta';


import { PaperClipIcon } from '@heroicons/react/20/solid';

import Colaborador from '../components/Colaborador';

export default function Empresa() {



  
  const params = useParams();
  const { obtenerEmpresa, empresa, cargando,handleModalStaff,alerta,handleModalPersonal ,handleBuscarCuenta} = useEmpresas();
 
 
  const admin = useAdmin()
 

  const [ modal, setModal] = useState(false)


 


  

  useEffect(() => {
    obtenerEmpresa(params.id);
  }, []);

  const {
    nombre,
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
    
  } = empresa;

 

  const{msg}= alerta



  return (

   
    <div >
     
     <div>
            <h1 className="text-3xl font-semibold leading-7 text-center text-gray-900">{nombre}</h1>
            <p className="mt-1 max-w-1xl text-2xl leading-6 text-center text-gray-500">{descripcion}</p>
        <BuscarCuenta/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500" onClick={handleBuscarCuenta}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> */}


        <div className='grid justify-items-end'>
            
</div>
    </div>


     {admin && ( 
          <button
            onClick={handleModalStaff}
            type='button'
            className='flex items-center justify-center p-3 mb-4 mt-3 text-lg font-semibold bg-green-500 text-white rounded-full hover:bg-green-700 transition-colors duration-300'
          >
            <span className="mr-2">Create Account</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
                )
                }

                <div className='bg-white shadow mt-10 rounded-lg'>
                  {/* ...otros elementos */}
                  <div className='flex justify-center'>
                    {msg && <Alerta alerta={alerta} />}
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full  rounded-lg">
                    

                      {empresa.tareas?.length ? empresa.tareas?.map(tarea => (

                <CuentasBank
                key={tarea._id}
                tarea={tarea}
                />
                )) : <p className='text-center my-5 p-10 text-2xl text-red-600'>

                 No bank accounts for this company
                </p> }


                    </table>
                  </div>

                  
                </div>



<div className='bg-gradient-to-r from-gray-800 to-green-800 mt-5  mb-6 rounded-md'>

<div className='flex items-center justify-between' >

<div className="border-solid border-3 border-green-600 "></div>
<h1 className="text-4xl font-semibold leading-7 mt-7 mb-6 text-white "> Staff Asigned</h1>
  
{admin && ( 
          <button
            onClick={handleModalPersonal}
            type='button'
            className='flex items-center justify-center p-3 mb-4 mt-3 text-lg font-semibold bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300'
          >
            <span className="mr-2">Add Staff</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
)}

</div>

<FormularioColaborador/>

<div className='text-green-600 font-bold '>  {empresa.colaboradores?.length ? empresa.colaboradores?.map(colaborador => (
 <Colaborador
  key={colaborador._id}
  colaborador={colaborador} 
 />

)) : <p className='text-center my-5 p-10 text-2xl '>
No staff assigned yet
</p> }
</div>
</div>









      {cargando ? (
        <div className="flex items-center justify-center">
          <button type="button" className="bg-green-600 text-white py-2 px-4 rounded" disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              fill="currentColor"
            >
              <path d="M127.6 8.098A144.6 144.6 0 1 1 56 208h24.02A119.5 119.5 0 1 0 175.4 88.98" />
            </svg>
            Loading...
          </button>
        </div>
      ) : (
        <div >
          <div className="px-4 sm:px-0 flex justify-around ">
            <div>
            <h1 className="text-4xl font-semibold leading-7 text-gray-900 text-center mt-4"> Company Information</h1>
            <p className="mt-5 max-w-1xl text-2xl leading-6 text-gray-500 text-center">{nombre}</p>

            {admin && (
            <div className='flex items-center gap-2 text-gray-500 hover:text-black justify-end mt-7'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
              
            <Link
            to={`/empresas/editar/${params.id}`}
            className= 'uppercase font-bold text-white rounded-full bg-blue-500 p-1'
            >
            Update Data
            </Link>
            </div>
         )}
            </div>
            
            
            

            <ModalFormularioStaff
              
            />

            <ModalEliminarCuenta/>
            <ModalEliminarColaborador/>
            
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-gradient-to-r text-green-300  bg-gray-800 rounded-md shadow-md  p-6 ">
            <div className="sm:col-span-3">
              <label htmlFor="nombre" className="block text-2xl font-medium leading-6 text-white">
              Company name 
              </label>  
              <div className="mt-2">
                <h2> {nombre}</h2>
               
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-2xl font-medium leading-6  text-white">
              Related group 
              </label>
              <div className="mt-2">
                <h2>{descripcion}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-2xl font-medium leading-6 text-white">
                Email address 
              </label>
              <div className="mt-2">
                <h2 className='uppercase'>{email}</h2>
              </div>
            </div>

            

            

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-2xl font-medium leading-6 text-white">
                City 
              </label>
              <div className="mt-2">
              <h2 className='uppercase'>{city}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-2xl font-medium leading-6 text-white">
                State / Province 
              </label>
              <div className="mt-2">
              <h2 className='uppercase'>{state}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-2xl font-medium leading-6 text-white">
                ZIP / Postal code 
              </label>
              <div className="mt-2">
              <h2 className='uppercase'>{zip}</h2>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-2xl font-medium leading-6 text-white">
                Street address 
              </label>
              <div className="mt-2">
              <h2 className='uppercase'>{cliente}</h2>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-2xl font-medium leading-6 text-white">
                Company phone number 
              </label>
              <div className="mt-2">
               <h2 className='uppercase'>{numbercomp}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="website" className="block text-2xl font-medium leading-6 text-white">
                Website 
              </label>
              <div className="mt-2">
                <h2 className='uppercase'>{website}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-2xl font-medium leading-6 text-white">
              Type of tax closing 
              </label>
              <div className="mt-2">
               <h2 className='uppercase'>{closetax} </h2>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-2xl font-medium leading-6 text-white">
                Date of entry Aldana 
              </label>
              <div className="mt-2">
               <h2 className='uppercase'>{ fechaEntrega?.split('T')[0]}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-xl font-medium leading-6 text-white">
                Contact Name 
              </label>
              <div className="mt-2">
               <h2 className='uppercase'>{contactname}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-2xl font-medium leading-6 text-white">
              Who is ? 
              </label>
              <div className="mt-2">
                <h2 className='uppercase'>{whois}</h2>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-2xl font-medium leading-6 text-white">
                Contact number 
              </label>
              <div className="mt-2">
                <h2 className='uppercase'>{contactnumber}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-2xl font-medium leading-6 text-white">
                Email Contact 
              </label>
              <div className="mt-2">
                <h2 className='uppercase'>{emailcontact}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-2xl font-medium leading-6 text-white">
                Payroll Contact 
              </label>
              <div className="mt-2">
               <h2 className='uppercase'>{payrollcontact}</h2>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-2xl font-medium leading-6 text-white">
                EIN 
              </label>
              <div className="mt-2">
              <h2 className='uppercase'>{ein}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-2xl font-medium leading-6 text-white">
                SSN 
              </label>
              <div className="mt-2">
                <h2 className='uppercase'>{ssn}</h2>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-2xl font-medium leading-6 text-white">
                Income Tax Form 
              </label>
              <div className="mt-2">
                <h2 className='uppercase'>{incometax}</h2>
              </div>
            </div>


           

        </div>

        <div className="mt-6 border-b border-gray-900/10 pb-12">
          </div>      
          <div className="mt-6 border-b border-gray-900/10 pb-12">
  <h2 className="font-semibold leading-7 text-white  bg-gradient-to-r from-gray-800 to-green-800 p-5 mb-2 rounded-md text-3xl ">Partners Information</h2>
  <div className="overflow-x-auto bg-gradient-to-r from-gray-800 to-gray-700 shadow-md  p-5 rounded-md">
    <table className="mt-4 min-w-full divide-y divide-gray-200 ">
      <thead className=" rounded-md text-2xl text-white">
        <tr className='rounded-md'>
          <th className="px-6 py-3 text-left text-1xl font-medium   tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left font-medium  tracking-wider text-1xl ">
          Member
          </th>
          <th className="px-6 py-3 text-left  font-medium  tracking-wider text-1xl ">
            %
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {empleados &&
          empleados.map((empleado, index) => (
            <tr key={index} className="text-sm text-gray-500">
              <td className="px-6 py-4 whitespace-nowrap text-green-300 text-2xl">{empleado.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-300 text-2xl">{empleado.cargo}</td>
              <td className="px-6 py-4 whitespace-nowrap  text-green-300 text-2xl">{empleado.porcentaje}%</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>





<div className="mt-6 border-b border-gray-900/10 pb-12">
  <h2 className=" font-semibold leading-7 text-white  bg-gradient-to-r from-gray-800 to-green-800 shadow-md rounded-md p-5 text-3xl">Services</h2>

  <div className="overflow-x-auto ">
    <table className="mt-4 min-w-full divide-y divide-gray-500 bg-gradient-to-r from-gray-800 to-gray-800 shadow-md">
      <thead className="bg-gray-800">
        <tr>
          <th className="px-6 py-3 text-left text-1xl font-medium text-white  text-2xl tracking-wider">
            Service
          </th>
          <th className="px-6 py-3 text-left text-1xl font-medium text-white text-2xl tracking-wider">
            Details
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="text-2xl text-green-300">
          <td className="px-6 py-4 whitespace-nowrap">Accounting</td>
          <td className="px-6 py-4 whitespace-nowrap">{empresa.accounting}</td>
        </tr>
        <tr className="text-2xl text-green-300">
          <td className="px-6 py-4 whitespace-nowrap">Tax Planning</td>
          <td className="px-6 py-4 whitespace-nowrap">{empresa.txplanning}</td>
        </tr>
        <tr className="text-2xl text-green-300">
          <td className="px-6 py-4 whitespace-nowrap">Sale Tax</td>
          <td className="px-6 py-4 whitespace-nowrap">{empresa.saletax}</td>
        </tr>
        <tr className="text-2xl text-green-300">
          <td className="px-6 py-4 whitespace-nowrap">Payroll</td>
          <td className="px-6 py-4 whitespace-nowrap">{empresa.payroll}</td>
        </tr>
        <tr className="text-2xl text-green-300">
          <td className="px-6 py-4 whitespace-nowrap">Type of contract</td>
          <td className="px-6 py-4 whitespace-nowrap">{empresa.contract}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        </div>
      )}
    </div>
  )
}
