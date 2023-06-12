
export default function Error({ children }) {
  return (
    <div className="text-center my-4 p-3 bg-red-200 border-l-8 border-red-500 text-gray-600 font-bold uppercase shadow rounded">
      {children}
    </div>
  )
}
