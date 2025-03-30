import Button from "../../ui/Button";
import InputFilter from "../../ui/InputFilter";
import Modal from "../../ui/Modal";
import Dropdown from "../../ui/Dropdown";
import InputField from "../../ui/InputField";
import ColorPicker from "../../ui/ColorPicker";
import GoalForm from "./GoalForm";
import { useGoalsCategories } from "./useGoalsCategories";
import { useForm } from "react-hook-form";
import { useAddGoalsCategory } from "./useAddGoalsCategory";
import { useDeleteGoalsCategory } from "./useDeleteGoalsCategory";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  setCategoryColor,
  setSelectedCategoryFilter,
  setSelectedPriorityFilter,
  setSelectedStatusFilter,
} from "./goalTrackerSlice";
import WideInputSelect from "../../ui/WideInputSelect";

function GoalsControls() {
  const {
    goalsCategories = [],
    isLoading: isLoadingCategory,
    error,
  } = useGoalsCategories();
  const { addGoalsCategory, isLoading: isAddingCategory } =
    useAddGoalsCategory();
  const { deleteGoalsCategory, isLoading: isDeletingCategory } =
    useDeleteGoalsCategory();
  const { register, handleSubmit, reset } = useForm();
  const {
    categoryColor,
    selectedCategoryFilter,
    selectedPriorityFilter,
    selectedStatusFilter,
  } = useSelector((store) => store.goalTracker);
  const dispatch = useDispatch();

  function onSubmit(data) {
    reset();
    const newData = { ...data, bgColor: categoryColor };
    addGoalsCategory(newData);
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
        <Modal.Open opens="addGoal">
          <Button variation="primary" additionalStyles="px-4 text-sm">
            <img
              src="/icons/add-white.svg"
              alt="add icon"
              className="mr-1.5 w-5"
            />
            <span>Add Goal</span>
          </Button>
        </Modal.Open>
        <Modal.Window name="addGoal">
          <GoalForm title="Add Goal" goalOperation="add" />
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
                      const isInvalid = goalsCategories.some(
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
          goalsCategories.map((category) => (
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
                    deleteGoalsCategory(category.id);

                    const deletedCategory = goalsCategories.find(
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
        label="priority"
        id="priority"
        options={["High", "Medium", "Low"]}
        onChange={(option) => dispatch(setSelectedPriorityFilter(option))}
        defaultValue={selectedPriorityFilter}
      />
      <InputFilter
        label="status"
        id="status"
        options={["In Progress", "Uncompleted", "Completed"]}
        onChange={(option) => dispatch(setSelectedStatusFilter(option))}
        defaultValue={selectedStatusFilter}
      />
    </div>
  );
}

export default GoalsControls;
