import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputCheckbox from "../../ui/InputCheckbox";
import InputTextarea from "../../ui/InputTextarea";
import Button from "../../ui/Button";
import EventMap from "./EventMap";

function EventForm({ title, onCloseModal }) {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form>
        <div className="flex gap-12">
          <div className="grid min-w-52 grid-cols-1 gap-y-4">
            <InputField
              id="eventTitle"
              label="Event Title"
              placeholder="Enter event title"
              type="text"
            />
            <InputTextarea
              id="eventDescription"
              label="Description"
              placeholder="Enter event description"
              type="text"
            />
            <InputField
              id="eventDate"
              label="Date"
              placeholder="Select due date"
              type="date"
            />
            <InputField
              id="eventTime"
              label="Time"
              placeholder="Select due time"
              type="time"
            />
            <InputField
              id="eventLocation"
              label="Location"
              placeholder="Enter event title"
              type="text"
            />
            <InputSelect
              id="eventCategory"
              label="Category"
              options={["All", "Personal", "Work"]}
              labelType="normal"
            />
            <InputSelect
              id="eventRecurringFrequency"
              label="Recurring Frequency"
              options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
              labelType="normal"
            />
            <div className="mt-2 self-center">
              <InputCheckbox id="eventReminder" label="Turn on reminder" />
            </div>
          </div>
          <EventMap />
        </div>

        <div className="mt-8 flex justify-end gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="px-7"
            variation="secondary"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button type="submit" additionalStyles="px-7" variation="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
