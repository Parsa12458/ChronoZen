import Button from "../../ui/Button";
import InputFilter from "../../ui/InputFilter";
import Modal from "../../ui/Modal";
import HabitForm from "./HabitForm";
import Dropdown from "../../ui/Dropdown";
import InputField from "../../ui/InputField";
import ColorPicker from "../../ui/ColorPicker";
import { useHabitsCategories } from "./useHabitsCategories";
import WideInputSelect from "../../ui/WideInputSelect";
import toast from "react-hot-toast";

function HabitsControls() {
  const {
    habitsCategories = [],
    isLoading: isLoadingCategory,
    error,
  } = useHabitsCategories();

  if (error) toast.error(error.message);

  return (
    <div className="mt-8 flex gap-3">
      <Modal>
        <Modal.Open opens="addHabit">
          <Button variation="primary" additionalStyles="px-4 text-sm">
            <img
              src="/icons/add-white.svg"
              alt="add icon"
              className="mr-1.5 w-5"
            />
            <span>Add Habit</span>
          </Button>
        </Modal.Open>
        <Modal.Window name="addHabit">
          <HabitForm title="Add Habit" habitOperation="add" />
        </Modal.Window>
      </Modal>

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
            <form className="flex !cursor-default flex-col items-start justify-center">
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

      <WideInputSelect
        label="category"
        id="category"
        disabled={isLoadingCategory}
      >
        {isLoadingCategory ? (
          <WideInputSelect.Option value={"Loading..."}>
            Loading...
          </WideInputSelect.Option>
        ) : (
          habitsCategories.map((category) => (
            <WideInputSelect.Option
              key={category.id}
              value={category.name}
              className="flex items-center justify-between gap-1"
            >
              <span>{category.name}</span>
            </WideInputSelect.Option>
          ))
        )}
      </WideInputSelect>
      <InputFilter
        label="Recurring Frequency"
        id="recurringFrequency"
        options={["Daily", "Weekly", "Monthly"]}
      />
      <InputFilter
        label="status"
        id="status"
        options={["Completed", "Missed"]}
      />
    </div>
  );
}

export default HabitsControls;
