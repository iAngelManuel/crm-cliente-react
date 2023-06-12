/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente'
import { getClientes } from '../api/clientes'

export function loader() {
  const clientes = getClientes()
  return clientes
}

export default function Index() {

  const data = useLoaderData()
  
  return (
    <>
      <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>
      <p className="mt-3 font-light">Administra tus Clientes</p>

      {data.length ? 
      (
        <table className="w-full bg-white shadow-lg mt-5 table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/5 py-2">Cliente</th>
              <th className="w-1/5 py-2">Contacto</th>
              <th className="w-1/5 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map(cliente => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : 
      (
        <p className="mt-5 text-center text-2xl">No hay clientes, comienza creando uno</p>
      )}
    </>
  )
}
