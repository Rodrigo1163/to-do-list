import connection from "../../connection/connection";

interface DeleteTasksProps {
  id: string;
}
class DeleteTasksServices {
  async execute({ id }: DeleteTasksProps) {
    if (!id) throw new Error("O Id não pode ser vazio!");
    const query = "DELETE FROM tasks WHERE id = ?";
    try {
      await connection.query(query, [Number(id)]);
      return "Tarefa deletada com sucesso!";
    } catch (error) {}
  }
}

export { DeleteTasksServices };
