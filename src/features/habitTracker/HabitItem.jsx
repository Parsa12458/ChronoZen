import Badge from "../../ui/Badge";
import InputCheckbox from "../../ui/InputCheckbox";
import Stat from "../../ui/Stat";
import Button from "../../ui/Button";
import HabitCalendar from "./HabitCalendar";

function HabitItem({ data }) {
  return (
    <div className="grid grid-cols-2 justify-center gap-x-4 rounded bg-lightGreen px-8 py-6">
      <div>
        <div className="flex items-start gap-2">
          <InputCheckbox />
          <div className="flex gap-1.5">
            <h3 className="text-sm font-semibold">{data.habitTitle}</h3>
            <Badge backgroundColor="#AD5973" variation="solid">
              {data.habitCategory}
            </Badge>
          </div>
        </div>
        <div className="mb-4 ml-7 text-xs">
          <p>
            Recurring Frequency:{" "}
            <span className="font-semibold capitalize">
              {data.habitRecurringFrequency}
            </span>
          </p>
          <p>
            Time:{" "}
            <span className="font-semibold capitalize">{data.habitTime}</span>
          </p>
        </div>
        <div className="mr-4">
          <Stat title="Streak" value={data.habitStreakDays} unit="days" />
        </div>
        <div className="mr-4 mt-7 flex items-center justify-center gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1"
            variation="red"
          >
            <img src="/icons/remove.svg" alt="remove icon" className="w-5" />
            <span>Remove</span>
          </Button>
          <Button
            type="button"
            additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1.5"
            variation="secondary"
          >
            <img src="/icons/edit.svg" alt="edit icon" className="w-3.5" />
            <span>Edit</span>
          </Button>
        </div>
      </div>
      <div className="w-[315px]">
        <HabitCalendar />
      </div>
    </div>
  );
}

export default HabitItem;
