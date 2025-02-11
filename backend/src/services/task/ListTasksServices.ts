import connection from "../../connection/connection";

class ListTasksServices {
  async execute() {
    const query =
      "SELECT id, title, completed, created_at FROM tasks ORDER BY created_at ASC";
    try {
      const result = await connection.query(query);
      return result[0];
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Erro ao buscar a tarefa."
      );
    }
  }
}

export { ListTasksServices };
