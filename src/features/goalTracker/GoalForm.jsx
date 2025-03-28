import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputSteps from "../../ui/InputSteps";
import { useAddGoal } from "./useAddGoal";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { toCamelCase } from "../../utils/helper";
import { useEditGoal } from "./useEditGoal";
import { useGoalsCategories } from "./useGoalsCategories";

function GoalForm({ title, onCloseModal, goal, goalOperation }) {
  const { handleSubmit, register, setFocus, control } = useForm({
    defaultValues: {
      title: goal?.title || "",
      reward: goal?.reward || "",
      deadline: goal?.deadline || null,
      priority: goal?.priority || "high",
      category: toCamelCase(goal?.category?.name || "all"),
      steps: goal?.steps || [],
    },
  });

  const { goalsCategories } = useGoalsCategories();
  const { editGoal, isLoading: isEditing } = useEditGoal();
  const { addGoal, isLoading: isAdding } = useAddGoal();

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
    const selectedCategory = goalsCategories.find(
      (category) => toCamelCase(category.name) === data.category,
    );
    const editData = {
      ...data,
      id: goal?.id,
      category: selectedCategory,
      deadline: data.deadline || null,
    };
    const addData = {
      ...data,
      category: selectedCategory,
      checked: false,
      deadline: data.deadline || null,
    };
    if (goalOperation === "edit") editGoal(editData);
    if (goalOperation === "add") addGoal(addData);
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
          label="Goal Title"
          placeholder="Enter goal title"
          type="text"
          register={register ? register : false}
          validationRules={{ required: "Goal title is required" }}
        />
        <InputField
          id="reward"
          label="Reward"
          placeholder="Enter a reward"
          type="text"
          register={register ? register : false}
        />
        <InputField
          id="deadline"
          label="Deadline"
          placeholder="Select due date"
          type="date"
          register={register ? register : false}
        />
        <div className="row-span-4">
          <InputSteps
            id="goalSteps"
            label="Steps"
            placeholder="Enter each step"
            control={control}
            register={register}
          />
        </div>
        <InputSelect
          id="priority"
          label="Priority"
          options={["High", "Medium", "Low"]}
          labelType="normal"
          register={register ? register : false}
        />
        <InputSelect
          id="category"
          label="Category"
          options={
            goalsCategories?.length === 0
              ? ["All"]
              : goalsCategories?.map((category) => category.name)
          }
          labelType="normal"
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

export default GoalForm;
