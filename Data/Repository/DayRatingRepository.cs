using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using Dapper;

namespace Productive_ToDoList.Data
{
    class DayRatingRepository : IDayRatingRepository
    {
        private string _connString;

        public DayRatingRepository(IConfiguration configuration)
        {
            _connString = configuration["ConnectionStrings:myDbConnection"];
        }
        public DayRating AddDayRating(DayRating newDayRating)
        {
            //string connString = Startup.connectionString;
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string insertQuery = @"INSERT INTO [dbo].[DayRating]([Date], [DayRating], DayDetails, DayNotes) 
                OUTPUT Inserted.id 
                VALUES (@Date, @DayRating, @DayDetails, @DayNotes)";

                var result = db.QueryFirst(insertQuery, new
                {
                    newDayRating.Date,
                    newDayRating.DayRatingNum,
                    newDayRating.DayDetails,
                    newDayRating.DayNotes
                });
                newDayRating.Id = int.Parse(result.id.ToString());
            }
            return newDayRating;
        }

        public void DeleteDayRating(int id)
        {
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string deleteQuery = @"DELETE FROM [dbo].[DayRating] where id = @id";

                var result = db.Execute(deleteQuery, new {id});
            }
        }

        public DayRating GetDayRatingById(int id)
        {
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string selectQuery = @"SELECT * FROM [dbo].[DayRating] where id = @Id;";

                DayRating result = db.QuerySingle<DayRating>(selectQuery, new {Id = id});
                return result;
            }
        }

        public void UpdateDayRating(int id, DayRating newDayRating)
        {
            using (IDbConnection db = new SqlConnection(_connString))
            {
                string updateQuery = @"Update [dbo].[DayRating] 
                    set [Date] = @Date, 
                    [DayRating] = @DayRating, 
                    DayDetails=@DayDetails,
                    DayNotes=@DayNotes
                    where id = @id";

                var result = db.Execute(updateQuery, new
                {
                    newDayRating.Date,
                    newDayRating.DayRatingNum,
                    newDayRating.DayDetails,
                    newDayRating.DayNotes,
                    newDayRating,id
                });
            }
        }
    }
}