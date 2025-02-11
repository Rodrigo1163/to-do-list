import connection from "../../connection/connection";

interface CreateTasksPros {
  title: string;
}

class CreateTasksServices {
  async execute({ title }: CreateTasksPros) {
    if (!title) throw new Error("O campo tarefa não pode estar vazio");
    const query = "INSERT INTO tasks (title) VALUES (?)";
    try {
      await connection.query(query, [title]);
      return "Tarefa inserida com sucesso!";
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Erro ao inserir tarefa."
      );
    }
  }
}

export { CreateTasksServices };
