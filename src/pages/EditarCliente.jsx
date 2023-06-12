import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { getCliente, editarCliente } from '../api/clientes'

export async function loader({ params }) {

  const cliente = await getCliente(params.clienteId)

  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No hay resulados'
    })
  }
  return cliente
}

export async function action({ request, params }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  
  const errores = []
  const email = formData.get('email')
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  if (!regex.test(email)) {
    errores.push('El email no es válido')
  }

  if (Object.keys(errores).length) {
    return errores
  }

  // 
  await editarCliente(params.clienteId, datos)
  return redirect('/')
}

export default function EditarCliente() {

  const navigate = useNavigate()
  const cliente = useLoaderData()
  const errores = useActionData()

  return (
    <>
      <h1 className="text-2xl text-gray-800 font-light">Editar Cliente</h1>
      <p className="mt-3 font-light">Aquí podrás modificar los datos del cliente</p>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >Volver</button>
      </div>
      
      <div className="md:w-3/4 mx-auto px-8 pt-6 pb-8 py-10 bg-white rounded-xl shadow-lg">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post" noValidate>
          <Formulario cliente={cliente} />
          <div className="flex justify-end">
            <input
              type="submit"
              value="Editar Cliente"
              className="bg-blue-800 hover:bg-blue-900 rounded-lg mt-5 p-2 text-white uppercase font-bold cursor-pointer"
            />
          </div>
        </Form>
      </div>
    </>
  )
}
