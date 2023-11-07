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


import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useEmpresas from '../hooks/useEmpresas';

import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Empresa() {
  const params = useParams();
  const { obtenerEmpresa, empresa, cargando } = useEmpresas();

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
  } = empresa;

  return (
    <div>
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
        <div>
          <div className="px-4 sm:px-0">
            <h1 className="text-5xl font-semibold leading-7 text-gray-900">{nombre}</h1>
            <p className="mt-1 max-w-2xl text-2xl leading-6 text-gray-500">{descripcion}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6  ">
            <div className="sm:col-span-3">
              <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
              Company name 
              </label>  
              <div className="mt-2">
                <input
                  type="text"
                  id="nombre"
                  autoComplete="given-name"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Related group 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="descripcion"
                  autoComplete="family-name"
                  value={descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  value={state}
                  onChange={e => setState(e.target.value)}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  value={cliente}
                  onChange={e => setCliente(e.target.value)}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Company phone number 
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="city"
                  id="city"
                  value={numbercomp}
                  onChange={e => setNumbercomp(e.target.value)}
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                Website 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="website"
                  id="website"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Type of tax closing 
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={closetax}
                  onChange={e => setClosetax(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                
                  <option>Fiscal year</option>
                  <option>Calendar year</option>
                 
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Date of entry Aldana 
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                    value={fechaEntrega}
                onChange={ e => setFechaEntrega(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Name 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  value={contactname}
                  onChange={ e => setContactname(e.target.value)}
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
              Who is ? 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={whois}
                  onChange={ e => setWhois(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Contact number 
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="contact2"
                  id="contact2"
                  value={contactnumber}
                  onChange={ e => setContactnumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Email Contact 
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="emailc"
                  value={emailcontact}
                  onChange={ e => setEmailcontact(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Payroll Contact 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={payrollcontact}
                  onChange={ e => setPayrollcontact(e.target.value)}

                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                EIN 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={ein}
                  onChange={ e => setEin(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                SSN 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  value={ssn}
                  onChange={ e => setSsn(e.target.value)}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Income Tax Form 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={incometax}
                  onChange={ e => setIncometax(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="mt-6 border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Partners</h2>

            {/* Muestra la lista de partners */}
            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
              {empleados && empleados.map((empleado, index) => (
                <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-1 flex min-w-0 flex-1 gap-1">
                      <input className="flex-shrink-0 text-gray-600 text-2xl rounded-md" value={empleado.nombre}></input>
                      <span className="flex-shrink-0 text-gray-600 text-2xl" >{empleado.cargo}</span>
                      <span className="flex-shrink-0 text-gray-600 text-2xl">{empleado.porcentaje}%</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      {/* Download */}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>








        </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <input
            type="submit"
            value="Edit"
            className='bg-green-500 w-full p-3 uppercase font-bold text-white 
            rounded-md cursor-pointer hover:bg-green-800 transition-colors'
            
            />
         </div>


        </div>



      )}
    </div>
  )
}
