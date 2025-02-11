"use client";
import { useEffect, useState } from "react";
import { CreateTask } from "./createTask";
import { TableTask, TaskProps } from "./tableTask";
import { api } from "../services/api";
export function Tasks() {
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
    <>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <TableTask tasks={tasks} loading={loading} setTasks={setTasks} />
    </>
  );
}
