using System.Collections.Generic;

namespace Productive_ToDoList.Data
{
    public interface ITodoService
    {
        List<Todo> GetAllTodos();
        Todo GetTodoById(int id);
        void UpdateTodo(int id, Todo newTodo);
        void DeleteTodo(int id);
        Todo AddTodo(Todo newTodo);
    }
}