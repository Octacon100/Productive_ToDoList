using Productive_ToDoList.Data;
using Microsoft.AspNetCore.Mvc;

namespace Productive_ToDoList.Controllers
{
    [Route("api/[Controller]")]
    public class TodoController : Controller
    {
        private ITodoService _service;

        public TodoController(ITodoService service)
        {
            _service = service;
        }

        //Create/add a new todo
        [HttpPost("AddTodo")]
        public IActionResult AddTodo([FromBody] Todo todo)
        {
            var newTodo = _service.AddTodo(todo);
            return Ok(newTodo);
        }

        //Read all todos
        [HttpGet("[action]")]
        public IActionResult GetTodos(){
            var allTodos = _service.GetAllTodos();
            return Ok(allTodos);
        }

        //Delete a todo
        [HttpDelete("DeleteTodo/{id}")]
        public IActionResult DeleteTodo(int id)
        {
            _service.DeleteTodo(id);
            return Ok();
        }

        //Get a todo
        [HttpGet("SingleTodo/{id}")]
        public IActionResult GetTodoById(int id)
        {
            var todo = _service.GetTodoById(id);
            return Ok(todo);
        }

        [HttpPut("UpdateTodo/{id}")]
        public IActionResult UpdateTodo(int id, [FromBody]Todo todo)
        {
            _service.UpdateTodo(id, todo);
            return Ok(todo);
        }
    }
}