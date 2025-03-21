import Button from "../../ui/Button";
import { useCheckHabit } from "../habitTracker/useCheckHabit";
import { useCheckTask } from "../taskManagement/useCheckTask";

function DashboardSectionItem({ item, data, i }) {
  const { checkTask, isLoading: isCheckingTask } = useCheckTask();
  const { checkHabit, isLoading: isCheckingHabit } = useCheckHabit();

  return (
    <div className="flex items-start justify-start gap-2" role="row">
      <span className="mt-[-1px] font-bold">{i + 1}</span>
      <span className="leading-4">{item.title}</span>
      <Button
        variation="small"
        additionalStyles="self-center"
        onClick={() => {
          if (data === "task") checkTask({ ...item, checked: !item.checked });
          if (data === "habit")
            checkHabit({
              ...item,
              checkedDates: [
                ...item.checkedDates,
                new Date().toISOString().split("T")[0],
              ],
            });
        }}
        isLoading={isCheckingTask || isCheckingHabit}
      >
        Done
      </Button>
    </div>
  );
}

export default DashboardSectionItem;
