namespace Productive_ToDoList.Data
{
    public interface IDayRatingService
    {
        DayRating GetDayRatingById(int id);
        void UpdateDayRating(int id, DayRating newDayRating);
        void DeleteDayRating(int id);
        DayRating AddDayRating(DayRating newDayRating);
    }
}