using System.Collections.Generic;

namespace Productive_ToDoList.Data
{
    public class TodoService : ITodoService
    {
        private readonly ITodoRepository _todoRepo;

        public TodoService(ITodoRepository todoRepo)
        {
            _todoRepo = todoRepo;
        }

        public Todo AddTodo(Todo newTodo)
        {
            return _todoRepo.AddTodo(newTodo);
        }

        public void DeleteTodo(int id)
        {
            _todoRepo.DeleteTodo(id);
        }

        public List<Todo> GetAllTodos()
        {
            return _todoRepo.GetAllTodos();
        }

        public Todo GetTodoById(int id)
        {
            return _todoRepo.GetTodoById(id);
        }

        public void UpdateTodo(int id, Todo newTodo)
        {
            _todoRepo.UpdateTodo(id, newTodo);
        }
    }
}