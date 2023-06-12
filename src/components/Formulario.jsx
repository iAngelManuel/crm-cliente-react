
export default function Formulario({ cliente }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Nombre Cliente"
          defaultValue={cliente?.nombre}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Apellido</label>
        <input
          id="apellido"
          name="apellido"
          type="text"
          placeholder="Apellido Cliente"
          defaultValue={cliente?.apellido}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Empresa</label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          placeholder="Nombre Empresa"
          defaultValue={cliente?.empresa}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Correo Electronico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Cliente"
          defaultValue={cliente?.email}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Telefono</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="Telefono Cliente"
          defaultValue={cliente?.telefono}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Notas</label>
        <textarea
          id="notas"
          name="notas"
          placeholder="Agrega una nota aquí"
          cols="10"
          rows="10"
          defaultValue={cliente?.notas}
          className="resize-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        ></textarea>
      </div>
    </>
  )
}
