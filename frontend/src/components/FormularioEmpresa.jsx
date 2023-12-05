
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import useEmpresas from '../hooks/useEmpresas';
// import Alerta from './Alerta';

// export default function FormularioEmpresa() {

//     const[nombre, setNombre] = useState('')
//     const[descripcion, setDescripcion] = useState('')
//     const[fechaEntrega, setFechaEntrega]= useState('')
//     const[email, setEmail]= useState('')

//     const[cliente, setCliente] = useState('')
//     const {mostrarAlerta,alerta,submitEmpresa} = useEmpresas();

//     const handleSubmit =  async e => {

//         e.preventDefault();

//         if([nombre, descripcion,fechaEntrega,cliente].includes('')){

            
//             mostrarAlerta({
//                 msg: " Todos los campos con * son obligatorios",
//                 error: true
//             })

             


            

//             return
//         }

//         //Pasar al provider
//       await submitEmpresa({nombre,descripcion,fechaEntrega,cliente,email})

//       setNombre('')
//       setDescripcion('')
//       setFechaEntrega('')
//       setCliente('')
      
//     }


// const { msg} = alerta
//   return (
//     <form
//         onSubmit={handleSubmit}
    
    
//     >
//         {msg && <Alerta alerta={alerta}/>}
//       <div className="space-y-12">
      

//         <div className="border-b border-gray-900/10 pb-12">
//             <span>
//             <a href="#partners-section" className="rounded-md bg-fuchsia-950 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Partners</a>
//             <button className="rounded-md bg-fuchsia-950 px-3 py-2  m-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Bankset</button>
//             <button className="rounded-md bg-fuchsia-950 px-3 py-2  m-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Servicios</button>
//             <button className="rounded-md bg-fuchsia-950 px-3 py-2  m-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Personal Asignado</button>
//             </span>
       
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Company information</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">Important company information</p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
//               Company name <span className='text-red-600'>*</span>
//               </label>  
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   id="nombre"
//                   autoComplete="given-name"
//                   value={nombre}
                  
//                   onChange={e => setNombre(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
               
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//               Related group <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   id="descripcion"
//                   autoComplete="family-name"
//                   value={descripcion}
//                   onChange={e => setDescripcion(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
                 
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                 Street address <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   value={cliente}
//                   onChange={e => setCliente(e.target.value)}

//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 Company phone number 
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 Website
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//               Type of tax closing
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>Fiscal year</option>
//                   <option>Calendar year</option>
                 
//                 </select>
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 Date of entry Aldana <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                     value={fechaEntrega}
//                 onChange={ e => setFechaEntrega(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 Contact
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="number"
//                   name="contact"
//                   id="contact"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//               Who is ?
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 Contact number
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="number"
//                   name="contact2"
//                   id="contact2"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email Contact
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="email"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 Payroll Contact
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 EIN
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 SSN
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 Income Tax Form
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
            

            
//           </div>
//         </div>





//         <div className="border-b border-gray-900/10 pb-12" id="partners-section">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Partners</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//           Important information about the company's partners.
//           </p>

//           <div className="mt-10 space-y-10">
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
//               <div className="mt-6 space-y-6">
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="comments"
//                       name="comments"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="comments" className="font-medium text-gray-900">
//                       Comments
//                     </label>
//                     <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="candidates"
//                       name="candidates"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="candidates" className="font-medium text-gray-900">
//                       Candidates
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="offers"
//                       name="offers"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="offers" className="font-medium text-gray-900">
//                       Offers
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
//               <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-everything"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
//                     Everything
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-email"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
//                     Same as email
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-nothing"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
//                     No push notifications
//                   </label>
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//         </div>





//         <div className="mt-6 flex items-center justify-end gap-x-6">
//             <input
//             type="submit"
//             value="next"
//             className='bg-green-500 w-full p-3 uppercase font-bold text-white 
//             rounded-md cursor-pointer hover:bg-green-800 transition-colors'
            
//             />
//          </div>







        
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-fuchsia-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   )
// }


// import React, { useState } from 'react';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import { Link } from 'react-router-dom';
// import useEmpresas from '../hooks/useEmpresas';
// import Alerta from './Alerta';


// export default function FormularioEmpresa() {

//   const [nombre, setNombre] = useState('');
//   const [descripcion, setDescripcion] = useState('');
//   const [fechaEntrega, setFechaEntrega] = useState('');
//   const [email, setEmail] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zip, setZip] = useState('');
//   const [numbercomp, setNumbercomp] = useState('');
//   const [website, setWebsite] = useState('');
//   const [closetax, setClosetax] = useState('Fiscal year');
//   const [contactname, setContactname] = useState('');
//   const [whois, setWhois] = useState('');
//   const [contactnumber, setContactnumber] = useState('');
//   const [emailcontact , setEmailcontact] = useState('');
//   const [payrollcontact, setPayrollcontact] = useState('');
//   const [ein, setEin]= useState('');
//   const [ssn , setSsn]= useState('');
//   const [incometax, setIncometax] = useState('')
 
//   const [cliente, setCliente] = useState('');
//   const { mostrarAlerta, alerta, submitEmpresa } = useEmpresas();


// const [empleados, setEmpleados] = useState([
//     { nombre: '', cargo: '', porcentaje: '' },
//   ]);


//   const [bankInformation, setBankInformation] = useState([
//     { accountNumber: '', bankName: '', bankInfo: '', accountType: '' },
//   ]);

  
// const agregarEmpleado = () => {
//     setEmpleados([...empleados, { nombre: '', cargo: '', porcentaje: '' }]);
//   };


// const eliminarEmpleado = (index) => {
//     const nuevosEmpleados = [...empleados];
//     nuevosEmpleados.splice(index, 1);
//     setEmpleados(nuevosEmpleados);
//   };


//   const handleCargoChange = (index, value) => {
//     const nuevosEmpleados = [...empleados];
//     nuevosEmpleados[index].cargo = value;
//     setEmpleados(nuevosEmpleados);
//   };


//   const handleNombreChange = (index, value) => {
//     const nuevosEmpleados = [...empleados];
//     nuevosEmpleados[index].nombre = value;
//     setEmpleados(nuevosEmpleados);
//   };

//   const handlePorcentajeChange = (index, value) => {
//     const nuevosEmpleados = [...empleados];
//     nuevosEmpleados[index].porcentaje = value;
//     setEmpleados(nuevosEmpleados);

//      const totalPorcentaje = nuevosEmpleados.reduce((total, empleado) => total + (empleado.porcentaje ? Number(empleado.porcentaje) : 0), 0);
  

//     if (totalPorcentaje > 100) {
//       mostrarAlerta({
//         msg: 'Percentages cannot exceed 100%',
//         error: true,
//       });
//     } else {
//       mostrarAlerta({
//         msg: '',
//         error: false,
//       });
//     }
//   };

//   const totalPorcentaje = empleados.reduce((total, empleado) => total + (empleado.porcentaje ? Number(empleado.porcentaje) : 0), 0);
//   const porcentajeStyle = totalPorcentaje > 100 ? { color: 'red' } : {};




//   const agregarCuentaBancaria = () => {
//     setBankInformation([
//       ...bankInformation,
//       { accountNumber: '', bankName: '', bankInfo: '', accountType: '' },
//     ]);
//   };
  
//   const eliminarCuentaBancaria = (index) => {
//     const nuevasCuentas = [...bankInformation];
//     nuevasCuentas.splice(index, 1);
//     setBankInformation(nuevasCuentas);
//   };

  


//   const handleAccountNumberChange = (index, value) => {
//     const nuevasCuentas = [...bankInformation];
//     nuevasCuentas[index].accountNumber = value;
//     setBankInformation(nuevasCuentas);
//   };
  
//   const handleBankNameChange = (index, value) => {
//     const nuevasCuentas = [...bankInformation];
//     nuevasCuentas[index].bankName = value;
//     setBankInformation(nuevasCuentas);
//   };
  
//   const handleBankInfoChange = (index, value) => {
//     const nuevasCuentas = [...bankInformation];
//     nuevasCuentas[index].bankInfo = value;
//     setBankInformation(nuevasCuentas);
//   };
  
//   const handleAccountTypeChange = (index, value) => {
//     const nuevasCuentas = [...bankInformation];
//     nuevasCuentas[index].accountType = value;
//     setBankInformation(nuevasCuentas);
//   };
  


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if ([nombre, descripcion, fechaEntrega, cliente, email, city, state, 
//         zip,numbercomp,website,closetax,contactname, 
//         whois,contactnumber,emailcontact,payrollcontact,ein,ssn,empleados,bankInformation, incometax].includes('')) {
//       mostrarAlerta({
//         msg: 'Fields marked * are required',
//         error: true,
//       });
//       return;
//     }


  
//     await submitEmpresa({ nombre, descripcion, fechaEntrega, cliente, email, city,state, 
//         zip,numbercomp, website,closetax, contactname,whois,
//         contactnumber, emailcontact,payrollcontact,ein,ssn,incometax, empleados, bankInformation});

//     setNombre('');
//     setDescripcion('');
//     setFechaEntrega('');
//     setCliente('');
//     setCity('');
//     setState('');
//     setZip('');
//     setNumbercomp('');
//     setWebsite('');    
//     setClosetax('');
//     setContactname('');
//     setWhois('');
//     setContactnumber('');
//     setEmailcontact('');
//     setPayrollcontact('');
//     setEin('');
//     setSsn('');
//     setIncometax('');
//     // setEmpleados([]);
//     // setBankInformation([]);
//   }

//   const { msg } = alerta;





//   return (
//     <form
//         onSubmit={handleSubmit}
    
    
//     >
//         {msg && <Alerta alerta={alerta}/>}
//       <div className="space-y-12">
      

//         <div className="border-b border-gray-900/10 pb-12">
//             <span>
//             <a href="#partners-section" className="rounded-md bg-fuchsia-950 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Partners</a>
//             <a href="#bankset-section" className="rounded-md bg-fuchsia-950 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Bankset</a>
//             <button className="rounded-md bg-fuchsia-950 px-3 py-2  m-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Services</button>
//             <button className="rounded-md bg-fuchsia-950 px-3 py-2  m-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Assigned Staff</button>
//             </span>
          
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Company information</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">Important company information</p>

//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6  ">
//             <div className="sm:col-span-3">
//               <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
//               Company name <span className='text-red-600'>*</span>
//               </label>  
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   id="nombre"
//                   autoComplete="given-name"
//                   value={nombre}
//                   onChange={e => setNombre(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
               
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//               Related group <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   id="descripcion"
//                   autoComplete="family-name"
//                   value={descripcion}
//                   onChange={e => setDescripcion(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

            

            

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 City <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   value={city}
//                   onChange={e => setCity(e.target.value)}
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 State / Province <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   value={state}
//                   onChange={e => setState(e.target.value)}
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 ZIP / Postal code <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   value={zip}
//                   onChange={e => setZip(e.target.value)}
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                 Street address <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   value={cliente}
//                   onChange={e => setCliente(e.target.value)}

//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 Company phone number <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="number"
//                   name="city"
//                   id="city"
//                   value={numbercomp}
//                   onChange={e => setNumbercomp(e.target.value)}
                 
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
//                 Website <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="website"
//                   id="website"
//                   value={website}
//                   onChange={e => setWebsite(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//               Type of tax closing <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   value={closetax}
//                   onChange={e => setClosetax(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
                
//                   <option>Fiscal year</option>
//                   <option>Calendar year</option>
                 
//                 </select>
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 Date of entry Aldana <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                     value={fechaEntrega}
//                 onChange={ e => setFechaEntrega(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 Contact Name <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="contact"
//                   id="contact"
//                   value={contactname}
//                   onChange={ e => setContactname(e.target.value)}
                 
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//               Who is ? <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   value={whois}
//                   onChange={ e => setWhois(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 Contact number <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="number"
//                   name="contact2"
//                   id="contact2"
//                   value={contactnumber}
//                   onChange={ e => setContactnumber(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email Contact <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="email"
//                   name="email"
//                   id="emailc"
//                   value={emailcontact}
//                   onChange={ e => setEmailcontact(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 Payroll Contact <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   value={payrollcontact}
//                   onChange={ e => setPayrollcontact(e.target.value)}

//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 EIN <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   value={ein}
//                   onChange={ e => setEin(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 SSN <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   value={ssn}
//                   onChange={ e => setSsn(e.target.value)}
                  
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 Income Tax Form <span className='text-red-600'>*</span>
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   value={incometax}
//                   onChange={ e => setIncometax(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
            

            
//           </div>
//         </div>

// <div className="border-b border-gray-900/10 pb-12" id="partners-section">
//   <h2 className="text-base font-semibold leading-7 text-gray-900">Partners</h2>
//   <p className="mt-1 text-sm leading-6 text-gray-600">
//     Important information about the company's partners.
//   </p>

//   {msg && <Alerta alerta={alerta} />}
//   <div className="mt-10 space-y-10">
//     <fieldset>
    
//       <div className="mt-6 space-y-6">
//         {empleados.map((empleado, index) => (
//           <div key={index} className="relative flex gap-x-3">
//             <div className="text-sm leading-6">
//                 <label> Member</label>   <span className='text-red-600'>*</span>
//               <input
//                 type="text"
//                 placeholder=" Position"
//                 value={empleado.cargo}
//                 onChange={(e) => handleCargoChange(index, e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               /> 
//             </div>
//             <div className="text-sm leading-6">
//             <label> Name</label>   <span className='text-red-600'>*</span>
//               <input
//                 type="text" // Cambiado a type="text" para ingresar el nombre
//                 placeholder="  Name"
//                 value={empleado.nombre}
//                 onChange={(e) => handleNombreChange(index, e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//             <div className="text-sm leading-6">
//             <label>%</label>   <span className='text-red-600'>*</span>
//               <input
//                 type="number"
//                 placeholder="  % "
//                 value={empleado.porcentaje}
//                 onChange={(e) => handlePorcentajeChange(index, e.target.value)}
//                 className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               /> 
//             </div>
//             <button
//               onClick={() => eliminarEmpleado(index)}
//               className="px-1 py-1 text-s font-semibold text-black shadow-sm hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//              <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
//             </button>
//           </div>
//         ))}
//         <button
//           onClick={agregarEmpleado}
//           className="rounded-md bg-fuchsia-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Add partner
//         </button>
//         <p style={porcentajeStyle}>Total: {totalPorcentaje}%</p>
//       </div>
//     </fieldset>
//   </div>
// </div>



// <div className="border-b border-gray-900/10 pb-12" id="bankset-section">
//   <h2 className="text-base font-semibold leading-7 text-gray-900">BankSet</h2>
//   <p className="mt-1 text-sm leading-6 text-gray-600">Important information about the BakSet</p>
//   {msg && <Alerta alerta={alerta} />}
//   <div className="mt-10 space-y-10">
//     <fieldset>
//       <div className="mt-6 space-y-6">
//         {bankInformation.map((cuenta, index) => (
//           <div key={index} className="relative flex gap-x-3">
//             <div className="text-sm leading-6">
//               <label>Account Number</label> <span className="text-red-600">*</span>
//               <input
//                 type="number"
//                 placeholder="Account Number"
//                 value={cuenta.accountNumber}
//                 onChange={(e) => handleAccountNumberChange(index, e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label>Name Bank</label> <span className="text-red-600">*</span>
//               <input
//                 type="text"
//                 placeholder="Name Bank"
//                 value={cuenta.bankName}
//                 onChange={(e) => handleBankNameChange(index, e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
       
// <div className="text-sm leading-6">
//   <label>Bank Information</label> <span className="text-red-600">*</span>
//   <input
//     type="text"
//     value={cuenta.bankInfo}
//     onChange={(e) => handleBankInfoChange(index, e.target.value)}
//     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//     placeholder="Enter Bank Information"
//   />
// </div>
// <div className="text-sm leading-6">
//   <label>Account Type</label> <span className="text-red-600">*</span>
//   <input
//     type="text"
//     value={cuenta.accountType}
//     onChange={(e) => handleAccountTypeChange(index, e.target.value)}
//     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//     placeholder="Enter Account Type"
//   />
// </div>

//             <button
//               onClick={() => eliminarCuentaBancaria(index)}
//               className="px-1 py-1 text-s font-semibold text-black shadow-sm hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
//             </button>
//           </div>
//         ))}
//         <button
//           onClick={agregarCuentaBancaria}
//           className="rounded-md bg-fuchsia-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Add account
//         </button>
//       </div>
//     </fieldset>
//   </div>
// </div>


//         <div className="mt-6 flex items-center justify-end gap-x-6">
//             <input
//             type="submit"
//             value="Save Data"
//             className='bg-green-500 w-full p-3  font-bold text-white 
//             rounded-md cursor-pointer hover:bg-green-800 transition-colors'
            
//             />
//          </div>
        
//       </div>
// {/* 
//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-fuchsia-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div> */}
//     </form>
//   )
// }




import React, { useState, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useEmpresas from '../hooks/useEmpresas';
import Alerta from './Alerta';
import { formatearFecha } from '../helpers/formatearFecha';

export default function FormularioEmpresa() {
  const [id , setId] = useState(null)
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [numbercomp, setNumbercomp] = useState('');
  const [website, setWebsite] = useState('');
  const [closetax, setClosetax] = useState('Fiscal year');
  const [contactname, setContactname] = useState('');
  const [whois, setWhois] = useState('');
  const [contactnumber, setContactnumber] = useState('');
  const [emailcontact , setEmailcontact] = useState('');
  const [payrollcontact, setPayrollcontact] = useState('');
  const [ein, setEin]= useState('');
  const [ssn , setSsn]= useState('');
  const [incometax, setIncometax] = useState('')
  const [accounting, setAccounting] = useState('Yes')
  const [txplanning, setTxplanning] = useState('Yes')
  const [saletax, setSaletax] = useState('Yes')
  const [payroll, setPayroll] = useState('Default')
  const [contract, setContract] = useState('Regular')
  const params = useParams ();
  const [cliente, setCliente] = useState('');
  const { mostrarAlerta, alerta, submitEmpresa,empresa } = useEmpresas();


  useEffect(() => {
      if(params.id ){
        setId(empresa._id)
        setNombre(empresa.nombre)
        setDescripcion(empresa.descripcion);
        setFechaEntrega(empresa.fechaEntrega?.split('T')[0]);
        // setFechaEntrega(formatearFecha(empresa.fechaEntrega))
        
        setEmail(empresa.email);
        setCliente(empresa.cliente);
        setCity(empresa.city);
        setState(empresa.state);
        setZip(empresa.zip);
        setNumbercomp(empresa.numbercomp);
        setWebsite(empresa.website);    
        setClosetax(empresa.closetax);
        setContactname(empresa.contactname);
        setWhois(empresa.whois);
        setContactnumber(empresa.contactnumber);
        setEmailcontact(empresa.emailcontact);
        setPayrollcontact(empresa.payrollcontact);
        setEin(empresa.ein);
        setSsn(empresa.ssn);
        setIncometax(empresa.incometax);
        setEmpleados(empresa.empleados);
        // setBanksets(empresa.banksets);
        setAccounting(empresa.accounting);
        setTxplanning(empresa.txplanning);
        setSaletax(empresa.saletax);
        setPayroll(empresa.payroll);
        setContract(empresa.contract);
      }

  },[params])
  
const [empleados, setEmpleados] = useState([
    { nombre: '', cargo: '', porcentaje: '' },
  ]);


  // const [banksets, setBanksets] = useState([
  //   { accountNumber: '', bankName: '', bankInfo: 'Banking Online', accountType: 'CTA' },
  // ]);


const agregarEmpleado = () => {
    setEmpleados([...empleados, { nombre: '', cargo: '', porcentaje: '' }]);
  };


  // const agregarCuenta = () => {
  //   setBanksets([...banksets, { accountNumber: '', bankName: '', bankInfo: '',accountType: '' }]);
  // };



const eliminarEmpleado = (index) => {
    const nuevosEmpleados = [...empleados];
    nuevosEmpleados.splice(index, 1);
    setEmpleados(nuevosEmpleados);
  };


  // const eliminarCuenta = (index) => {
  //   const nuevasCuentas = [...banksets];
  //   nuevasCuentas.splice(index, 1);
  //   setBanksets(nuevasCuentas);
  // };

  const handleCargoChange = (index, value) => {
    const nuevosEmpleados = [...empleados];
    nuevosEmpleados[index].cargo = value;
    setEmpleados(nuevosEmpleados);
  };


  // const handleAccountNumberChange = (index, value) => {
  //   const nuevasCuentas = [...banksets];
  //   nuevasCuentas[index].accountNumber = value;
  //   setBanksets(nuevasCuentas);
  // };


  const handleNombreChange = (index, value) => {
    const nuevosEmpleados = [...empleados];
    nuevosEmpleados[index].nombre = value;
    setEmpleados(nuevosEmpleados);
  };


  // const handleBankNameChange = (index, value) => {
  //   const nuevasCuentas = [...banksets];
  //   nuevasCuentas[index].bankName = value;
  //   setBanksets(nuevasCuentas);
  // };


  // const handleAccountTypeChange = (index, value) => {
  //   const nuevasCuentas = [...banksets];
  //   nuevasCuentas[index].accountType = value;
  //   setBanksets(nuevasCuentas);

  // }


  // const handleBankInfoChange = (index, value) => {
  //   const nuevasCuentas = [...banksets];
  //   nuevasCuentas[index].bankInfo = value;
  //   setBanksets(nuevasCuentas);

  // }

  
  const handlePorcentajeChange  = (index, value) => {

    const nuevosEmpleados = [...empleados];
    nuevosEmpleados[index].porcentaje = value;
    setEmpleados(nuevosEmpleados);
   

     const totalPorcentaje = nuevosEmpleados.reduce((total, empleado) => total + (empleado.porcentaje ? Number(empleado.porcentaje) : 0), 0);
  

    if (totalPorcentaje > 100) {
      mostrarAlerta({
        msg: 'Percentages cannot exceed 100%',
        error: true,
      });
    } else {
      mostrarAlerta({
        msg: '',
        error: false,
      });
    }
  };

  const totalPorcentaje = empleados.reduce((total, empleado) => total + (empleado.porcentaje ? Number(empleado.porcentaje) : 0), 0);
  const porcentajeStyle = totalPorcentaje > 100 ? { color: 'red' } : {};



  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente, email, city, state, 
        zip,numbercomp,website,closetax,contactname, 
        whois,contactnumber,emailcontact,payrollcontact,ein,ssn,empleados,
          incometax,accounting,txplanning,saletax,payroll,contract].includes('')) {
      mostrarAlerta({
        msg: 'Fields marked * are required',
        error: true,
      });
      return;
    }

    // Pasar al provider
    await submitEmpresa({id,  nombre, descripcion, fechaEntrega, cliente, email, city,state, 
        zip,numbercomp, website,closetax, contactname,whois,
        contactnumber, emailcontact,payrollcontact,ein,ssn,incometax, empleados,
         accounting,txplanning,saletax,payroll,contract});

    setId(null);
    setNombre('');
    setDescripcion('');
    setFechaEntrega('');
    setEmail('');
    setCliente('');
    setCity('');
    setState('');
    setZip('');
    setNumbercomp('');
    setWebsite('');    
    setClosetax('');
    setContactname('');
    setWhois('');
    setContactnumber('');
    setEmailcontact('');
    setPayrollcontact('');
    setEin('');
    setSsn('');
    setIncometax('');
    setEmpleados([]);
    // setBanksets([]);
    setAccounting('');
    setTxplanning('');
    setSaletax('');
    setPayroll('');
    setContract('');
  }

  const { msg } = alerta;



  return (
    <form
        onSubmit={handleSubmit}
    
    
    >
        {msg && <Alerta alerta={alerta}/>}
      <div className="space-y-12">
      

        <div className="border-b border-blue-700 pb-12 mt-3 mb-3">
        <div className="flex items-center mb-7  space-x-6">
  <a
    href="#partners-section"
    className="rounded-s-lg p-2 text-green-700 text-2xl hover:bg-green-100 border-solid border-2 border-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Partners
  </a>
  <a
    href="#partners-services"
    className="rounded-s-lg p-2 text-green-700 text-2xl hover:bg-green-100 border-solid border-2 border-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Services
  </a>
</div>
       
          <h2 className="text-2xl font-semibold leading-7 text-gray-900 mt-2">Company information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Important company information</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6  ">
            <div className="sm:col-span-3">
              <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
              Company name <span className='text-red-600'>*</span>
              </label>  
              <div className="mt-2">
                <input
                  type="text"
                  id="nombre"
                  autoComplete="given-name"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
               
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Related group <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="descripcion"
                  autoComplete="family-name"
                  value={descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder='xxxx@.com'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            

            

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  value={state}
                  onChange={e => setState(e.target.value)}
                  autoComplete="address-level1"
                  placeholder='XX'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  value={cliente}
                  onChange={e => setCliente(e.target.value)}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Company phone number <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="city"
                  id="city"
                  value={numbercomp}
                  placeholder="0000000"
                  onChange={e => setNumbercomp(e.target.value)}
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                Website <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="website"
                  id="website"
                  value={website}
                  placeholder='www.xxxx.com'
                  onChange={e => setWebsite(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Type of tax closing <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={closetax}
                  onChange={e => setClosetax(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs md:text-md sm:leading-6 p-3"
                >
                
                  <option>Fiscal year</option>
                  <option>Calendar year</option>
                 
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Date of entry Aldana <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={fechaEntrega}
                 onChange={ e => setFechaEntrega(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Name <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  value={contactname}
                  onChange={ e => setContactname(e.target.value)}
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
              Who is ? <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={whois}
                  placeholder='Owner,Accountant, Mother, Father etc ... '
                  onChange={ e => setWhois(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Contact number <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="contact2"
                  id="contact2"
                  placeholder='00999999'
                  value={contactnumber}
                  onChange={ e => setContactnumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Email Contact <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="emailc"
                  value={emailcontact}
                  onChange={ e => setEmailcontact(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Payroll Contact <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={payrollcontact}
                  placeholder="Name"
                  onChange={ e => setPayrollcontact(e.target.value)}

                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                EIN <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={ein}
                  onChange={ e => setEin(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                SSN <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  value={ssn}
                  onChange={ e => setSsn(e.target.value)}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Income Tax Form <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  value={incometax}
                  onChange={ e => setIncometax(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
                />
              </div>
            </div>
            

            
          </div>
        </div>

<div className="border-b border-gray-900/10 pb-12" id="partners-section">
  <h2 className="text-2xl font-semibold leading-7 text-gray-900">Partners</h2>
  <p className="mt-1 text-sm leading-6 text-gray-600">
    Important information about the company's partners.
  </p>

  {msg && <Alerta alerta={alerta} />}
  <div className="mt-10 space-y-10">
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900"></legend>
      <div className="mt-6 space-y-6">
        {empleados.map((empleado, index) => (
          <div key={index} className="relative flex gap-x-3">
            <div className="text-sm leading-6">
                <label> Member</label>   <span className='text-red-600'>*</span>
              <input
                type="text"
                placeholder=" Position"
                value={empleado.cargo}
                onChange={(e) => handleCargoChange(index, e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
              /> 
            </div>
            <div className="text-sm leading-6">
            <label> Name</label>   <span className='text-red-600'>*</span>
              <input
                type="text" // Cambiado a type="text" para ingresar el nombre
                placeholder="Name"
                value={empleado.nombre}
                onChange={(e) => handleNombreChange(index, e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
              />
            </div>
            <div className="text-sm leading-6">
            <label>%</label>   <span className='text-red-600'>*</span>
              <input
                type="number"
                placeholder="  % "
                value={empleado.porcentaje}
                onChange={(e) => handlePorcentajeChange(index, e.target.value)}
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md sm:leading-6 p-3"
              /> 
            </div>
            <button
              onClick={() => eliminarEmpleado(index)}
              className="px-1 py-1 text-s font-semibold text-black shadow-sm hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Remove partner
            </button>
          </div>
        ))}
        <button
          onClick={agregarEmpleado}
          className="rounded-md bg-fuchsia-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add partner
        </button>
        <p style={porcentajeStyle}>Total: {totalPorcentaje}%</p>
      </div>
    </fieldset>
  </div>
</div>





{/* <div className="border-b border-gray-900/10 pb-12" id="bankset-section">
  <h2 className="text-base font-semibold leading-7 text-gray-900">Bankset</h2>
  <p className="mt-1 text-sm leading-6 text-gray-600">
    Important information about the company's Bankset.
  </p>

  {msg && <Alerta alerta={alerta} />}
  <div className="mt-10 space-y-10">
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900"></legend>
      <div className="mt-6 space-y-6">
        {banksets.map((bankset, index) => (
          <div key={index} className="relative flex gap-x-3">
            <div className="text-sm leading-6">
                <label>Account Number</label>   <span className='text-red-600'>*</span>
              <input
                type="number"
                placeholder=" XXXX"
                value={bankset.accountNumber}
                onChange={(e) => handleAccountNumberChange(index, e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> 
            </div>
            <div className="text-sm leading-6">
            <label> Bank Name</label>   <span className='text-red-600'>*</span>
              <input
                type="text" // Cambiado a type="text" para ingresar el nombre
                placeholder="  Name bank"
                value={bankset.bankName}
                onChange={(e) => handleBankNameChange(index, e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>


            <div className="text-sm leading-6">
            <label>Account Type</label> <span className='text-red-600'>*</span>
            <select
                value={bankset.accountType}
                onChange={(e) => handleAccountTypeChange(index, e.target.value)}
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value="CTA">CTA</option>
                <option value="TC">TC</option>
            </select>
            </div>


            <div className="text-sm leading-6">
            <label>Bank Information</label> <span className='text-red-600'>*</span>
            <select
                value={bankset.bankInfo}
                onChange={(e) => handleBankInfoChange(index, e.target.value)}
                className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value="Banking Online">Banking Online</option>
                <option value="Customer Sends">Customer Sends</option>
            </select>
            </div>

            <button
              onClick={() => eliminarCuenta(index)}
              className="px-1 py-1 text-s font-semibold text-black shadow-sm hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Remove partner
            </button>
          </div>
        ))}
        <button
          onClick={agregarCuenta}
          className="rounded-md bg-fuchsia-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add cuenta
        </button>
       
      </div>
    </fieldset>
  </div>
</div>
 */}




{/* <div className="border-b border-gray-900/10 pb-12" id="partners-section">
  <h2 className="text-base font-semibold leading-7 text-gray-900">Services</h2>
  <p className="mt-1 text-sm leading-6 text-gray-600">
    Important information about the company's Services.
  </p>

  {msg && <Alerta alerta={alerta} />}
  <div className="mt-10 space-y-10">
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">Services</legend>
      <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Accounting <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={accounting}
                  onChange={e => setAccounting(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                
                  <option>Yes</option>
                  <option>No</option>
                 
                </select>
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Tax Planning<span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={txplanning}
                  onChange={e => setTxplanning(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                
                  <option>Yes</option>
                  <option>No</option>
                 
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Sale Tax<span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={saletax}
                  onChange={e => setSaletax(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                
                  <option>Yes</option>
                  <option>No</option>
                 
                </select>
              </div>
            </div>





            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Payroll <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={payroll}
                  onChange={e => setPayroll(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                
                  <option>Default</option>
                  <option>Regular</option>
                  <option>No</option>
                 
                </select>
              </div>
            </div>



            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Type of contract <span className='text-red-600'>*</span>
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={contract}
                  onChange={e => setContract(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                
                  <option>VIP</option>
                  <option>Golden</option>
                  <option>Regular</option>
                 
                </select>
              </div>
            </div>




    </fieldset>
  </div>
</div>

 */}

<div className="border-b border-gray-900/10 pb-12" id="partners-services">
  <h2 className="text-2xl font-semibold leading-7 text-gray-900">Services</h2>
  <p className="mt-1 text-sm leading-6 text-gray-600">
    Important information about the company's Services.
  </p>

  {msg && <Alerta alerta={alerta} />}
  <div className="mt-10 space-y-10">
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900"></legend>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/4 px-4 mb-4">
          <label htmlFor="accounting" className="text-sm font-medium text-gray-900">
            Accounting <span className="text-red-600">*</span>
          </label>
          <select
            id="accounting"
            value={accounting}
            onChange={(e) => setAccounting(e.target.value)}
            className="rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-full"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="w-full sm:w-1/4 px-4 mb-4">
          <label htmlFor="txplanning" className="text-sm font-medium text-gray-900">
            Tax Planning <span className="text-red-600">*</span>
          </label>
          <select
            id="txplanning"
            value={txplanning}
            onChange={(e) => setTxplanning(e.target.value)}
            className="rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-full"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="w-full sm:w-1/4 px-4 mb-4">
          <label htmlFor="saletax" className="text-sm font-medium text-gray-900">
            Sale Tax <span className="text-red-600">*</span>
          </label>
          <select
            id="saletax"
            value={saletax}
            onChange={(e) => setSaletax(e.target.value)}
            className="rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-full"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="w-full sm:w-1/4 px-4 mb-4">
          <label htmlFor="payroll" className="text-sm font-medium text-gray-900">
            Payroll <span className="text-red-600">*</span>
          </label>
          <select
            id="payroll"
            value={payroll}
            onChange={(e) => setPayroll(e.target.value)}
            className="rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-full"
          >
            <option>Default</option>
            <option>Regular</option>
            <option>No</option>
          </select>
        </div>

        <div className="w-full sm:w-1/4 px-4 mb-4">
          <label htmlFor="contract" className="text-sm font-medium text-gray-900">
            Type of contract <span className="text-red-600">*</span>
          </label>
          <select
            id="contract"
            value={contract}
            onChange={(e) => setContract(e.target.value)}
            className="rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-full"
          >
            <option>VIP</option>
            <option>Golden</option>
            <option>Regular</option>
          </select>
        </div>
      </div>
    </fieldset>
  </div>
</div>




        <div className="mt-6 flex items-center justify-end gap-x-6">
            <input
            type="submit"
            value={id ? 'Update Company' : 'Save Company'}
            className='bg-green-500 w-full p-3 uppercase font-bold text-white 
            rounded-md cursor-pointer hover:bg-green-800 transition-colors'
            
            />
         </div>







        
      </div>

      {/* <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-fuchsia-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div> */}
    </form>
  )
}




