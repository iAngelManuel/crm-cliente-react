import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Cliente'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente'
import Index, { loader as clientesLoader } from './pages/Index'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader,
                errorElement: <ErrorPage />
            },
            {
                path: "/clientes/nuevo",
                element: <NuevoCliente />,
                action: nuevoClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: "/clientes/:clienteId/editar",
                element: <EditarCliente />,
                loader: editarClienteLoader,
                action: editarClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: "cliente/:clienteId/eliminar",
                action: eliminarClienteAction
            }
        ]
    }
])

export default router