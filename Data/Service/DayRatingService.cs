namespace Productive_ToDoList.Data
{
    public class DayRatingService : IDayRatingService
    {
        private readonly IDayRatingRepository _dayRatingRepo;

        public DayRatingService(IDayRatingRepository dayRatingRepo)
        {
            _dayRatingRepo = dayRatingRepo;
        }
        public DayRating AddDayRating(DayRating newDayRating)
        {
            return _dayRatingRepo.AddDayRating(newDayRating);
        }

        public void DeleteDayRating(int id)
        {
            _dayRatingRepo.DeleteDayRating(id);
        }

        public DayRating GetDayRatingById(int id)
        {
            return _dayRatingRepo.GetDayRatingById(id);
        }

        public void UpdateDayRating(int id, DayRating newDayRating)
        {
            _dayRatingRepo.UpdateDayRating(id, newDayRating);
        }
    }
}