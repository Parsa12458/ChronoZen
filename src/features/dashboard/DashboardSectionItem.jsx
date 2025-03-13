import Button from "../../ui/Button";
import { useCheckTask } from "../taskManagement/useCheckTask";

function DashboardSectionItem({ item, data, i }) {
  const { checkTask, isLoading: isChecking } = useCheckTask();

  return (
    <div className="flex items-start justify-start gap-2" role="row">
      <span className="mt-[-1px] font-bold">{i + 1}</span>
      <span className="leading-4">{item.title}</span>
      <Button
        variation="small"
        additionalStyles="self-center"
        onClick={() => {
          if (data === "task") checkTask({ ...item, checked: !item.checked });
        }}
        isLoading={isChecking}
      >
        Done
      </Button>
    </div>
  );
}

export default DashboardSectionItem;
