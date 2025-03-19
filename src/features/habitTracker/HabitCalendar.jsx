import Calendar from "react-calendar";
import { formatLocalDate } from "../../utils/helper";

function HabitCalendar({ checkedDates }) {
  function renderTileContent({ date, view }) {
    if (view === "month") {
      const formattedDate = formatLocalDate(date);
      if (checkedDates.includes(formattedDate)) {
        return (
          <img
            src="/icons/tick-mark.svg"
            alt="tick mark"
            className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full bg-primary p-0.5"
          />
        );
      }
    }
    return null;
  }

  return (
    <Calendar
      calendarType="islamic"
      className="habit-calendar"
      tileContent={renderTileContent}
    />
  );
}

export default HabitCalendar;
