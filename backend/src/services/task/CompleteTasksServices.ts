import connection from "../../connection/connection";

interface CompleteTasksProps {
  id: string;
}
class CompleteTasksServices {
  async execute({ id }: CompleteTasksProps) {
    if (!id) throw new Error("O Id não pode ser vazio!");
    const query = "UPDATE tasks SET completed = true WHERE id = ?";
    try {
      await connection.query(query, [Number(id)]);
      return "Tarefa realizada com sucesso!";
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Erro ao completar a tarefa."
      );
    }
  }
}
export { CompleteTasksServices };
