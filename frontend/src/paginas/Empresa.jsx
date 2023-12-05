import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
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
  const { obtenerEmpresa, empresa, cargando, handleModalStaff, alerta, handleModalPersonal, handleBuscarCuenta } = useEmpresas();
  const admin = useAdmin()
  const [modal, setModal] = useState(false)
  
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
  const { msg } = alerta
  return (
    <div >
      <div>
        <h1 className="text-3xl font-semibold leading-7 text-center text-gray-900">{nombre}</h1>
        <p className="mt-1 max-w-1xl text-2xl leading-6 text-center text-gray-500">{descripcion}</p>
        <BuscarCuenta />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500" onClick={handleBuscarCuenta}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className='grid justify-items-end'>
          {admin && (
            <div className='flex items-center gap-2 text-gray-500 hover:text-black'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>

              <Link
                to={`/empresas/editar/${params.id}`}
                className='uppercase font-bold'
              >
                Update Data
              </Link>
            </div>
          )}
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
            )) : <p className='text-center my-5 p-10'>

              No hay cuentas bancarias de esta empresa
            </p>}
          </table>
        </div>
      </div>
      <div className='bg-slate-700 mt-5  mb-6 rounded-md'>
        <div className='flex items-center justify-between' >
          <div className="border-solid border-3 border-green-600"></div>
          <h1 className="text-4xl font-semibold leading-7 mt-7 mb-6 text-green-500 "> Staff Asigned</h1>
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
        <FormularioColaborador />
        <div className='text-green-600 font-bold '>  {empresa.colaboradores?.length ? empresa.colaboradores?.map(colaborador => (
          <Colaborador
            key={colaborador._id}
            colaborador={colaborador}
          />

        )) : <p className='text-center my-5 p-10'>
          No staff assigned
        </p>}
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
              <h1 className="text-4xl font-semibold leading-7 text-gray-900 text-center"> Company Information</h1>
              <p className="mt-1 max-w-1xl text-2xl leading-6 text-gray-500 text-center">{nombre}</p>
            </div>
            <ModalFormularioStaff />
            <ModalEliminarCuenta />
            <ModalEliminarColaborador />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-gray-100 shadow-md  p-5 rounded-md">
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
                  onChange={e => setFechaEntrega(e.target.value)}
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
                  onChange={e => setContactname(e.target.value)}

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
                  onChange={e => setWhois(e.target.value)}
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
                  onChange={e => setContactnumber(e.target.value)}
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
                  onChange={e => setEmailcontact(e.target.value)}
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
                  onChange={e => setPayrollcontact(e.target.value)}
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
                  onChange={e => setEin(e.target.value)}
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
                  onChange={e => setSsn(e.target.value)}

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
                  onChange={e => setIncometax(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 border-b border-gray-900/10 pb-12">
          </div>
          <div className="mt-6 border-b border-gray-900/10 pb-12">
            <h2 className="font-semibold leading-7 text-gray-900  bg-gray-100 shadow-md rounded-md p-5 text-3xl ">Partners Information</h2>
            <div className="overflow-x-auto">
              <table className="mt-4 min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-1xl font-medium text-gray-500  tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500  tracking-wider text-1xl ">
                      Member
                    </th>
                    <th className="px-6 py-3 text-left  font-medium text-gray-500  tracking-wider text-1xl ">
                      %
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {empleados &&
                    empleados.map((empleado, index) => (
                      <tr key={index} className="text-sm text-gray-500">
                        <td className="px-6 py-4 whitespace-nowrap text-black text-1xl">{empleado.nombre}</td>
                        <td className="px-6 py-4 whitespace-nowrap   text-black text-1xl">{empleado.cargo}</td>
                        <td className="px-6 py-4 whitespace-nowrap  text-black text-1xl">{empleado.porcentaje}%</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 border-b border-gray-900/10 pb-12">
            <h2 className=" font-semibold leading-7 text-gray-900  bg-gray-100 shadow-md rounded-md p-5 text-3xl">Services</h2>

            <div className="overflow-x-auto">
              <table className="mt-4 min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-1xl font-medium text-gray-500  tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-1xl font-medium text-gray-500  tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="text-sm text-gray-500">
                    <td className="px-6 py-4 whitespace-nowrap">Accounting</td>
                    <td className="px-6 py-4 whitespace-nowrap">{empresa.accounting}</td>
                  </tr>
                  <tr className="text-sm text-gray-500">
                    <td className="px-6 py-4 whitespace-nowrap">Tax Planning</td>
                    <td className="px-6 py-4 whitespace-nowrap">{empresa.txplanning}</td>
                  </tr>
                  <tr className="text-sm text-gray-500">
                    <td className="px-6 py-4 whitespace-nowrap">Sale Tax</td>
                    <td className="px-6 py-4 whitespace-nowrap">{empresa.saletax}</td>
                  </tr>
                  <tr className="text-sm text-gray-500">
                    <td className="px-6 py-4 whitespace-nowrap">Payroll</td>
                    <td className="px-6 py-4 whitespace-nowrap">{empresa.payroll}</td>
                  </tr>
                  <tr className="text-sm text-gray-500">
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
