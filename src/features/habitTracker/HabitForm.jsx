import { useEffect } from "react";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import { toCamelCase } from "../../utils/helper";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAddHabit } from "./useAddHabit";
import { useEditHabit } from "./useEditHabit";
import { useHabitsCategories } from "./useHabitsCategories";

function HabitForm({ title, onCloseModal, habitOperation, habit }) {
  const { handleSubmit, register, setFocus } = useForm({
    defaultValues: {
      title: habit?.title || "",
      category: toCamelCase(habit?.category?.name || "all"),
      recurringFrequency: habit?.recurringFrequency || "none",
      time: habit?.time ? habit.time.slice(0, 5) : null,
    },
  });
  const { habitsCategories } = useHabitsCategories();
  const { addHabit, isAdding } = useAddHabit();
  const { editHabit, isEditing } = useEditHabit();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFocus("title");
    }, 100);
    return () => clearTimeout(timer);
  }, [setFocus]);

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  function onSubmit(data) {
    const selectedCategory = habitsCategories.find(
      (category) => toCamelCase(category.name) === data.category,
    );
    const editData = { ...data, id: habit?.id, category: selectedCategory };
    const addData = { ...data, category: selectedCategory };
    if (habitOperation === "edit") editHabit(editData);
    if (habitOperation === "add") addHabit(addData);
    onCloseModal?.();
  }

  return (
    <div>
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form
        className="grid grid-cols-2 items-start gap-x-10 gap-y-4"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputField
          id="title"
          label="Habit Title*"
          placeholder="Enter habit title"
          type="text"
          register={register ? register : false}
          validationRules={{ required: "Habit title is required" }}
        />
        <InputSelect
          id="recurringFrequency"
          label="Recurring Frequency"
          options={["None", "Daily", "Weekly", "Monthly", "Yearly"]}
          labelType="normal"
          register={register ? register : false}
        />
        <InputSelect
          id="category"
          label="Category"
          options={
            habitsCategories?.length === 0
              ? ["All"]
              : habitsCategories?.map((category) => category.name)
          }
          labelType="normal"
          register={register ? register : false}
        />
        <InputField
          id="time"
          label="Time"
          placeholder="Select due time"
          type="time"
          register={register ? register : false}
        />

        <div className="col-span-2 mt-7 flex justify-end gap-3 text-sm">
          <Button
            type="button"
            additionalStyles="px-7"
            variation="secondary"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            additionalStyles="px-7"
            variation="primary"
            isLoading={isEditing || isAdding}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default HabitForm;
