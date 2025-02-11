"use client";
import { useState } from "react";
import { api } from "../services/api";
import { Loading } from "./loading";
import toast from "react-hot-toast";
import classNames from "classnames";
export interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}
interface TableTaskProps {
  setTasks: (tasks: TaskProps[]) => void;
  tasks: TaskProps[];
  loading: boolean;
}

export function TableTask({ loading, setTasks, tasks }: TableTaskProps) {
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  async function deleteTask(id: number) {
    setLoadingDelete(true);
    try {
      const response = await api.delete(`/task/${id}`);
      toast.success(response.data);
      const tasksFiltered = tasks.filter((task) => task.id !== id);
      setTasks(tasksFiltered);
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoadingDelete(false);
    }
  }

  async function CompleteTask(id: number) {
    setLoadingUpdate(true);
    try {
      const response = await api.put(`/task/${id}`);
      toast.success(response.data);
      const updateTask = tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      );
      setTasks(updateTask);
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoadingUpdate(false);
    }
  }

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
                  <td colSpan={4} className="text-center p-4">
                    Nenhuma tarafa adicionada
                  </td>
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
                    <p
                      className={`block font-sans text-sm antialiased font-semibold leading-normal text-blue-gray-900 ${classNames(
                        task.completed ? "text-green-500 " : "text-red-500"
                      )}`}
                    >
                      {task.completed ? "concluída" : "Não concluída"}
                    </p>
                  </td>

                  <td className="p-4 border-b border-blue-gray-50 flex gap-2 flex-wrap">
                    <button
                      className="bg-red-600 rounded p-2 text-white hover:bg-red-500 transition-all disabled:bg-red-400 disabled:cursor-not-allowed"
                      onClick={() => deleteTask(task.id)}
                      disabled={loadingDelete}
                    >
                      Excluir
                    </button>
                    <button
                      className="bg-blue-600 rounded p-2 text-white hover:bg-blue-500 transition-all disabled:bg-blue-300 disabled:cursor-not-allowed"
                      onClick={() => CompleteTask(task.id)}
                      disabled={loadingUpdate || task.completed}
                    >
                      Concluir
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
