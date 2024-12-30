import Button from "../../ui/Button";
import InputSelect from "../../ui/InputSelect";
import InputFilter from "../../ui/InputFilter";
import Modal from "../../ui/Modal";
import Dropdown from "../../ui/Dropdown";
import InputField from "../../ui/InputField";
import ColorPicker from "../../ui/ColorPicker";
import EventForm from "./EventForm";

function EventsControls() {
  return (
    <div className="mt-8 flex gap-3">
      <Button
        variation="primary"
        additionalStyles="px-4 text-sm"
        onClick={() => document.getElementById("addTask").showModal()}
      >
        <img src="/icons/add-white.svg" alt="add icon" className="mr-1.5 w-5" />
        <span>Add Event</span>
      </Button>
      <Modal
        id="addTask"
        content={<EventForm title="Add Event" />}
        width="full"
        maxWidth="4xl"
      />

      <Dropdown
        button={
          <Button
            variation="secondary"
            additionalStyles="px-4 text-sm text-darkGreen h-full"
          >
            <img
              src="/icons/add-darkgreen.svg"
              alt="add icon"
              className="mr-1.5 w-5"
            />
            <span>Add Category</span>
          </Button>
        }
        content={
          <li>
            <form className="flex flex-col items-start justify-center">
              <div className="flex gap-2">
                <InputField placeholder="Enter Category" />
                <Button
                  type="submit"
                  additionalStyles="px-4 h-[34px]"
                  variation="primary"
                >
                  Add
                </Button>
              </div>
              <ColorPicker />
            </form>
          </li>
        }
      />

      <InputSelect
        label="category"
        id="category"
        options={["All Categories", "Work", "Personal"]}
      />
      <InputFilter
        label="calendar view"
        id="calendarView"
        options={["Weekly", "Monthly", "Yearly"]}
      />
      <InputFilter
        label="status"
        id="status"
        options={["Completed", "Missed"]}
      />
    </div>
  );
}

export default EventsControls;
