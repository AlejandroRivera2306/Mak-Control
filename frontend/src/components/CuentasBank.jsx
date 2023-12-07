import React from 'react';
import useEmpresas from '../hooks/useEmpresas';
import useUsuarios from '../hooks/useUsuarios';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const CuentasBank = ({ tarea }) => {
  const { auth } = useAuth()
  const admin = useAdmin();
  const nombreRol = auth.rol.nombre;
  const {
    handleModalEditarCuenta,
    handleModalEditarActividad,
    handleModalEditarActividadAvanzado,
    hadleModalEliminarCuenta,
    completarTarea
  } = useEmpresas();
  const {
    descripcion,
    nombre,
    prioridad,
    infobank,
    estado,
    fechaEntrega,
    tipodecierre,
    _id
  } = tarea;
  const showFechaEntrega = !!fechaEntrega;
  const isCompleted = estado;

  return (
    <div className="w-full mx-auto mt-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-gray-400">Bank Name</th>
              <th className="px-4 py-2 text-gray-400">Account Number</th>
              <th className="px-4 py-2 text-gray-400">Type Account</th>
              <th className="px-4 py-2 text-gray-400">Type Closing</th>
              <th className="px-4 py-2 text-gray-400">Bank Information</th>
              <th className="px-4 py-2 text-gray-400">Download Info</th>
              <th className="px-4 py-2 text-gray-400">Reconciliador</th>
              <th className="px-4 py-2 text-gray-400">Analyst</th>
              <th className="px-4 py-2 text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-center ">{nombre}</td>
              <td className="border px-4 py-2 text-center">{descripcion}</td>
              <td className="border px-4 py-2 text-center">{prioridad}</td>
              <td className="border px-4 py-2 text-center">{tipodecierre || (showFechaEntrega && fechaEntrega)}</td>
              <td className="border px-4 py-2 text-center">{infobank}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-sky-500 px-4 py-2 text-white font-bold rounded-lg"
                  onClick={!(nombreRol === 'Administrator' || nombreRol === 'Baja Informacion') ? () => handleModalEditarActividad(tarea) : null}
                >
                  ...
                </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-sky-500 px-4 py-2 text-white font-bold rounded-lg"
                  onClick={!(nombreRol === 'Administrator' || nombreRol === 'Reconciliador') ? () => handleModalEditarActividad(tarea) : null}
                >
                  ...
                </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-sky-500 px-4 py-2 text-white font-bold rounded-lg"
                  onClick={!(nombreRol === 'Administrator' || nombreRol === 'Analista') ? () => handleModalEditarActividadAvanzado(tarea) : null}
                >
                  ...
                </button>
              </td>
              <td className="border px-4 py-2 flex space-x-2 ">
                {admin && (
                  <button
                    className="bg-indigo-600 px-4 py-2 text-white font-bold rounded-lg"
                    onClick={() => handleModalEditarCuenta(tarea)}
                  >
                    Update
                  </button>
                )}
                <button
                  className={`${isCompleted ? 'bg-green-600' : 'bg-orange-500'} px-4 py-2 text-white font-bold rounded-lg`}
                  onClick={() => completarTarea(_id)}
                >
                  {isCompleted ? 'Complete' : 'Done'}
                </button>
                {admin && (
                  <button
                    className="bg-red-500 px-4 py-2 text-white font-bold rounded-lg"
                    onClick={() => hadleModalEliminarCuenta(tarea)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
            {estado && (
              <tr>
                <td className="border px-4 py-2" colSpan="5">
                  Status: Complete - {tarea.completado.nombre}
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default CuentasBank;
