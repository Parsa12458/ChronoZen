import HabitItem from "./HabitItem";

const renderData = [
  {
    habitId: 1,
    habitTitle: "Do the morning routine",
    habitTime: "05:30 AM",
    habitCategory: "Personal",
    habitRecurringFrequency: "daily",
    habitReminder: true,
    habitStreakDays: 12,
  },
  {
    habitId: 2,
    habitTitle: "Get 8 hours of sleep",
    habitTime: "--:--",
    habitCategory: "Personal",
    habitRecurringFrequency: "daily",
    habitReminder: true,
    habitStreakDays: 4,
  },
];

function HabitsList() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-5">
      {renderData.map((habit) => (
        <HabitItem key={habit.habitId} data={habit} />
      ))}
    </div>
  );
}

export default HabitsList;
