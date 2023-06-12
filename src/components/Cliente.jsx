import { useNavigate, Form, redirect } from 'react-router-dom'
import { eliminarCliente } from '../api/clientes'

export async function action({ params }) {
  eliminarCliente(params.clienteId)
  return redirect('/')
}

export default function Cliente({ cliente }) {

  const { nombre, apellido, empresa, email, telefono, id } = cliente
  const navigate = useNavigate()

  return (
    <tr className="border-b">
      <td className="px-4 py-2 space-y-2">
        <p className="text-xl text-gray-800 font-extrabold">{nombre} {apellido}</p>
        <p className="text-gray-700 font-bold">Empresa: <span className="font-normal">{empresa}</span></p>
      </td>
      <td className="border px-4 py-2">
        <p className="text-gray-700 font-bold">Email: <span className="font-normal">{email}</span></p>
        <p className="text-gray-700 font-bold">Telefono: <span className="font-normal">{telefono}</span></p>
      </td>
      <td className="flex justify-end gap-3 border px-4 py-2">
        <button
          type="button"
          onClick={() => navigate(`/clientes/${id}/editar`)}
          className="flex justify-center items-center py-2 px-4 text-blue-700 hover:text-blue-900 text-xs uppercase font-bold cursor-pointer"
        >Editar</button>
        <Form 
          method="post" 
          action={`cliente/${id}/eliminar`}
          noValidate
          onSubmit={() => {
            if (!confirm('¿Estás seguro de eliminar este cliente?')) {
              e.preventDefault()
            }
          }}
        >
          <button
            type="submit"
            className="flex justify-center items-center py-2 px-4 text-red-700 hover:text-red-800 text-xs uppercase font-bold cursor-pointer"
          >Eliminar</button>
        </Form>
      </td>
    </tr>
  )
}
