export function ColumnTask() {
  return (
    <div className="w-4/5 relative mt-10 flex flex-col h-full overflow-hidden bg-white shadow-md rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr className="bg-slate-500 text-while">
            <th className="p-4 text-white">
              <p className="block font-sans text-sm font-bold leading-none">
                Tarefa
              </p>
            </th>
            <th className="p-4 text-white">
              <p className="block font-sans text-sm font-bold leading-none">
                Data
              </p>
            </th>
            <th className="p-4 text-white">
              <p className="block font-sans text-sm font-bold leading-none">
                Ações
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Coxilar
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                11/02/2025
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50 space-x-2">
              <button className="bg-red-600 rounded p-2 text-white hover:bg-red-500 transition-all">
                Excluir
              </button>
              <button className="bg-blue-600 rounded p-2 text-white hover:bg-blue-500 transition-all">
                Editar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
