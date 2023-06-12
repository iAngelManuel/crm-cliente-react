import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {

  const location = useLocation()
  
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-gray-800 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
        <nav className="mt-10">
          <Link className={`${location.pathname === '/' ? "font-bold text-white underline" : "font-normal"} block p-2 text-gray-200 font-bold hover:bg-gray-900`} to="/">Clientes</Link>
          <Link className={`${location.pathname === '/clientes/nuevo' ? "font-bold text-white underline" : "font-normal"} block p-2 text-gray-200 font-bold hover:bg-gray-900`} to="/clientes/nuevo">Nuevo Cliente</Link>
        </nav>
      </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet />
        </main>
    </div>
  )
}
