"use client";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Loading } from "./loading";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

export function ColumnTask() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [loading, setLoading] = useState(true);
  async function fetchTask() {
    setLoading(true);
    try {
      const response = await api.get("/task");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchTask();
  }, []);
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
                Status
              </p>
            </th>
            <th className="p-4 text-white">
              <p className="block font-sans text-sm font-bold leading-none">
                Ações
              </p>
            </th>
          </tr>
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan={4}>
                <Loading />
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            {tasks.length === 0 && (
              <tbody>
                <tr>
                  <td>Nenhuma tarafa adicionada</td>
                </tr>
              </tbody>
            )}
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {task.title}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {new Date(task.created_at).toLocaleDateString("pt-br")}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {task.completed ? "Realizada" : "Não relizada"}
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
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}
