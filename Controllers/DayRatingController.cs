using Productive_ToDoList.Data;
using Microsoft.AspNetCore.Mvc;

namespace Productive_ToDoList.Controllers
{
    [Route("api/[Controller]")]
    public class DayRatingController : Controller
    {
        private IDayRatingService _service;

        public DayRatingController(IDayRatingService service)
        {
            _service = service;
        }

        //Create/add a new Day Rating
        [HttpPost("AddDayRating")]
        public IActionResult AddDayRating([FromBody] DayRating dayRating)
        {
            var newDayRating = _service.AddDayRating(dayRating);
            return Ok(newDayRating);
        }

        //Delete a day rating
        [HttpDelete("DeleteDayRating/{id}")]
        public IActionResult DeleteDayRating(int id)
        {
            _service.DeleteDayRating(id);
            return Ok();
        }

        //Get a day rating
        [HttpGet("SingleDayRating/{id}")]
        public IActionResult GetDayRatingById(int id)
        {
            var todo = _service.GetDayRatingById(id);
            return Ok(todo);
        }

        [HttpPut("UpdateDayRating/{id}")]
        public IActionResult UpdateDayRating(int id, [FromBody]DayRating dayRating)
        {
            _service.UpdateDayRating(id, dayRating);
            return Ok(dayRating);
        }
    }
}