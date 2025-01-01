import EventsCalendar from "../features/eventManagement/EventsCalendar";
import EventsControls from "../features/eventManagement/EventsControls";

function EventsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Event Management</h1>
      <EventsControls />
      <div className="mt-8">
        <EventsCalendar />
      </div>
    </div>
  );
}

export default EventsPage;
