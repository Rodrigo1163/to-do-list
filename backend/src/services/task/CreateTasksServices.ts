import { ResultSetHeader } from "mysql2";
import connection from "../../connection/connection";

interface CreateTasksPros {
  title: string;
}

class CreateTasksServices {
  async execute({ title }: CreateTasksPros) {
    if (!title) throw new Error("O campo tarefa não pode estar vazio");
    const query = "INSERT INTO tasks (title) VALUES (?)";
    try {
      const result = await connection.query<ResultSetHeader>(query, [title]);
      const taskId = result[0].insertId;

      const query_task = "SELECT * FROM tasks WHERE id = ? LIMIT 1";
      const task = await connection.query(query_task, [taskId]);
      console.log(task[0]);
      return task[0];
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Erro ao inserir tarefa."
      );
    }
  }
}

export { CreateTasksServices };
