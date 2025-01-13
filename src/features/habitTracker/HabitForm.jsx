import Button from "../../ui/Button";
import InputCheckbox from "../../ui/InputCheckbox";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";

function HabitForm({ title, onCloseModal }) {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form className="grid grid-cols-2 items-start gap-x-10 gap-y-4">
        <InputField
          id="habitTitle"
          label="Habit Title"
          placeholder="Enter habit title"
          type="text"
        />
        <InputSelect
          id="habitRecurringFrequency"
          label="Recurring Frequency"
          options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
          labelType="normal"
        />
        <InputSelect
          id="habitCategory"
          label="Category"
          options={["All", "Personal", "Work"]}
          labelType="normal"
        />
        <InputField
          id="habitTime"
          label="Time"
          placeholder="Select due time"
          type="time"
        />

        <div className="mt-4 self-center">
          <InputCheckbox id="habitReminder" label="Turn on reminder" />
        </div>

        <div className="col-span-2 mt-7 flex justify-end gap-3 text-sm">
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

export default HabitForm;
