import Dropdown from "../../ui/Dropdown";
import InputCheckbox from "../../ui/InputCheckbox";
import Badge from "../../ui/Badge";
import EventForm from "./EventForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useCheckEvent } from "./useCheckEvent";
import { useDeleteEvent } from "./useDeleteEvent";
import { formatDate, formatTime, hexToRgba } from "../../utils/helper";

function CalendarEventItem({ eventsToRender }) {
  const { checkEvent, isLoading: isChecking } = useCheckEvent();
  const { deleteEvent, isLoading: isDeleting } = useDeleteEvent();

  return (
    <div className="flex w-full flex-col gap-1">
      {eventsToRender.map((event) => (
        <Dropdown
          key={event.id}
          button={
            <div
              style={{
                backgroundColor: hexToRgba(event.category.bgColor, 0.3),
                borderColor: event.category.bgColor,
              }}
              className={`event-btn rounded border-2 p-0.5 text-left text-xs ${event.checked ? "line-through" : ""}`}
            >
              {event.title}
            </div>
          }
          content={
            <div className="min-w-80 max-w-sm !cursor-auto p-3.5 text-black">
              <div className="flex items-center gap-2">
                {!isChecking ? (
                  <InputCheckbox
                    id={event.id}
                    checked={event.checked}
                    onChange={() => {
                      checkEvent({ ...event, checked: !event.checked });
                    }}
                  />
                ) : (
                  <span className="loading loading-spinner loading-sm bg-primary"></span>
                )}
                <div className="space-x-1.5">
                  <span className={event.checked ? "line-through" : ""}>
                    {event.title}
                  </span>
                  <Badge
                    variation="solid"
                    backgroundColor={event.category.bgColor}
                    additionalStyles="translate-y-[-1px]"
                  >
                    {event.category.name}
                  </Badge>
                </div>
              </div>

              <div className="ml-7 mt-2 space-y-1 text-left text-xs">
                <p>
                  <span className="font-bold">Description:</span>{" "}
                  {event.description ? event.description : "-"}
                </p>
                <p>
                  <span className="font-bold">Date:</span>{" "}
                  {event.date ? formatDate(event.date) : "-"}
                </p>
                <p>
                  <span className="font-bold">Time:</span>{" "}
                  {event.time ? formatTime(event.time) : "-"}
                </p>
                <p>
                  <span className="font-bold">Location:</span>{" "}
                  {event.location ? event.location : "-"}
                </p>
                <p className="capitalize">
                  <span className="font-bold">Recurring Frequency:</span>{" "}
                  {event.recurringFrequency ? event.recurringFrequency : "-"}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs">
                <Button
                  type="button"
                  additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1"
                  variation="red"
                  onClick={() => deleteEvent(event.id)}
                  disabled={isDeleting}
                >
                  <img
                    src="/icons/remove.svg"
                    alt="remove icon"
                    className="w-5"
                  />
                  <span>Remove</span>
                </Button>
                <Modal>
                  <Modal.Open opens={`Edit:${event.id}`}>
                    <Button
                      type="button"
                      additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1.5"
                      variation="secondary"
                    >
                      <img
                        src="/icons/edit.svg"
                        alt="edit icon"
                        className="w-3.5"
                      />
                      <span>Edit</span>
                    </Button>
                  </Modal.Open>
                  <Modal.Window name={`Edit:${event.id}`}>
                    <EventForm
                      title={`Edit ${event.title}`}
                      event={event}
                      eventOperation="edit"
                    />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
          }
          placement="top-start"
          crossAxisOffset={70}
        />
      ))}
    </div>
  );
}

export default CalendarEventItem;
