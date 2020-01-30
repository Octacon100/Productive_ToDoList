
using System;

namespace Productive_ToDoList.Data
{
    public class DayRating
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public int DayRatingNum { get; set; }

        public string DayDetails { get; set; }

        public string DayNotes { get; set; }
    }
}