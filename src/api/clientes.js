export async function getClientes() {
  const url = import.meta.env.VITE_API_URL
  const response = await fetch(url)
  const result = await response.json()
  return result
}

export async function getCliente(id) {
  const url = `${import.meta.env.VITE_API_URL}/${id}`
  const response = await fetch(url)
  const result = await response.json()
  return result
}

export async function agregarCliente(datos) {
  const url = import.meta.env.VITE_API_URL
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await response.json()

  } catch (error) {
    console.log(error)
  }
}

export async function editarCliente(id, datos) {
  const url = `${import.meta.env.VITE_API_URL}/${id}`
  
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await response.json()

  } catch (error) {
    console.log(error)
  }
}

export async function eliminarCliente(id) {
  const url = `${import.meta.env.VITE_API_URL}/${id}`
  
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    })
    await response.json()

  } catch (error) {
    console.log(error)
  }
}
