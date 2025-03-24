import Calendar from "react-calendar";
import { useEvents } from "./useEvents";
import { formatLocalDate } from "../../utils/helper";
import EventsCalendarSkeleton from "./EventsCalendarSkeleton";
import toast from "react-hot-toast";
import CalendarEventItem from "./CalendarEventItem";
import { useSelector } from "react-redux";

function EventsCalendar() {
  const { events, isLoading, error } = useEvents();
  const { selectedCategoryFilter, selectedStatusFilter } = useSelector(
    (store) => store.eventManagement,
  );

  function renderTileContent({ date, view }) {
    if (view !== "month") return null;

    const formattedDate = formatLocalDate(date);

    const eventsToRender = events?.filter((event) => {
      // Filter by date
      const matchesDate = event.date === formattedDate;

      // Filter by category
      const matchesCategory =
        selectedCategoryFilter !== "All"
          ? event.category.name === selectedCategoryFilter
          : true;

      // Filter by status
      const matchesStatus =
        selectedStatusFilter === "Completed"
          ? event.checked
          : selectedStatusFilter === "Missed"
            ? !event.checked
            : true;

      // Return only events that match all conditions
      return matchesDate && matchesCategory && matchesStatus;
    });

    if (eventsToRender?.length) {
      return <CalendarEventItem eventsToRender={eventsToRender} />;
    }

    return null;
  }

  if (isLoading) return <EventsCalendarSkeleton />;
  if (error) toast.error(error.message);
  return (
    <Calendar
      calendarType="islamic"
      className="events-calendar"
      tileContent={renderTileContent}
    />
  );
}

export default EventsCalendar;
