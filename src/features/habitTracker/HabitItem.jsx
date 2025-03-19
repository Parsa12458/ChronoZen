import Badge from "../../ui/Badge";
import InputCheckbox from "../../ui/InputCheckbox";
import Stat from "../../ui/Stat";
import Button from "../../ui/Button";
import HabitCalendar from "./HabitCalendar";
import {
  calculateStreak,
  formatTime,
  isTodayChecked as isTodayCheckedFn,
} from "../../utils/helper";
import { useCheckHabit } from "./useCheckHabit";
import { useDeleteHabit } from "./useDeleteHabit";
import Modal from "../../ui/Modal";
import HabitForm from "./HabitForm";

function HabitItem({ habit }) {
  const { checkHabit, isLoading: isChecking } = useCheckHabit();
  const { deleteHabit, isLoading: isDeleting } = useDeleteHabit();

  const isTodayChecked = isTodayCheckedFn(habit.checkedDates);

  return (
    <div className="grid grid-cols-2 justify-center gap-x-4 rounded bg-lightGreen px-8 py-6">
      <div>
        <div className="flex items-start gap-2">
          {!isChecking ? (
            <InputCheckbox
              id={habit.id}
              checked={isTodayChecked}
              onChange={() => {
                const today = new Date();
                const todayDateString = today.toISOString().split("T")[0];
                let updatedCheckedDates;

                if (isTodayChecked) {
                  // Remove today from checkedDates
                  updatedCheckedDates = habit.checkedDates.filter(
                    (date) => date !== todayDateString,
                  );
                } else {
                  // Add today to checkedDates
                  updatedCheckedDates = [
                    ...habit.checkedDates,
                    todayDateString,
                  ];
                }

                // Call mutation with updated habit
                checkHabit({ ...habit, checkedDates: updatedCheckedDates });
              }}
            />
          ) : (
            <span className="loading loading-spinner loading-sm bg-primary"></span>
          )}
          <div className="flex gap-1.5">
            <h3
              className={`text-sm font-semibold ${isTodayChecked ? "line-through" : ""}`}
            >
              {habit.title}
            </h3>
            <Badge backgroundColor={habit.category.bgColor} variation="solid">
              {habit.category.name}
            </Badge>
          </div>
        </div>
        <div className="mb-4 ml-7 text-xs">
          <p>
            Recurring Frequency:{" "}
            <span className="font-semibold capitalize">
              {habit.recurringFrequency || "Unset"}
            </span>
          </p>
          <p>
            Time:{" "}
            <span className="font-semibold capitalize">
              {habit.time ? formatTime(habit.time) : "Unset"}
            </span>
          </p>
        </div>
        <div className="mr-4">
          <Stat
            title="Streak"
            value={calculateStreak(habit.checkedDates)}
            unit="days"
          />
        </div>
        <div className="mr-4 mt-7 flex items-center justify-center gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1"
            variation="red"
            onClick={() => deleteHabit(habit.id)}
            disabled={isDeleting}
          >
            <img src="/icons/remove.svg" alt="remove icon" className="w-5" />
            <span>Remove</span>
          </Button>
          <Modal>
            <Modal.Open opens={`Edit:${habit.id}`}>
              <Button
                type="button"
                additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1.5"
                variation="secondary"
              >
                <img src="/icons/edit.svg" alt="edit icon" className="w-3.5" />
                <span>Edit</span>
              </Button>
            </Modal.Open>
            <Modal.Window name={`Edit:${habit.id}`}>
              <HabitForm
                title={`Edit ${habit.title}`}
                habit={habit}
                habitOperation="edit"
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="w-[315px]">
        <HabitCalendar
          checkedDates={habit.checkedDates}
          createdAt={habit.createdAt}
        />
      </div>
    </div>
  );
}

export default HabitItem;
