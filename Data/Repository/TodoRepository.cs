using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace Productive_ToDoList.Data
{
    public class TodoRepository : ITodoRepository
    {
        private string _connString;

        public TodoRepository(IConfiguration configuration)
        {
            _connString = configuration["ConnectionStrings:myDbConnection"];
        }

        public Todo AddTodo(Todo newTodo)
        {
            //string connString = Startup.connectionString;
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string insertQuery = @"INSERT INTO [dbo].[Todo]([Title], [NumberOfPomerdoros], complete) OUTPUT Inserted.id VALUES (@Title, @NumberOfPomerdoros, @complete)";

                var result = db.QueryFirst(insertQuery, new
                {
                    newTodo.title,
                    newTodo.numberOfPomerdoros,
                    newTodo.complete
                });
                newTodo.Id = int.Parse(result.id.ToString());
            }
            return newTodo;
        }

        public void DeleteTodo(int id)
        {
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string deleteQuery = @"DELETE FROM [dbo].[Todo] where id = @id";

                var result = db.Execute(deleteQuery, new {id});
            }
        }

        public List<Todo> GetAllTodos()
        {
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string selectQuery = @"SELECT * FROM [dbo].[Todo]";

                List<Todo> result = db.Query<Todo>(selectQuery).AsList();
                return result;
            }
        }

        public Todo GetTodoById(int id)
        {
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string selectQuery = @"SELECT * FROM [dbo].[Todo] where id = @Id;";

                Todo result = db.QuerySingle<Todo>(selectQuery, new {Id = id});
                return result;
            }
            
        }

        public void UpdateTodo(int id, Todo newTodo)
        {
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string updateQuery = @"Update [dbo].[Todo] set [Title] = @Title, [NumberOfPomerdoros] = @NumberOfPomerdoros, complete=@complete where id = @id";

                var result = db.Execute(updateQuery, new
                {
                    newTodo.title,
                    newTodo.numberOfPomerdoros,
                    newTodo.complete,
                    newTodo.Id
                });
            }
        }

    }
}