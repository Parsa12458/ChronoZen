import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import InputCheckbox from "../../ui/InputCheckbox";
import Modal from "../../ui/Modal";
import { calculatePercentage, formatDate } from "../../utils/helper";
import GoalForm from "./GoalForm";
import { useCheckGoal } from "./useCheckGoal";
import { useCheckStep } from "./useCheckStep";
import { useDeleteGoal } from "./useDeleteGoal";
import { useState } from "react";

function GoalItem({ goal }) {
  const { deleteGoal, isLoading: isDeleting } = useDeleteGoal();
  const { checkGoal, isLoading: isCheckingGoal } = useCheckGoal();
  const { checkStep } = useCheckStep();
  const [loadingSteps, setLoadingSteps] = useState({});

  const stepsCompletedPercentage = calculatePercentage(
    goal.steps.filter((step) => step.checked === true).length,
    goal.steps.length,
  );

  return (
    <div key={goal.id} className="w-96 rounded bg-lightGreen p-6">
      <div className="flex items-center justify-start gap-2 font-semibold">
        <InputCheckbox
          label={goal.title}
          id={goal.id}
          checked={goal.checked}
          onChange={() => {
            checkGoal({ ...goal, checked: !goal.checked });
          }}
          labelClassName={goal.checked ? "line-through" : ""}
          isLoading={isCheckingGoal}
        />

        <Badge variation="solid" backgroundColor={goal.category.bgColor}>
          {goal.category.name}
        </Badge>
        <Badge variation="outlined" borderColor="#6f8779">
          {goal.priority}
        </Badge>
      </div>
      <div className="ml-5 mt-3 space-y-2">
        <div className="flex items-center gap-1.5">
          <img src="/icons/calendar-clock.svg" className="-mt-1 w-5" />
          <p className="text-[.8em]">
            <span className="font-bold">Deadline: </span>
            <span className="font-semibold">
              {goal.deadline ? formatDate(goal.deadline) : "-"}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <img src="/icons/reward.svg" className="-mt-1 w-5" />
          <p className="text-[.8em]">
            <span className="font-bold">Reward: </span>
            <span className="font-semibold">
              {goal.reward ? goal.reward : "-"}
            </span>
          </p>
        </div>
        <div>
          <p className="flex items-center gap-1.5 text-[.8em]">
            <img src="/icons/steps.svg" className="-mt-1 w-5" />
            <span className="font-bold">Steps: </span>
          </p>
          <ol className="ml-1 mt-2 flex flex-col items-start justify-center gap-1.5 font-medium">
            {goal.steps.map((step, i) => (
              <li key={step.id}>
                <InputCheckbox
                  size="0.875rem"
                  id={step.id}
                  label={`${i + 1}. ${step.step}`}
                  labelSize="xs"
                  checked={step.checked}
                  isLoading={Boolean(loadingSteps[step.id])}
                  spinnerSize="xs"
                  labelClassName={step.checked ? "line-through" : ""}
                  onChange={() => {
                    setLoadingSteps((prev) => ({ ...prev, [step.id]: true }));
                    checkStep(
                      {
                        ...goal,
                        steps: goal.steps.map((s) =>
                          s.id === step.id ? { ...s, checked: !s.checked } : s,
                        ),
                      },
                      {
                        onSettled: () =>
                          setLoadingSteps((prev) => {
                            const newState = { ...prev };
                            delete newState[step.id];
                            return newState;
                          }),
                      },
                    );
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-7 flex items-center gap-2 text-xs">
        <progress
          className="progress progress-primary h-3 bg-paleGreen"
          max={100}
          value={stepsCompletedPercentage}
        ></progress>
        <span className="font-semibold">{stepsCompletedPercentage}%</span>
      </div>

      <div className="mt-9 flex items-center justify-center gap-3 text-sm">
        <Button
          type="button"
          additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1"
          variation="red"
          onClick={() => deleteGoal(goal.id)}
          disabled={isDeleting}
        >
          <img src="/icons/remove.svg" alt="remove icon" className="w-5" />
          <span>Remove</span>
        </Button>

        <Modal>
          <Modal.Open opens={`Edit:${goal.id}`}>
            <Button
              type="button"
              additionalStyles="w-24 py-1.5 flex justify-center items-center gap-1.5"
              variation="secondary"
            >
              <img src="/icons/edit.svg" alt="edit icon" className="w-3.5" />
              <span>Edit</span>
            </Button>
          </Modal.Open>
          <Modal.Window name={`Edit:${goal.id}`}>
            <GoalForm
              title={`Edit ${goal.title}`}
              goal={goal}
              goalOperation="edit"
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default GoalItem;
