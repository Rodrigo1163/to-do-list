import { ColumnTask } from "./components/columnTask";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gray-200 pt-10">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-4/5 bg-white rounded-md mx-auto py-4">
          <h1 className="text-center text-3xl font-bold">Lista de tarefas</h1>
        </div>
        <ColumnTask />
      </div>
    </div>
  );
}
