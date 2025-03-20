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
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setCategoryColor,
  setSelectedCategoryFilter,
  setSelectedStatusFilter,
} from "./habitTrackerSlice";
import { useAddHabitsCategory } from "./useAddHabitsCategory";
import { useDeleteHabitsCategory } from "./useDeleteHabitsCategory";

function HabitsControls() {
  const {
    habitsCategories = [],
    isLoading: isLoadingCategory,
    error,
  } = useHabitsCategories();

  const { addHabitsCategory, isLoading: isAddingCategory } =
    useAddHabitsCategory();
  const { deleteHabitsCategory, isLoading: isDeletingCategory } =
    useDeleteHabitsCategory();
  const { register, handleSubmit, reset } = useForm();
  const { categoryColor, selectedCategoryFilter, selectedStatusFilter } =
    useSelector((store) => store.habitTracker);
  const dispatch = useDispatch();

  function onSubmit(data) {
    reset();
    const newData = { ...data, bgColor: categoryColor };
    addHabitsCategory(newData);
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

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
            <form
              className="flex !cursor-default flex-col items-start justify-center"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div className="flex gap-2">
                <InputField
                  placeholder="Enter Category"
                  register={register}
                  validationRules={{
                    required: "Enter category name",
                    validate: (value) => {
                      const isInvalid = habitsCategories.some(
                        (category) => category.name === value,
                      );
                      return (
                        !isInvalid ||
                        "Invalid selection. Please choose a different category."
                      );
                    },
                  }}
                  id="name"
                  disabled={isLoadingCategory}
                />
                <Button
                  type="submit"
                  additionalStyles="px-4 h-[34px]"
                  variation="primary"
                  isLoading={isAddingCategory}
                >
                  Add
                </Button>
              </div>
              <ColorPicker
                onColorChange={(hex) => dispatch(setCategoryColor(hex))}
              />
            </form>
          </li>
        }
      />

      <WideInputSelect
        label="category"
        id="category"
        disabled={isLoadingCategory}
        onSelectChange={(value) => dispatch(setSelectedCategoryFilter(value))}
        defaultValue={selectedCategoryFilter}
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
              {category.name !== "All" && (
                <button
                  className={`shrink-0 ${isDeletingCategory ? "cursor-not-allowed opacity-50" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteHabitsCategory(category.id);

                    const deletedCategory = habitsCategories.find(
                      (c) => c.id === category.id,
                    );
                    if (
                      deletedCategory &&
                      selectedCategoryFilter === deletedCategory.name
                    )
                      !isDeletingCategory &&
                        dispatch(setSelectedCategoryFilter("All"));
                  }}
                  disabled={isDeletingCategory}
                >
                  <img
                    src="/icons/remove.svg"
                    alt="delete icon"
                    className="w-5"
                  />
                </button>
              )}
            </WideInputSelect.Option>
          ))
        )}
      </WideInputSelect>
      <InputFilter
        label="status"
        id="status"
        options={["Completed", "Uncompleted"]}
        onChange={(option) => dispatch(setSelectedStatusFilter(option))}
        defaultValue={selectedStatusFilter}
      />
    </div>
  );
}

export default HabitsControls;
