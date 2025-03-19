import toast from "react-hot-toast";
import HabitItem from "./HabitItem";
import HabitSkeleton from "./HabitSkeleton";
import { useHabits } from "./useHabits";
import { useSelector } from "react-redux";
import { isTodayChecked } from "../../utils/helper";

function HabitsList() {
  const { habits, isLoading, error } = useHabits();
  const {
    selectedCategoryFilter,
    selectedRecurringFrequencyFilter,
    selectedStatusFilter,
  } = useSelector((store) => store.habitTracker);
  const filteredHabits = habits
    ?.filter((habit) =>
      selectedCategoryFilter !== "All"
        ? habit.category.name === selectedCategoryFilter
        : true,
    )
    ?.filter((habit) => {
      if (selectedRecurringFrequencyFilter === "Daily")
        return habit.recurringFrequency === "daily";
      if (selectedRecurringFrequencyFilter === "Weekly")
        return habit.recurringFrequency === "weekly";
      if (selectedRecurringFrequencyFilter === "Monthly")
        return habit.recurringFrequency === "monthly";
      if (selectedRecurringFrequencyFilter === "Yearly")
        return habit.recurringFrequency === "yearly";
      else return true;
    })
    ?.filter((habit) => {
      if (selectedStatusFilter === "Completed")
        return isTodayChecked(habit.checkedDates);
      if (selectedStatusFilter === "Uncompleted")
        return !isTodayChecked(habit.checkedDates);
      else return true;
    });

  const sortedHabits = filteredHabits?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (error) toast.error(error.message);

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-5">
      {isLoading ? (
        <HabitSkeleton />
      ) : sortedHabits.length !== 0 ? (
        sortedHabits?.map((habit) => <HabitItem key={habit.id} habit={habit} />)
      ) : (
        <div className="mt-10 text-3xl font-bold text-darkGreen">
          No habits!
        </div>
      )}
    </div>
  );
}

export default HabitsList;
