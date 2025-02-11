import { TitlePage } from "./components/title";
import { Tasks } from "./components/tasks";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gray-200 pt-10">
      <div className="flex flex-col justify-center items-center w-full">
        <TitlePage title="Lista de tarefas" />
        <Tasks />
      </div>
    </div>
  );
}
