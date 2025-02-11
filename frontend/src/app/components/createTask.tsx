"use client";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { TaskProps } from "./tableTask";

interface CreateTaskProps {
  setTasks: (tasks: TaskProps[]) => void;
  tasks: TaskProps[];
}

export function CreateTask({ tasks, setTasks }: CreateTaskProps) {
  async function createNewTask(e: FormData) {
    const task = e.get("task");
    console.log(task);
    if (!task) {
      toast.error("O campo não pode está vazio!");
      return;
    }
    try {
      const response = await api.post("/task", { title: task });
      setTasks([...tasks, response.data[0]]);
      toast.success("Tarefa criada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("error ao criar a tarefa");
    }
  }
  return (
    <form
      action={createNewTask}
      className="w-4/5 flex justify-center items-center gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="task" className="my-2 text-center">
          Insira uma nova tarefa
        </label>
        <input
          type="text"
          placeholder="tarefa..."
          className="w-80 h-10 rounded px-4"
          name="task"
        />
      </div>
      <button
        className="mt-auto h-10 bg-emerald-600 px-4 rounded text-white font-bold"
        type="submit"
      >
        Criar
      </button>
    </form>
  );
}
